---
title: 刚体
dates: [2026-02-19,]
version: v0.1.1
cover: https://ghproxy.net/https://raw.githubusercontent.com/Orisnow/Images/refs/heads/main/sana/%E6%89%AB%E6%8F%8F%E5%9B%BE.jpg
abstract: 随便写点对刚体的理解
recommend: 3
tags: 
  - 力学
  - 模型
---

刚体是物理上重要的理想模型，通过去除物体的弹性，使得我们能以更加简单的视角分析力学效应

## 刚体-点
如果我们想用数学语言描述刚体，几何上讲，我们目前不得不借助点表达（无限切分刚体是一种较为直观的思路，但也可能使得误解无限、连续性等概念），于是刚体内部（不特意区分边缘）的**所有点**便构成了刚体，通过选定坐标系它们就成为了具有坐标的点。为了满足刚体**不可压缩**的特点，选定任意两个编号点，这两点之间的距离必须固定，因此，确定了1的坐标，2的坐标范围就被限制在以1为球心的球面上，确定了1、2的坐标，则3就被限制在两球的交集——圆环上（存在坍缩为一点的特殊情况），确定了1、2、3的坐标，则4就只能有两种可能性（想想1、2、3共线会发生什么），可以想见四个无共线现象的点便能确定一个三维刚体在三维空间的位置，同理三个不共线的点能确定一个二维刚体在三维空间的位置，两个点则能确定一个二维刚体在二维空间的位置（因为不存在翻转），这使得计算分析大大简化。

<IGStyleA :items="[
  { label: '两点 (圆球)', src: '/blog/physics/rigid_body/rigid_body_p1_p2.svg' },
  { label: '三点 (圆环)', src: '/blog/physics/rigid_body/rigid_body_p1_p2_p3.svg' },
  { label: '四点 (孤立点)', src: '/blog/physics/rigid_body/rigid_body_p1_p2_p3_p4.svg' }
]" />

![Kanae](/images/Kanae.png)
![MHWI86](/images/MHWI86.png)