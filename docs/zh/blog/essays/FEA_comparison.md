---
title: FEA软件对比
dates: [2026 ]
version: v0.0.0
cover: 
abstract: 
recommend: 
tags: 
  - 
---

实验内容：建立夹心式压电超声换能器的有限元分析模型，仿真计算其谐振和反谐振频率及其相应的模态振型图。

模型一：夹心式压电超声换能器的直径 $40mm$，pzt4压电陶瓷晶堆厚度 $6mm \times 2$，换能器的前、后盖板长度均为 $50mm$。压电陶瓷晶片材料为PZT-4，其材料参数为：密度 $7500kg/m^3$ 

**弹性常数矩阵：**
$$
[C]=\left[\begin{array}{cccccc}
C_{11} & C_{13} & C_{12} & 0 & 0 & 0 \\
C_{13} & C_{33} & C_{13} & 0 & 0 & 0 \\
C_{12} & C_{13} & C_{11} & 0 & 0 & 0 \\
0 & 0 & 0 & C_{44} & 0 & 0 \\
0 & 0 & 0 & 0 & C_{44} & 0 \\
0 & 0 & 0 & 0 & 0 & C_{66}
\end{array}\right]=\left[\begin{array}{cccccc}
13.9 & 7.43 & 7.78 & & & \\
7.43 & 11.5 & 7.43 & & & \\
7.78 & 7.43 & 13.9 & & & \\
& & & 2.56 & & \\
& & & & 2.56 & \\
& & & & & 3.06
\end{array}\right] \times 10^{10} \mathrm{~N} / \mathrm{m}^2
$$
**介电矩阵：** 
$$
[\varepsilon]=\varepsilon_0\left[\varepsilon_r\right]=\varepsilon_0\left[\begin{array}{lll}
\varepsilon_{11}^S & & \\
& \varepsilon_{33}^S & \\
& & \varepsilon_{11}^S
\end{array}\right]=\varepsilon_0\left[\begin{array}{lll}
730 & & \\
& 635 & \\
& & 730
\end{array}\right]=\left[\begin{array}{lll}
6.45 & & \\
& 5.61 & \\
& & 6.45
\end{array}\right] \times 10^{-9} \mathrm{C} / \mathrm{m}
$$
**压电矩阵：**
$$
[e]=\left[\begin{array}{lll} 
& e_{31} & \\
& e_{33} & \\
& e_{31} & \\
e_{15} & & \\
& & e_{15}
\end{array}\right]=\left[\begin{array}{lrl} 
& -5.2 & \\
& 15.1 & \\
& -5.2 & \\
12.7 & & \\
& & 12.7
\end{array}\right]_{\mathrm{N} / \mathrm{V}^* \mathrm{~m}}
$$ 
前后盖板材料为硬铝，其材料参数为：密度 $2700kg/m^3$，杨氏模量 $7.0 \times 10^{10} N/m^2$ ，泊松比0.34。