<template>
  <div class="rigid-demo-container">
    <div class="controls-panel">
      <div class="control-group">
        <span class="label">约束维度:</span>
        <button :class="{ active: pointCount === 2 }" @click="setPointCount(2)">2点</button>
        <button :class="{ active: pointCount === 3 }" @click="setPointCount(3)">3点</button>
        <button :class="{ active: pointCount === 4 }" @click="setPointCount(4)">4点</button>
      </div>
      <div class="control-group">
        <span class="label">操作:</span>
        <button class="action-btn" @click="refreshShape">刷新外形</button>
        <button class="action-btn" @click="refreshPoints">刷新点位</button>
      </div>
      <div class="control-group">
        <label class="toggle-label">
          <input type="checkbox" v-model="showSpheres" @change="updateVisuals" />
          显示约束球面
        </label>
      </div>
      <div class="hint" v-if="pointCount < 4">💡 提示：尝试使用鼠标拖拽绿色的动点</div>
      <div class="hint" v-else>💡 提示：4点锁定状态，点击动点可在两个镜像解之间切换</div>
    </div>
    <div ref="canvasRef" class="canvas-wrapper"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, shallowRef } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { DragControls } from 'three/examples/jsm/controls/DragControls.js';
import { useStats } from '../../utils/Stats/useStats.mts';

// 在开发环境下，这一行会自动把面板挂到 Navbar，并启动全局帧率监控
useStats().auto();
// --- UI 状态 ---
const canvasRef = ref<HTMLElement | null>(null);
const pointCount = ref<number>(3);
const showSpheres = ref<boolean>(false);

// --- Three.js 核心 ---
let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
let orbitControls: OrbitControls, dragControls: DragControls;
let animationId: number, resizeObserver: ResizeObserver;

// --- 场景对象 ---
let rigidBodyMesh: THREE.Mesh;
let rigidBodyWireframe: THREE.LineSegments;
let fixedPoints: THREE.Mesh[] = [];
let movingPoint: THREE.Mesh | null = null;
let ghostPoint: THREE.Mesh | null = null; // 4点时的镜像解

// --- 可视化与约束数据 ---
let constraintVisuals: THREE.Object3D[] = [];
// 记录刷新点位时的初始状态，用于约束拖拽
let initialDistances: number[] = []; 
let circleCenter = new THREE.Vector3();
let circleAxis = new THREE.Vector3();
let circleRadius = 0;

// --- 材质与几何体池 ---
const geomPool = {
  fixed: new THREE.BoxGeometry(0.15, 0.15, 0.15), // 定点是方块
  moving: new THREE.SphereGeometry(0.12, 16, 16), // 动点是球
  ghost: new THREE.SphereGeometry(0.12, 8, 8)     // 幽灵点
};
const matPool = {
  fixed: new THREE.MeshLambertMaterial({ color: 0xff4444 }),
  moving: new THREE.MeshLambertMaterial({ color: 0x44ff44 }),
  ghost: new THREE.MeshBasicMaterial({ color: 0x44ff44, wireframe: true, transparent: true, opacity: 0.5 }),
  body: new THREE.MeshPhongMaterial({ color: 0x4488ff, transparent: true, opacity: 0.15, flatShading: true }),
  edge: new THREE.LineBasicMaterial({ color: 0x88bbff, transparent: true, opacity: 0.5 }),
  trajectory: new THREE.LineBasicMaterial({ color: 0x44ff44 }),
  sphere: new THREE.MeshBasicMaterial({ color: 0xff4444, wireframe: true, transparent: true, opacity: 0.08 }),
  axis: new THREE.LineDashedMaterial({ color: 0xffffff, dashSize: 0.2, gapSize: 0.1 })
};

const initThree = () => {
  if (!canvasRef.value) return;
  scene = new THREE.Scene();
  scene.background = new THREE.Color('#1e1e20');

  const w = canvasRef.value.clientWidth, h = canvasRef.value.clientHeight;
  camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
  camera.position.set(4, 3, 5);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  canvasRef.value.appendChild(renderer.domElement);

  orbitControls = new OrbitControls(camera, renderer.domElement);
  orbitControls.enableDamping = true;

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(5, 10, 5);
  scene.add(dirLight);

  // 初始化拖拽控制器
  dragControls = new DragControls([], camera, renderer.domElement);
  setupDragLogic();

  refreshShape();

  resizeObserver = new ResizeObserver(() => {
    if (!canvasRef.value) return;
    camera.aspect = canvasRef.value.clientWidth / canvasRef.value.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvasRef.value.clientWidth, canvasRef.value.clientHeight);
  });
  resizeObserver.observe(canvasRef.value);

  animate();
};

// --- 核心数学：拖拽约束投影 ---
const setupDragLogic = () => {
  dragControls.addEventListener('dragstart', () => orbitControls.enabled = false);
  dragControls.addEventListener('dragend', () => orbitControls.enabled = true);
  
  dragControls.addEventListener('drag', (event) => {
    const obj = event.object;
    
    if (pointCount.value === 2) {
      // 投影到球面
      const center = fixedPoints[0].position;
      const dir = new THREE.Vector3().subVectors(obj.position, center).normalize();
      obj.position.copy(center).add(dir.multiplyScalar(initialDistances[0]));
    } 
    else if (pointCount.value === 3) {
      // 投影到圆环 (限制在垂直于轴线的平面内)
      const v = new THREE.Vector3().subVectors(obj.position, circleCenter);
      // 减去在轴线上的分量
      const vProj = v.sub(circleAxis.clone().multiplyScalar(v.dot(circleAxis))).normalize();
      obj.position.copy(circleCenter).add(vProj.multiplyScalar(circleRadius));
    }
    else if (pointCount.value === 4 && ghostPoint) {
      // 4点状态：拖拽实际上是“切换”两个解
      const distToReal = obj.position.distanceTo(movingPoint!.position); // 这里 movingPoint 引用已被更新，逻辑需调整
      // 为了稳定，4点时我们通过点击而不是拖拽来切换
      obj.position.copy(ghostPoint.position);
      // 交换位置
      const temp = ghostPoint.position.clone();
      ghostPoint.position.copy(movingPoint!.position); // 原来的位置变成幽灵
      movingPoint!.position.copy(temp);
    }
    updateVisuals(); // 实时更新视觉反馈
  });
};

const disposeArr = (arr: THREE.Object3D[]) => {
  arr.forEach(obj => {
    scene.remove(obj);
    if (obj instanceof THREE.Mesh || obj instanceof THREE.Line) obj.geometry?.dispose();
  });
  arr.length = 0;
};

// --- 算法：获取刚体内部的随机点 ---
const getRandomPointInside = (): THREE.Vector3 => {
  const pos = new THREE.Vector3();
  const raycaster = new THREE.Raycaster();
  const dir = new THREE.Vector3();
  
  // 最大重试 100 次，防止死循环
  for(let i = 0; i < 100; i++) {
    // 在包围盒内生成随机点
    pos.set(
      (Math.random() - 0.5) * 3,
      (Math.random() - 0.5) * 3,
      (Math.random() - 0.5) * 3
    );
    dir.copy(pos).normalize();
    raycaster.set(new THREE.Vector3(0,0,0), dir); // 从原点向外射
    const intersects = raycaster.intersectObject(rigidBodyMesh);
    // 如果交点距离大于点到原点的距离，说明点在内部
    if (intersects.length > 0 && intersects[0].distance >= pos.length()) {
      return pos;
    }
  }
  return new THREE.Vector3(0,0,0); // 兜底返回原点
};

const refreshShape = () => {
  if (rigidBodyMesh) {
    scene.remove(rigidBodyMesh);
    rigidBodyMesh.geometry.dispose();
  }
  if (rigidBodyWireframe) {
    scene.remove(rigidBodyWireframe);
    rigidBodyWireframe.geometry.dispose();
  }

  const geometry = new THREE.IcosahedronGeometry(1.5, 0);
  rigidBodyMesh = new THREE.Mesh(geometry, matPool.body);
  rigidBodyMesh.scale.set(0.6 + Math.random(), 0.6 + Math.random(), 0.6 + Math.random());
  
  rigidBodyWireframe = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), matPool.edge);
  rigidBodyMesh.add(rigidBodyWireframe);

  scene.add(rigidBodyMesh);
  refreshPoints();
};

const refreshPoints = () => {
  disposeArr(fixedPoints);
  if (movingPoint) { scene.remove(movingPoint); movingPoint = null; }
  if (ghostPoint) { scene.remove(ghostPoint); ghostPoint = null; }

  const count = pointCount.value;
  
  // 生成定点
  for (let i = 0; i < count - 1; i++) {
    const mesh = new THREE.Mesh(geomPool.fixed, matPool.fixed);
    mesh.position.copy(getRandomPointInside());
    scene.add(mesh);
    fixedPoints.push(mesh);
  }

  // 生成动点
  movingPoint = new THREE.Mesh(geomPool.moving, matPool.moving);
  movingPoint.position.copy(getRandomPointInside());
  scene.add(movingPoint);

// 更新拖拽目标（直接操作 objects 属性）
  dragControls.objects.length = 0;
  if (movingPoint) {
    dragControls.objects.push(movingPoint);
  }

  calculateConstraints();
  updateVisuals();
};

// --- 计算约束基础数据 ---
const calculateConstraints = () => {
  if (!movingPoint) return;
  const pM = movingPoint.position;
  initialDistances = fixedPoints.map(fp => fp.position.distanceTo(pM));

  if (pointCount.value === 3) {
    const p1 = fixedPoints[0].position, p2 = fixedPoints[1].position;
    circleAxis.subVectors(p2, p1).normalize();
    const v1M = new THREE.Vector3().subVectors(pM, p1);
    const projLen = v1M.dot(circleAxis);
    circleCenter.copy(p1).add(circleAxis.clone().multiplyScalar(projLen));
    circleRadius = circleCenter.distanceTo(pM);
  }
  
  if (pointCount.value === 4) {
    // 计算镜像点
    const p1 = fixedPoints[0].position, p2 = fixedPoints[1].position, p3 = fixedPoints[2].position;
    const v1 = new THREE.Vector3().subVectors(p2, p1);
    const v2 = new THREE.Vector3().subVectors(p3, p1);
    const normal = new THREE.Vector3().crossVectors(v1, v2).normalize();
    
    const d = new THREE.Vector3().subVectors(pM, p1).dot(normal);
    const ghostPos = pM.clone().sub(normal.multiplyScalar(2 * d));
    
    ghostPoint = new THREE.Mesh(geomPool.ghost, matPool.ghost);
    ghostPoint.position.copy(ghostPos);
    scene.add(ghostPoint);
  }
};



const setPointCount = (c: number) => {
  if (pointCount.value === c) return;
  pointCount.value = c;
  refreshPoints();
};

// --- 视觉更新 ---
const updateVisuals = () => {
  disposeArr(constraintVisuals);
  if (!movingPoint) return;

  const pM = movingPoint.position;

  // 1. 绘制可选的约束球面
  if (showSpheres.value) {
    fixedPoints.forEach((fp, index) => {
      const radius = initialDistances[index];
      const sphere = new THREE.Mesh(new THREE.SphereGeometry(radius, 24, 24), matPool.sphere);
      sphere.position.copy(fp.position);
      scene.add(sphere);
      constraintVisuals.push(sphere);
    });
  }

  // 2. 绘制轴线和轨迹
  if (pointCount.value === 2) {
    // 画一条连线表示连杆
    const lineGeom = new THREE.BufferGeometry().setFromPoints([fixedPoints[0].position, pM]);
    const line = new THREE.Line(lineGeom, matPool.trajectory);
    scene.add(line);
    constraintVisuals.push(line);
  } 
  else if (pointCount.value === 3) {
    // 旋转轴线 (贯穿 P1 P2 并向外延伸)
    const p1 = fixedPoints[0].position, p2 = fixedPoints[1].position;
    const axisExt = circleAxis.clone().multiplyScalar(3);
    const lineGeom = new THREE.BufferGeometry().setFromPoints([
      p1.clone().sub(axisExt), p2.clone().add(axisExt)
    ]);
    const axisLine = new THREE.Line(lineGeom, matPool.axis);
    axisLine.computeLineDistances();
    scene.add(axisLine);
    constraintVisuals.push(axisLine);

    // 轨迹圆环
    const curve = new THREE.EllipseCurve(0, 0, circleRadius, circleRadius, 0, 2 * Math.PI, false, 0);
    const points = curve.getPoints(50);
    const circleGeom = new THREE.BufferGeometry().setFromPoints(points.map(p => new THREE.Vector3(p.x, p.y, 0)));
    const circleLine = new THREE.Line(circleGeom, matPool.trajectory);
    
    circleLine.position.copy(circleCenter);
    const target = circleCenter.clone().add(circleAxis);
    circleLine.lookAt(target);
    scene.add(circleLine);
    constraintVisuals.push(circleLine);
  }
};

const animate = () => {
  animationId = requestAnimationFrame(animate);
  orbitControls.update();
  renderer.render(scene, camera);
};

onMounted(() => initThree());
onBeforeUnmount(() => {
  cancelAnimationFrame(animationId);
  resizeObserver?.disconnect();
  disposeArr(fixedPoints);
  disposeArr(constraintVisuals);
  if (rigidBodyMesh) disposeArr([rigidBodyMesh]);
  if (movingPoint) disposeArr([movingPoint]);
  if (ghostPoint) disposeArr([ghostPoint]);
  renderer?.dispose();
});
</script>

<style lang="css" scoped>
.rigid-demo-container {
  position: relative;
  width: 100%;
  height: 550px;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--vp-c-bg-alt, #1e1e20);
  border: 1px solid var(--vp-c-divider);
  display: flex;
  flex-direction: column;
}

.controls-panel {
  position: absolute;
  top: 10px; left: 10px; right: 10px;
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  background: rgba(20, 20, 24, 0.85);
  backdrop-filter: blur(8px);
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.control-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.label { font-size: 13px; color: #aaa; font-weight: 500; }

.toggle-label {
  font-size: 13px; color: #ddd; display: flex; align-items: center; gap: 4px; cursor: pointer;
}

.hint {
  width: 100%; font-size: 12px; color: #44ff44; margin-top: 4px;
}

button {
  background: var(--vp-c-default-soft, rgba(255, 255, 255, 0.1));
  color: var(--vp-c-text-1, #eee);
  border: 1px solid transparent;
  padding: 4px 10px; border-radius: 4px; font-size: 13px; cursor: pointer; transition: all 0.2s;
}
button:hover { background: rgba(255, 255, 255, 0.2); }
button.active { background: var(--vp-c-brand, #646cff); color: white; border-color: rgba(255, 255, 255, 0.2); }
.action-btn { border: 1px solid rgba(255, 255, 255, 0.2); }

.canvas-wrapper { flex: 1; width: 100%; height: 100%; cursor: grab; }
.canvas-wrapper:active { cursor: grabbing; }
</style>