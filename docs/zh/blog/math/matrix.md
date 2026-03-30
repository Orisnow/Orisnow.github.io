---
title: 矩阵
dates: [2026-03-24 ]
version: v0.0.0
cover: 
abstract: 
recommend: 
tags: 
  - 
---

## 矩阵-[数组](../computer/array)
矩阵首先是一种二维数组，不过在数学中它被赋予了一些特性，并且计数是从1开始的，常写为下面的形式：
$$
\mathbf{A}=
\left[\begin{array}{ccccccc}
a_{11} & a_{12} & a_{13} & \ldots & a_{1 j} & \ldots & a_{1 n} \\
a_{21} & a_{22} & a_{23} & \ldots & a_{2 j} & \ldots & a_{2 n} \\
a_{31} & a_{32} & a_{33} & \ldots & a_{3 j} & \ldots & a_{3 n} \\
\vdots & \vdots & \vdots & \ddots & \vdots & \ddots & \vdots \\
a_{i 1} & a_{i 2} & a_{i 3} & \ldots & a_{i j} & \ldots & a_{i n} \\
\vdots & \vdots & \vdots & \ddots & \vdots & \ddots & \vdots \\
a_{m 1} & a_{m 2} & a_{m 3} & \ldots & a_{m j} & \ldots & a_{m n}
\end{array}\right]
$$
矩阵常使用大写字母表示，而用小写字母+下标指代特定元素，如果是大写字母+下标如 $\mathbf{A}_{mn}$ 则常指该矩阵是 $m$ 行 $n$ 列的 