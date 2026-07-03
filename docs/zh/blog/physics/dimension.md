---
title: 量纲
dates: [2026-03-22, 2026-03-31]
version: v0.0.0
cover: 
abstract: 
recommend: 
tags: 
  - 
---

$$
\begin{array}{ccc}
\hline \rule{0pt}{3ex}
\textbf{物理量} & \textbf{量纲} & \textbf{SI 单位} \\[1ex]
\hline \rule{0pt}{3ex}
\text{质量} & \mathrm{M} & \mathrm{kg} \\[0.5ex]
\text{长度} & \mathrm{L} & \mathrm{m} \\[0.5ex]
\text{时间} & \mathrm{T} & \mathrm{s} \\[0.5ex]
\text{温度} & \mathrm{\Theta} & \mathrm{K}\\[0.5ex]
\text{电流} & \mathrm{I} & \mathrm{A}\\[0.5ex]
\text{物质的量} & \mathrm{N} & \mathrm{mol} \\[0.5ex]
\text{发光强度} & \mathrm{J} & \mathrm{cd} \\[0.5ex]
\hline
\end{array}
$$
<p align="center">表 1: 基本物理量量纲和国际 SI 单位</p>


## 量纲-单位
量纲可以说是具有相同含义的单位的集合，比如 $\mathrm{mm、cm、m}$ 这些都有长度的含义，就设定它们的量纲都为 $\mathrm{L}$，$\mathrm{J、kWh、eV}$ 都有能量的含义，用基本量纲表示就为 $\mathrm{ML^{2}T^{-2}}$。对于任何物理量 $A$，不论单位如何，都能用基本量纲表示：
$$
[A]=\mathrm{M^{\alpha}L^{\beta}T^{\gamma} \Theta^{\delta} I^{\epsilon}N^{\zeta}J^{\eta}}
$$

::: references
- [1][中文维基:量纲](https://zh.wikipedia.org/zh-cn/%E9%87%8F%E7%BA%B2)
:::

## 量纲-[向量空间](../math/vector_space)
在物理的世界中，我们并不能随意地进行加减，像 $\mathrm{1kg+1K}$ 这种式子并没有什么意义，这从量纲的角度则解释为 $\mathrm{kg}$ 和 $\mathrm{K}$ 对应的量纲不是同一个(前一个是 $\mathrm{M}$，后一个则是 $\mathrm{\Theta}$),而 $\mathrm{1cm>1mm}$ 正是因为两边的量纲都为 $\mathrm{L}$ 才有了可比性。神奇的是对于乘法依然遵循我们熟悉的规律，即便 $\mathrm{L^{1}M^{1}T^{4} \Theta^{5} I^{1}N^{4}}$ (光强日常不起眼)没有直白的物理解释，它仍能被构造性地写出。

物理量的加减法告诉我们物理式子量纲的唯一性，乘除法告诉了我们量纲之间能够相互转换。不过出于实际应用的考虑，在SI单位制中，我们设定七个基本量纲相互独立(其他的像在高斯单位制中 $\mathrm{I}$ 能被 $\mathrm{LMT}$ 所表示)，此时如果固定量纲的位置(把它们视为基底向量)，则 $[A]$ 能表示为 $\mathrm{(a,b,c,d,e,f,g)}$，对于力学只涉及 $\mathrm{MLT}$，便可写作 $\mathrm{(a,b,c)}$。这样做使得我们将量纲的乘法转化为了向量的加法(插个眼，从数学的角度看这似乎叫[同态](../math/homomorphism))，使得我们能够**一定程度上**将量纲视为向量。


## 白金汉 $\pi$ 定理-量纲
不论物理量之间怎么运算，物理定律用等式还是不等式表示，**可比较式子的量纲一定是相等的**，比如 $\mathbf{F}=m \mathbf{a}$ 是 $\mathrm{MLT^{-2}=MLT^{-2}}$，$\Delta x \Delta p \geq \hbar/2$ 是 $\mathrm{ML^{2}T^{-1}=ML^{2}T^{-1}}$,对于已知的物理定律是如此，对于暂且未知的定律也不例外，这使我们有机会进行猜测并给出一些可能的公式。

一个物理定律需要用两个及以上的物理量进行描述(否则只能写下t=t这种绝对正确的式子)，对于一个系统中给出的一些物理量，我们可以用千奇百怪的方式组合它们，而组合出来的式子本身会有一个量纲，如果有两个式子的量纲相同，我们就可以把它们进行比较进而发展出可能的物理定律。

::: example 白金汉π定理-通过例题说明
^[1]在为未来垂直农场设计无源微灌系统时，工程师们正在探索利用毛细作用将富含营养的溶液输送到植物根部。他们将该系统建模为一组狭窄的圆柱形管。据推测，溶液上升的高度 $h$ 取决于管的半径 $r$、溶液的密度 $\rho$、溶液的表面张力 $\gamma$ 以及当地的重力加速度 $g$。表面张力 $\gamma$ 的单位是力每单位长度。确定高度 $h$ 作为其他参数函数的通用标度律。你的答案应该是一个用 $r,\rho,\gamma,g$ 和一个待定的无量纲比例常数 $C$ 来表示 $h$ 的表达式。

我们先写出所有物理量的量纲：$[h]=\mathrm{L}=(0,1,0),[r]=\mathrm{L}=(0,1,0),[\rho]=\mathrm{ML^{-3}=(1,0,-3),[\gamma]=\mathrm{MT^{-2}}=(1,0,-2),[g]=\mathrm{LT^{-2}}}=(0,1,-2)$

我们假设两种组合方式分别为 $P_1$ 和 $P_2$，它们的量纲可以表示为:
$$
\begin{align}
  [P_1]=[h]^{a_1}[r]^{b_1}[\rho]^{c_1}[\gamma]^{d_1}[g]^{e_1}  \nonumber\\
  [P_2]=[h]^{a_2}[r]^{b_2}[\rho]^{c_2}[\gamma]^{d_2}[g]^{e_2}  \nonumber\\
\end{align} 
$$
如果 $[P_1]=[P_2]$，则 $[P_1]/[P_2]=1$(这是白金汉 $\pi$ 定理的核心操作，1即表现为无量纲)，令 $a=a_1-a_2,b=b_1-b_2,c=c_1-c_2,d=d_1-d_2,e=e_1-e_2$，则化为；
$$[h]^{a}[r]^{b}[\rho]^{c}[\gamma]^{d}[g]^{e}=1=\mathrm{M^0L^0T^0}$$

换言之，我们要解的方程是：
$$
a \begin{bmatrix} 	0\\ 	1\\ 	0\\ \end{bmatrix}
+b \begin{bmatrix} 	0\\ 	1\\ 	0\\ \end{bmatrix}
+c \begin{bmatrix} 	1\\ 	0\\ 	-3\\ \end{bmatrix}
+d \begin{bmatrix} 	1\\ 	0\\ 	-2\\ \end{bmatrix}
+e \begin{bmatrix} 	0\\ 	1\\ 	-2\\ \end{bmatrix}
= \begin{bmatrix} 	0\\ 	0\\ 	0\\ \end{bmatrix}
$$
化为：
$$
\begin{bmatrix} 
	0 &0 &1 &1 &1\\
  1 &1 &0 &0 &1\\
  0 &0 &-3 &-2 &-2\\
\end{bmatrix}
\begin{bmatrix} 	a\\ 	b\\ 	c\\  d\\  e\\ \end{bmatrix}
= \begin{bmatrix} 	0\\ 	0\\ 	0\\ \end{bmatrix}

$$
这个[线性方程组](../math/linear_equations)的有5个变量，系数[矩阵](../math/matrix)秩为3，因此解空间的维数是2，这意味着我们可以找到 $abcde$ 的两组非零解，比如 $(1,-1,0,0,0)、(0,-2,-1,1,-1)$，于是我们就获得了两个无量纲量：$\pi_1= h^{1} r^{-1} \rho^{0} \gamma^{0} g^{0}=h/r$ 和 $\pi_2= h^{0} r^{-2} \rho^{-1} \gamma^{1} g^{-1}=\gamma / \rho g r^{2}$(这两个无量纲量是最简单的形式，如果你愿意也可以尝试下 $\mathrm{d}h/\mathrm{d}r$ 或其他更奇怪的数学表达式)，$[\pi_1]$ 和 $[\pi_2]$ 就成为了这个解空间的基，因此 $k_1[\pi_1]+k_2[\pi_2]=1$，那么这个物理系统的无量纲量就是 $\Pi(\pi_1,\pi_2)=\pi_1^{k_1} \pi_2^{k_2}=C$,利用[隐函数定理](../math/function#隐函数定理-函数)可以写成 $\pi_1=\Phi(\pi_2)$ 的形式，取最简单的线性形式则为 $h/r=C \gamma / \rho g r^{2}$ 即 $h=\gamma / \rho g r$
:::


::: references
- [1][bohrium:白金汉Pi定理#练习1](https://waf-www-bohrium-com-hngfcxduded0fmhr.a03.azurefd.net/sciencepedia/feynman/estimation_scaling_and_asymptotics_in_physics_undergraduate-the_Buckingham_Pi_theorem#%E7%BB%83%E4%B9%A0%201)

:::