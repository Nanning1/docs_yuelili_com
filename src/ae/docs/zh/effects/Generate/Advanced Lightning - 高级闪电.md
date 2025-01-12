---
title: Advanced Lightning - 高级闪电
order: 3
category:
  - AE
---

## 简述

高级闪电效果可模拟放电。与闪电效果不同，高级闪电效果不能自行设置动画。可以为“传导率状态”或其他属性设置动画。

高级闪电效果包括“Alpha 障碍”功能，使用此功能可使闪电围绕指定对象。

此效果适用于 8-bpc 颜色。

## 效果展示

![](https://cdn.yuelili.com/20211227133608.png)

## 教程

## 中英日对照

![](https://mir.yuelili.com/wp-content/uploads/user/AE/effects/AE-Effects-Generate-Advanced_Lightning.png)![](https://mir.yuelili.com/wp-content/uploads/user/AE/effects/AE-Effects-Generate-Advanced_Lightning_cn.png)

## 参数详解

### 闪电类型

指定闪电的特性。

该类型可确定“方向/外半径”上下文控制的性质。在“阻断”类型中，分支随着“原点”和“方向”之间的距离增加朝方向点集中。

### 源点

闪电起始点。

### 方向/外径

此控件根据“闪电类型”改变：

**-未使用**

如果“闪电类型”是“垂直”，则“方向”或“外径”控件不可用。

**-外径**

闪电从源点开始移动的距离，然后终止闪电。需要任何闪电类型：“全方位”或“随机”。

**-方向**

闪电移动的方向。需要任何闪电类型：“方向”、“击打”、“阻断”、“回弹”和“双向击打”。

### 传导率状态

更改闪电的路径。

### 核心设置

闪电核心的各种特性。

**-核心半径**

**-核心不透明度**

**-核心颜色**

### 发光设置

调整闪电的发光。

**-发光半径**

**-发光不透明度**

**-发光颜色**

要禁用发光，请将“发光不透明度”设为 0 这样可显著加快渲染速度。

### Alpha 障碍

指定原始图层的 Alpha 通道对闪电路径的影响。在“Alpha 障碍”大于零时，闪电会尝试围绕图层的不透明区域，将这些区域视为障碍。在“Alpha
障碍”小于零时，闪电会尝试停留在不透明区域内，避免进入透明区域。闪电可以穿过不透明和透明区域之间的边界，但“Alpha
障碍”值距零较远时，则很少会产生这种穿过效果。

::: danger
:::

如果将“通道障碍”设为非零值，则无法在低于完整分辨率的环境中预览正确的结果，完整分辨率可能会显示新的障碍。请务必在最后渲染之前以完整分辨率检查结果。

### 湍流

指定闪电路径中的湍流数量。值越高，击打越复杂，其中包含的分支和分叉越多；值越低，击打越简单，其中包含的分支越少。

### 分叉

指定分支分叉的百分比。“湍流”和“Alpha 障碍”设置会影响分叉。

### 衰减

指定闪电强度连续衰减或消散的数量，会影响分叉不透明度开始淡化的位置。

### 主核心衰减

衰减主要核心以及分叉。

### 在原始图像上合成

使用“添加”混合模式合成闪电和原始图层。取消选择此选项时，仅闪电可见。

### 专家设置

**-复杂度**

指定闪电湍流的复杂度。

**-最小分叉距离**

指定新分叉之间的最小像素距离。值越低，闪电中的分叉越多。值越高，分叉越少。

**-终止阈值**

根据空气阻力和可能的 Alpha 碰撞，指定路径终止的程度。如果值较低，在遇到阻力或 Alpha 障碍时，路径更易于终止。如果值较高，路径会更持久地绕
Alpha 障碍移动。

::: tip
:::

增加“湍流”或“复杂度”值，会导致某些区域阻力增加。这些区域会随传导率改变而改变。在 Alpha 边缘，增加“Alpha 障碍”值会使阻力增加。

**-仅主核心碰撞**

计算仅在主要核心的碰撞。分叉不受影响。仅当选择“Alpha 障碍”时，此控件才有意义。

**-分形类型**

指定用于创建闪电的分形湍流的类型。

**-核心消耗**

指定创建新分叉时消耗核心强度的百分比。增加此值会减少出现新分叉的核心的不透明度。因为分叉会从主要核心汲取强度，所以减少此值也会减少分叉的不透明度。

**-分叉强度**

指定新分叉的不透明度。以“核心消耗”值的百分比形式量度此数量。

**-分叉变化**

指定分叉不透明度的变化量，并确定分叉不透明度偏离“分叉强度”设置量的数量。

## 案例
