---
title: 向量
dates: [2026-03-10, 2026-03-14 ]
version: v0.7.2
cover: 
abstract: 向量是连接几何与代数的桥梁
recommend: 666
tags: 
  - 几何
  - 代数
---

## 向量-欧式空间
在n维欧式空间中，向量即为我们所熟知的具有特殊性质的一维数组

## 向量-[向量空间](vector_space)
更一般地讲，"向量是向量空间的元素"的说法更为严谨

## 向量-内积
内积是向量之间的基本交互方式，不过我们先不急着讨论比较抽象的向量空间中的内积，着眼于更具体的欧式空间中的点积(在欧式空间中的内积称为点积，通常写作 $\mathbf{a} \cdot \mathbf{b}$)。

## 向量-范数
在欧式空间由内积诱导出的范数一般称为模

## 向量-叉乘
叉乘可以说是针对于三维欧式空间中向量的一种特殊的运算，对于点积我们把 $\mathbf{a}$ 投影到 $\mathbf{b}$ 上，从而得到 $\mathbf{a} \cdot \mathbf{b}=\left\| \mathbf{a} \right\| \left\| \mathbf{b} \right\|\cos \theta$，对于 $\sin \theta$ 则是叉乘 $\mathbf{a} \times \mathbf{b}=\left\| \mathbf{a} \right\| \left\| \mathbf{b} \right\|\sin \theta \mathbf{n}$，这里的 $\mathbf{n}$ 是根据右手定则获得的同时垂直 $\mathbf{a}$ 和 $\mathbf{b}$ 的向量。(说实话我目前并不知道到底该如何解释清楚为什么要这么做，或许是因为垂直关系是"好"的关系，但对于为什么"好"我还没有什么解释手段)

:::: example 三重积
**垂直关系会为点积带来0，平行关系会为叉乘带来0**，这将成为后续说明的有力工具

对于标量三重积：
$$
\mathbf{A} \cdot (\mathbf{B} \times \mathbf{C})=\mathbf{B} \cdot (\mathbf{C} \times \mathbf{A})=\mathbf{C} \cdot (\mathbf{A} \times \mathbf{B}):=[\mathbf{A}\: \mathbf{B}\: \mathbf{C}]
$$

考察它蕴含的几何含义是最为简单的，可以发现这些标量三重积都给出了三个向量所围成的平行六面体的体积(至于共面的情况，叉乘为反方向时的情况自行考虑)

<IGStyleA :items="[
  { label: 'ABC', src: '/blog/math/vector/ABC.svg' },
  { label: 'BCA ', src: '/blog/math/vector/BCA.svg' },
  { label: 'CAB', src: '/blog/math/vector/CAB.svg' }
]" />

对于矢量三重积 $\mathbf{A}\times (\mathbf{B}\times \mathbf{C})$ 结果则是个向量，由于叉乘生成向量的垂直特性可以知道最终结果一定落在 $\mathbf{B}$ 和 $\mathbf{C}$ 张成的平面内，即一定具有如下形式：
$$
\begin{align}
  \mathbf{A}\times (\mathbf{B}\times \mathbf{C})=x \mathbf{B}+y \mathbf{C}\\
\end{align} 
$$
由于 $x$ 和 $y$ 是标量，我们需要用 $\mathbf{A}$ 点乘^[1] (由于叉乘没有结合律，用 $\mathbf{B}$、$\mathbf{C}$ 叉乘并不是个好选择)：
$$x \mathbf{A} \cdot \mathbf{B}+y \mathbf{A} \cdot \mathbf{C}=0$$
则有 $x= \lambda\mathbf{A} \cdot \mathbf{C}$ 与 $y=- \lambda \mathbf{A} \cdot \mathbf{B} (\lambda \neq 0)$，代回$(1)$式：
$$
\begin{align}
  \mathbf{A}\times (\mathbf{B}\times \mathbf{C})=\lambda(\mathbf{A} \cdot \mathbf{C} )\mathbf{B}-\lambda (\mathbf{A} \cdot \mathbf{B}) \mathbf{C}\\
\end{align} 
$$
$(2)$ 式对所有的 $\mathbf{A} \mathbf{B} \mathbf{C}$ 都成立，可代入特殊情况求解出 $\lambda$：
$$
\begin{align}
&\text{取} \mathbf{A}=\hat{i},\mathbf{B}=\hat{i},\mathbf{C}=\hat{j}, \text{则：} \nonumber\\
&\hat{i}\times(\hat{i}\times \hat{j})=\lambda(\hat{i}\cdot \hat{j})\hat{i}-\lambda(\hat{i}\cdot \hat{i})\hat{j} \nonumber\\
&\Rightarrow \hat{j}=-\lambda \hat{j} \Rightarrow \lambda=-1 \nonumber\\
\end{align} 
$$
故：
$\mathbf{A}\times (\mathbf{B}\times \mathbf{C})=(\mathbf{A} \cdot \mathbf{C} )\mathbf{B}-(\mathbf{A} \cdot \mathbf{B}) \mathbf{C}$


搞了半天感觉就是在抄^[1]里面的东西，不过自己也确实想不出还有什么可优化的点，就加个使用例吧(非常好三重积，爱来自^[1]Properties第四条)：
$$
\begin{align}
  [\mathbf{A}\times \mathbf{B}\quad\mathbf{B}\times \mathbf{C}\quad\mathbf{C}\times \mathbf{A}]=\mathbf{A}\times \mathbf{B} \cdot ((\mathbf{B}\times \mathbf{C}) \times (\mathbf{C}\times \mathbf{A}))
\end{align} 
$$
其中：
$$
\begin{align}
  (\mathbf{B}\times \mathbf{C}) \times (\mathbf{C}\times \mathbf{A})&=((\mathbf{B}\times \mathbf{C}) \cdot \mathbf{A} )\mathbf{C}-((\mathbf{B}\times \mathbf{C}) \cdot \mathbf{C}) \mathbf{A} \nonumber\\
  &=[\mathbf{A}\: \mathbf{B} \: \mathbf{C}]\nonumber \mathbf{C}-0 \mathbf{A}\\
\end{align} 
$$
代入 $(3)$ 可得：
$$
[\mathbf{A}\times \mathbf{B}\quad\mathbf{B}\times \mathbf{C}\quad\mathbf{C}\times \mathbf{A}]=[\mathbf{A}\: \mathbf{B} \: \mathbf{C}]^2\nonumber
$$
(见[行列式](determinant))由于 $[\mathbf{A}\: \mathbf{B} \: \mathbf{C}]$ 可表示为 $\det(\mathbf{M})$，其中 $\mathbf{M}=\lgroup \mathbf{A}\: \mathbf{B} \: \mathbf{C} \rgroup$，所以右式可以表示为：
$$
[\mathbf{A}\: \mathbf{B} \: \mathbf{C}]^2
=
\det \left( \mathbf{M} \mathbf{M}^{\text{T}} \right)
=
\begin{vmatrix}
\mathbf{A} \cdot \mathbf{A} & \mathbf{A} \cdot \mathbf{B} & \mathbf{A} \cdot \mathbf{C}\\
\mathbf{B} \cdot \mathbf{A} & \mathbf{B} \cdot \mathbf{B} & \mathbf{B} \cdot \mathbf{C}\\
\mathbf{C} \cdot \mathbf{A} & \mathbf{C} \cdot \mathbf{B} & \mathbf{C} \cdot \mathbf{C}
\end{vmatrix}
$$


::: references
- [1][byjus.com/jee/vector-triple-product/](https://byjus.com/jee/vector-triple-product/)

:::

::::

## 向量-[矩阵](matrix)

## 向量-外积



