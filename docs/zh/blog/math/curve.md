---
title: 曲线
dates: [2026-03-03, 2026-03-05]
version: v0.0.0
cover: https://ghproxy.net/https://raw.githubusercontent.com/Orisnow/Images/refs/heads/main/sana/%E6%89%AB%E6%8F%8F%E5%9B%BE.jpg
abstract: 
recommend: 8888
tags: 
  - 几何
---

曲线是一维直线在高维空间中的嵌入，我们可以建立点对点的映射关系

## 曲线-切向量
站在第三视角，我们可以设立坐标系把曲线表示出来，那如果是第一视角呢，当我们站在曲线的一点上，没有参考系，如何才能知道曲线的样貌?如何才能确保自己走在曲线上?切向量就是用来指示方向的，就像给大海中迷路的船以灯塔一样，不幸的是就连灯塔的位置也是飘忽不定的，除了一直向灯塔前进毫无办法。明明一直在往前走却画出了曲线，这在第三视角听起来着实奇怪，毕竟不论往所谓的"前方"走多远都应该偏离曲线，原因在于第一视角是受限的，"一步"在迈出的过程中**总是**在进行方向的修正(或者说在连续不断地走出无穷小长度的一步)

当使用向量工具研究曲线的"形"的时候，我们通常只需要用到向量的方向属性，因此常设长度为1即使用单位向量$\boldsymbol{T}$ 

::: example 对给定参数化曲线求单位切向量
^[1]对$\mathbb{R}^3$中的曲线$\gamma(t)=\left\{\left(1+t^2, e^{2 t}, \cos t\right) \mid t \in \mathbb{R}\right\}$,我们需要使用[导数](./derivative.md)作为工具，把$\gamma$对t求导得到切向量组并除以向量范数便得到了切向量:
$$\boldsymbol{T}(t)=\frac{\gamma^{'}(t)}{\Vert \gamma^{'}(t)\Vert}=\frac{\left(2 t, 2 e^{2 t},-\sin t\right)}{\sqrt{(2 t)^2+(2 e^{2 t})^2+(-\sin t)^2}}$$
如果取$t=0$就有$\gamma(0)=(1,1,1)$与$\boldsymbol{T}(0)=(0,1,0)$
:::

::: references
- [1][wiki:Tangent vector](https://en.wikipedia.org/wiki/Tangent_vector)
- [2]Hubbard, J.; Hubbard, B. B. Vector Calculus, Linear Algebra, and Differential Forms: A Unified Approach. 5th ed. Matrix Editions, 2015, p.393.
:::

## 曲线-曲率
我们先考察二维平面内的曲线，直觉上看，$f(x)=2x^2$看起来比$g(x)=x^2$更弯曲，但是当我们聚焦到$g(x)$的$(0,0)$点附近和$(1,1)$点附近时，可以比较发现$(1,1)$点附近看起来要更"平"一些，这说明曲率应当是曲线的局部特性，而局部范围的考察又会越缩越小直至一点，直觉容易以偏概全。


::: references
- [1]Hubbard, J.; Hubbard, B. B. Vector Calculus, Linear Algebra, and Differential Forms: A Unified Approach. 5th ed. Matrix Editions, 2015, p.393.
:::
## 曲线-挠率

