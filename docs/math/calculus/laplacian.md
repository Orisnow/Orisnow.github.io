---
title: 拉普拉斯算子
lang: zh-CN
titleTemplate: false
description: 本篇文章简要介绍了下Laplacian算子及其记忆方法


---
# Laplace算子在球坐标系下表示的记忆方法

### 前言

在物理的学习中，我们经常会遇见Laplace算子，而它在球坐标系下的表示可以说是非常让人头疼了，尽管日常使用时可以查询，或者在大量使用的情况下能记住，不过我个人更倾向于带有思考的记忆，这样即使在考试或突发状况下也能心安理得地写出。为此，我们需要对这个问题进行拆解。

### 球坐标系

我们知道，在空间直角坐标系下Laplace算子的表达相对是很简洁的，因此我们首先需要知道球坐标系改变了什么，为此不妨把两个坐标系放在一起考量

|  直角坐标系  |   球坐标系   |
| :-------------: |  :----------:  |
|空间被均匀分割|空间的分割不均匀|



### 梯度

我们不着急直接写出Laplace算子，先从较为简单的梯度入手

### 散度



### Laplace算子

### 总结

### 思考题

我们已经讨论过了梯度和散度在球坐标下的表示，而旋度也是比较令人头疼的一位,它同样可以通过上述的方式进行记忆，不妨尝试一下！

##### 参考
<a href="https://wuli.wiki/online/SphNab.html" class="small-gray">
   球坐标系中的偏微分算符 - 小时百科
</a>


$$
\begin{align} 
 &\nabla\cdot (A\hat{\rho}+B\hat{\theta}+C\hat{\varphi})=\frac{1}{\rho^{2}} \frac{\partial}{\partial\rho}(\rho^{2}A)+\frac{1}{\rho\sin\theta} \frac{\partial}{\partial\theta}(\sin\theta B)+\frac{1}{\rho\sin\theta} \frac{\partial}{\partial\varphi}(C)  \\
  &\nabla\cdot (A\hat{\rho}+B\hat{\theta}+C\hat{\varphi})=\frac{1}{\rho^{2}} \frac{\partial}{\partial\rho}(\rho^{2}A)+\frac{1}{\sin\theta} \frac{\partial}{\partial(\rho\theta)}(\sin\theta B)+ \frac{\partial}{\partial(\rho\sin\theta\varphi)}(C)\\
  &\nabla\cdot (A\hat{\rho}+B\hat{\theta}+C\hat{\varphi})=\frac{1}{\rho^{2}\sin\theta\Delta\theta\Delta\varphi} \frac{\partial}{\partial\rho}(\rho^{2}\sin\theta\Delta\theta\Delta\varphi A)+\frac{1}{\Delta\rho\rho\sin\theta\Delta\varphi} \frac{\partial}{\rho\partial(\theta)}(\Delta\rho\rho\sin\theta\Delta\phi B)+ \frac{1}{\rho\Delta\theta\Delta\rho}\frac{\partial}{\rho\sin\theta\partial(\varphi)}(\rho\Delta\theta\Delta\rho C)\\
 \end{align}
$$
