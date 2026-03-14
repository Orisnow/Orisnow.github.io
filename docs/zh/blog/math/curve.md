---
title: 曲线
dates: [2026-03-03, 2026-03-05, 2026-03-06, 2026-03-08, 2026-03-12 ]
version: v0.4.5
cover: 
abstract: 
recommend: 8888
tags: 
  - 几何
---

曲线是一维直线在高维空间中的嵌入，我们可以建立点对点的映射关系

## 曲线-弧长
目前还理解不来，考虑到后面的应用，只好多少讲一点想法。毕竟与其说测量曲线的弧长，不如说是想办法使曲线满足和直线一致的测量规则。比较合理的办法就是通过建立点对点的映射实现了，换句话说就是把曲线"拉直"，所谓的s和t可以认为是曲线上的同一点对应到了不同轴上的点，只是存在$\Delta s$具有长度的意义，$\Delta t$ 具有时间或其他什么意义的区别。(具体见[导数](./derivative) )

## 曲线-切向量
站在第三视角，我们可以设立坐标系把曲线表示出来，那如果是第一视角呢，当我们站在曲线的一点上，没有参考系，如何才能知道曲线的样貌?如何才能确保自己走在曲线上?切向量就是用来指示方向的，就像给大海中迷路的船以灯塔一样，不幸的是就连灯塔的位置也是飘忽不定的，除了一直向灯塔前进毫无办法。明明一直在往前走却画出了曲线，这在第三视角听起来着实奇怪，毕竟不论往所谓的"前方"走多远都应该偏离曲线，原因在于第一视角是受限的，"一步"在迈出的过程中**总是**在进行方向的修正(或者说在连续不断地走出无穷小长度的一步)

当使用向量工具研究曲线的"形"的时候，我们通常只需要用到向量的方向属性，因此常设长度为1即使用单位向量 $\mathbf{T}$。

::: example 对给定参数化曲线求单位切向量
对 $\mathbb{R}^3$ 中的曲线 $\gamma(t)=\left\{\left(1+t^2, e^{2 t}, \cos t\right) \mid t \in \mathbb{R}\right\}$^[1],我们需要使用[导数](./derivative.md)作为工具，把 $\gamma$ 对 $t$ 求导得到切向量组并除以向量范数便得到了单位切向量:
$$\mathbf{T}(t)=\frac{\gamma^{'}(t)}{\Vert \gamma^{'}(t)\Vert}=\frac{\left(2 t, 2 e^{2 t},-\sin t\right)}{\sqrt{(2 t)^2+(2 e^{2 t})^2+(-\sin t)^2}}$$

如果取 $t=0$ 就有 $\gamma(0)=(1,1,1)$ 与 $\mathbf{T}(0)=(0,1,0)$

:::



不论在什么坐标系下，借用怎样的参数表示，对于曲线的形来讲，或许切向量就是其的所有了

::: references
- [1][wiki:Tangent vector](https://en.wikipedia.org/wiki/Tangent_vector)
:::

## 曲线-曲率
我们先考察二维平面内的曲线，直觉上看，$f(x)=2x^2$ 看起来比 $g(x)=x^2$ 更弯曲，但是当我们聚焦到 $g(x)$ 的 $(0,0)$ 点附近和 $(1,1)$ 点附近时，可以比较发现 $(1,1)$ 点附近看起来要更"平"一些，这说明曲率应当是曲线的局部特性，而局部范围的考察又会越缩越小直至一点，直觉容易以偏概全。

事实上，对于平面中曲线上的点而言，它在第一视角下的方向只有前后，只有存在参考对象才能感知到方向的变化，因此可以说在第一视角下的“对在曲线的行进中所感知到固定环境变化的快慢的度量”即是第三视角下曲率的来源，又由于曲线在一点的方向可以完全被单位切向量所描述，因此曲率可以理解为单位切向量沿路径变化的度量，写成微分形式即为：
$$\frac{\mathrm{d} \mathbf{T}}{\mathrm{d} s}=\kappa\mathbf{N};\kappa=\left\|\frac{\mathrm{d} \mathbf{T}}{\mathrm{d} s}\right\|$$



::: references
- [1][wiki:Curvature](https://en.wikipedia.org/wiki/Curvature)
:::
## 曲线-挠率
挠率和曲率是相似的概念，不过只存在于三维及以上的空间中，在二维空间中，曲线上点的切向量可能的变化只有“左右”，但是三维空间加上了“上下”，$\mathbf{T}$ 决定了“前”的方向，$\mathbf{N}$ 决定了“左”的方向，这样一来便可以利用叉乘自然地得到“上”的方向向量： $\mathbf{B}=\mathbf{T}\times\mathbf{N}$。曲率依旧描述的是单位切向量 $\mathbf{T}$ 沿路径的变化程度，而挠率自然就是用于描述 $\mathbf{B}$ 沿路径的变化程度(负号来源于右手螺旋线的习惯补正)：
$$\frac{\mathrm{d} \mathbf{B}}{\mathrm{d} s}=-\tau\mathbf{N};\tau=\left\|\frac{\mathrm{d} \mathbf{B}}{\mathrm{d} s}\right\|$$


:::: example 对给定参数化曲线求曲率和挠率
对 $\mathbb{R}^3$ 中的曲线 $\gamma(t)=\left(t, t^{2}, t^{3}\right)$，求一阶导并单位化后便能得到 $\mathbf{T}(t)$ ，至于 $\mathbf{B}$ 可以通过直接对一阶导和二阶导叉乘的结果单位化得到(请自行思考原因，才不是我懒得写呢:tsundere:)，而对于 $s$ 则要使用链式法则这个工具:
$$\frac{\mathrm{d} s}{\mathrm{d} t}=\frac{\mathrm{d} s}{\mathrm{d} \gamma} \frac{\mathrm{d} \gamma}{\mathrm{d} t}=\frac{1}{\mathbf{T}}\gamma^{\prime}(t) \xRightarrow{\text{同时取模}} \mathrm{d} s = \left\| \gamma^{\prime}(t) \right\| \mathrm{d} t $$

对于 $\kappa$，则有:

$$
\begin{align}
  \mathbf{T(t)}&=\frac{\gamma^{\prime}(t)}{\left\| \gamma ^{\prime} (t) \right\|}\\
  \kappa=\left\|\frac{\mathrm{d} T}{\mathrm{d} s}\right\|=\left\|\frac{\mathrm{d} T}{\mathrm{d} t} \frac{\mathrm{d} t}{\mathrm{d} s}\right\|&=\frac{\left\|T^{\prime}(t)\right\|}{\left\|\gamma^{\prime}(t)\right\|} \overset{\text{①}}{=} \frac{\left\|\gamma^{\prime} \times \gamma^{\prime \prime}\right\|}{\left\|\gamma^{\prime}\right\|^3}\\
\end{align} 


$$

对于 $\tau$ ，类似地:

$$
\begin{align}
  \mathbf{B(t)}&=\frac{\gamma^{\prime}(t) \times \gamma^{\prime \prime}(t)}{\left\| \gamma^{\prime}(t) \times \gamma^{\prime \prime}(t) \right\|}\\
  \tau=\left\|\frac{\mathrm{d} B}{\mathrm{d} s}\right\|=\left\|\frac{\mathrm{d} B}{\mathrm{d} t} \frac{\mathrm{d} t}{\mathrm{d} s}\right\|&=\frac{\left\|B^{\prime}(t)\right\|}{\left\|\gamma^{\prime}(t)\right\|}\overset{\text{②}}{=}\frac{\left(\gamma^{\prime} \times \gamma^{\prime \prime}\right) \cdot \gamma^{\prime \prime \prime}}{\left\|\gamma^{\prime} \times \gamma^{\prime \prime}\right\|^2}\\
\end{align} 
$$

代入 $\gamma ^{\prime} (t)=(1,2t,3t^2),\gamma ^{\prime\prime} (t)=(0,2,6t),\gamma ^{\prime\prime\prime} (t)=(0,0,6)$ 可得:

$$
\begin{align}
  \kappa(\gamma(t))&=2 \frac{(1+9t^2+9t^4)^{1/2}}{(1+4t^2+9t^4)^{3/2}} \nonumber \\
  \tau(\gamma(t))&=\frac{3}{1+9t^2+9t^4} \nonumber
\end{align} 
$$

::: tips
对①②的说明：你可以通过直接求出 $\mathbf{T} ^{\prime}$ 和 $\mathbf{B} ^{\prime}$ 并对其取模得到最终结果，这并不容易，但值得一试并与下述解决过程进行对比：

对 $(1)$ 式化为 $\gamma ^{\prime} =\left\| \gamma ^{\prime}  \right\|\mathbf{T}$，对两边同时求导可得 $\gamma ^{\prime\prime} =\left\| \gamma ^{\prime}  \right\|^{\prime} \mathbf{T} +\left\| \gamma ^{\prime}  \right\|\mathbf{T}^{\prime}$，用 $\gamma ^{\prime}$ 同时对等式两边叉乘并取模可以发现 $\left\| \gamma ^{\prime} \times \mathbf{T} \right\|=0$ 与 $\left\| \gamma ^{\prime} \times \mathbf{T} ^{\prime} \right\|=\left\| \gamma ^{\prime} \right\| \left\| \mathbf{T} ^{\prime} \right\|$(因为 $\gamma ^{\prime}$ 和 $\mathbf{T}$ 共线，而与 $\mathbf{T} ^{\prime}$ 垂直)，由此便可获得 $\left\| \gamma ^{\prime}\times \gamma ^{\prime\prime} \right\|=\left\| \gamma ^{\prime} \right\|^{2} \left\| \mathbf{T} ^{\prime}\right\|$

对 $(3)$ 式化为 $\gamma^{\prime} \times \gamma^{\prime \prime} =\left\| \gamma^{\prime} \times \gamma^{\prime \prime} \right\|\mathbf{B}$，对两边同时求导可得 $\gamma ^{\prime\prime} \times \gamma ^{\prime\prime}+\gamma ^{\prime} \times \gamma ^{\prime\prime\prime} =\left\| \gamma^{\prime} \times \gamma^{\prime \prime} \right\| ^{\prime} \mathbf{B} +\left\| \gamma^{\prime} \times \gamma^{\prime \prime} \right\|\mathbf{B}^{\prime}$，其中 $\gamma ^{\prime\prime} \times \gamma ^{\prime\prime}=0$，类似地我们用 $\gamma ^{\prime} \times \gamma ^{\prime\prime}$ 同时对等式两边叉乘并取模有 $\left\| \gamma ^{\prime} \times \gamma ^{\prime\prime} \times \mathbf{B} \right\|=0$、$\left\| \gamma^{\prime} \times \gamma^{\prime \prime} \times \mathbf{B} ^{\prime} \right\|=\left\|\gamma^{\prime} \times \gamma^{\prime \prime}\right\| \left\| \mathbf{B} ^{\prime} \right\|$ 与 $\left\| (\gamma ^{\prime} \times \gamma ^{\prime\prime}) \times (\gamma ^{\prime} \times \gamma ^{\prime\prime\prime}) \right\|=\left(\gamma^{\prime} \times \gamma^{\prime \prime}\right) \cdot \gamma^{\prime \prime \prime} \left\|\gamma^{\prime}(t)\right\|$ (需要利用 $\mathbf{A} \times(\mathbf{B}\times \mathbf{C})=\mathbf{B}(\mathbf{A}\cdot \mathbf{C})-\mathbf{C}(\mathbf{A} \cdot \mathbf{B})$，见[向量-叉乘](./vector.html#向量-叉乘))，由此便可获得 $\left(\gamma^{\prime} \times \gamma^{\prime \prime}\right) \cdot \gamma^{\prime \prime \prime} \left\|\gamma^{\prime}(t)\right\|= \left\|\gamma^{\prime} \times \gamma^{\prime \prime}\right\|^2 \left\|B^{\prime}\right\|$
:::


::::




::: references
- [1]Hubbard, J.; Hubbard, B. B. Vector Calculus, Linear Algebra, and Differential Forms: A Unified Approach. 5th ed. Matrix Editions, 2015, p.393.
:::

