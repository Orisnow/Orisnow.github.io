---
title: 拉普拉斯算子
titleTemplate: false
description: 本篇文章简要介绍了下Laplacian算子及其记忆方法

---

$$
\begin{align} 
 &\nabla\cdot (A\hat{\rho}+B\hat{\theta}+C\hat{\varphi})=\frac{1}{\rho^{2}} \frac{\partial}{\partial\rho}(\rho^{2}A)+\frac{1}{\rho\sin\theta} \frac{\partial}{\partial\theta}(\sin\theta B)+\frac{1}{\rho\sin\theta} \frac{\partial}{\partial\varphi}(C)  \\
  &\nabla\cdot (A\hat{\rho}+B\hat{\theta}+C\hat{\varphi})=\frac{1}{\rho^{2}} \frac{\partial}{\partial\rho}(\rho^{2}A)+\frac{1}{\sin\theta} \frac{\partial}{\partial(\rho\theta)}(\sin\theta B)+ \frac{\partial}{\partial(\rho\sin\theta\varphi)}(C)\\
 \end{align}
$$