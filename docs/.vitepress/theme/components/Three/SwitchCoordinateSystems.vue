<template>
  <div class="switch_coordinate_systems">
    <div class="switcher">
      <select name="switcher" id="switcher">
        <option value="Catesian">直角坐标系</option>
        <option value="Cylindrical">柱坐标系</option>
        <option value="Spherical">球坐标系</option>
      </select>
    </div>
    <div ref="canvasRef"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount} from 'vue';
import * as THREE from 'three';
import { useStats } from '../../utils/Stats/useStats.mts';

useStats().auto();

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;

const canvasRef = ref<HTMLElement | null >(null);

const init =()=> {
  if(!canvasRef.value) return;

  const w = canvasRef.value.clientWidth;
  const h = canvasRef.value.clientHeight;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(60, w / h, 1, 1000);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(w, h);
  canvasRef.value.appendChild(renderer.domElement)

  SwitchCoordinateSystems();
}

const SwitchCoordinateSystems = ()=>(
  666
)

onMounted(()=>init());
onBeforeUnmount(()=>
  renderer.dispose()
)

</script>

<style lang="css" scoped>
.switch_coordinate_systems {
  display: flex;
}

</style>