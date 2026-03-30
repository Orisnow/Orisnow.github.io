---
title: 量纲
dates: [2026-03-22, ]
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
不论物理量之间怎么运算，物理定律用等式还是不等式表示，**可作比式子的量纲一定是相等的**，比如 $\mathbf{F}=m \mathbf{a}$ 是 $\mathrm{MLT^{-2}=MLT^{-2}}$，$\Delta x \Delta p \geq \hbar/2$ 是 $\mathrm{ML^{2}T^{-1}=ML^{2}T^{-1}}$,对于已知的物理定律是如此，对于暂且未知的定律也不例外，这使我们有机会进行猜测并给出一些可能的公式。

接下来我们"把国际象棋棋盘翻转过来:palm_up_hand:"(:backhand_index_pointing_left:玩海猫玩的)，尝试从 $\mathrm{MLT^{-2}=MLT^{-2}}$ 出发写出物理式子，你会发现如果不限定物理量的数量，即使只涉及最简单的线性相等关系，也能扯出无数个表达式，其中绝大多数可能并没有什么实际意义，因此有必要将物理量的数量进行限定，我们也有必要认为物理系统自动做到了这点(没人会想直接算几十个不同量纲的物理量耦合起来的系统，要真到了必要的时候也会想方设法地解耦)，这也是白金汉 $\pi$ 定理变得**有用**的前提(注意定理本身是普适的，这只是作为工具使用的温馨提示)。

::: example 白金汉π定理-通过例题说明
^[1]在为未来垂直农场设计无源微灌系统时，工程师们正在探索利用毛细作用将富含营养的溶液输送到植物根部。他们将该系统建模为一组狭窄的圆柱形管。据推测，溶液上升的高度 $h$ 取决于管的半径 $r$、溶液的密度 $\rho$、溶液的表面张力 $\gamma$ 以及当地的重力加速度 $g$。表面张力 $\gamma$ 的单位是力每单位长度。确定高度 $h$ 作为其他参数函数的通用标度律。你的答案应该是一个用 $r,\rho,\gamma,g$ 和一个待定的无量纲比例常数 $C$ 来表示 $h$ 的表达式。

我们先写出所有物理量的量纲：$[h]=\mathrm{L}=(0,1,0),[r]=\mathrm{L}=(0,1,0),[\rho]=\mathrm{ML^{-3}=(1,0,-3),[\gamma]=\mathrm{MT^{-2}}=(1,0,-2),[g]=\mathrm{LT^{-2}}}=(0,1,-2)$

对于 $\mathrm{L=L}$，我们可以用这五个物理量凑出一些满足的式子(当然最简单直观的就是 $h=C_{1} r$，只是这并不是我们想要的),对于 $\mathrm{LM^{-2}T^{3}=LM^{-2}T^{3}}$ 又可以凑出一些式子……这样下来光是量纲的等式就有无数个，但是真正的物理公式只有一个，量纲等式也只有一个，即只有一组 $(\alpha,\beta,\gamma)$，换言之，我们要解的方程是：
$$
a \begin{bmatrix} 	0\\ 	1\\ 	0\\ \end{bmatrix}
+b \begin{bmatrix} 	0\\ 	1\\ 	0\\ \end{bmatrix}
+c \begin{bmatrix} 	1\\ 	0\\ 	-3\\ \end{bmatrix}
+d \begin{bmatrix} 	1\\ 	0\\ 	-2\\ \end{bmatrix}
+e \begin{bmatrix} 	0\\ 	1\\ 	-2\\ \end{bmatrix}
= \begin{bmatrix} 	\alpha\\ 	\beta\\ 	\gamma\\ \end{bmatrix}
$$
化为：
$$
\begin{cases}
c + d = \alpha \\
a + b + e = \beta \\
-3c -2d -2e = \gamma \\
\end{cases}
$$
由于 $\alpha \beta \gamma$ 是确定的数，使用[线性方程组](../math/linear_equations)这个工具，5个变量3个线性独立的方程使得我们可以选出两个数线性表出另外三个数，
:::


::: references
- [1][bohrium:白金汉Pi定理#练习1](https://waf-www-bohrium-com-hngfcxduded0fmhr.a03.azurefd.net/sciencepedia/feynman/estimation_scaling_and_asymptotics_in_physics_undergraduate-the_Buckingham_Pi_theorem#%E7%BB%83%E4%B9%A0%201)

:::