---
title: 梯度
dates: [2026-04-30, ]
version: v0.0.0
cover: 
abstract: 
recommend: 
tags: 
  - 
---

## 梯度-[向量](vector)


## 梯度-拉格朗日乘子法
对于一元或多元函数，我们想求它的极值点是在函数的定义域里进行，通过求函数的梯度我们便能知道驻点，根据函数的连续性质进一步分析得出极值点的情况，不过很多时候我们会得知更多的条件，将函数约束在更小的范围内，拉格朗日乘子法给出了一种非常"无脑"的方式计算条件极值，它非常快捷方便，不过知道它实际在做什么更有利于我们使用它。

我们先看看一个二元函数在等式约束下的情况:$f(x,y)=xy$ 在单位圆周 $x^2+y^2=1$ 约束下的极值，我们依然能求出函数的梯度 $\nabla f=(y,x)$ 

::: references
- [1][从拉格朗日乘子法到KKT条件](https://o-o-sudo.github.io/numerical-methods/-kkt-lagrange-multiplier-to-kkt-condition.html)
:::