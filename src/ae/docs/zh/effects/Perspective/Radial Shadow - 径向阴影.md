---
title: Radial Shadow - 径向阴影
order: 11
category:
  - AE
---

## 简述

图层根据设置的点光源创建阴影（与投影效果差不多）。

阴影根据源图层的 Alpha 通道投射，光透过半透明区域时，阴影的颜色会受到图层颜色影响。可以使用此效果使 3D 图层看起来像将阴影投射到 2D
图层上一样。

此效果适用于 8-bpc 颜色。

## 效果展示

## 教程

<iframe src="https://player.bilibili.com/player.html?bvid=BV1e34y1X7Vj&page=96&high_quality=1" width="100%" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## 中英日对照

![](https://cdn.yuelili.com/20211226014523.png)

![](https://cdn.yuelili.com/20211226014529.png)

| Radial Shadow       | 径向阴影     | 放射状シャドウ         |            |          |      |
| ------------------- | ------------ | ---------------------- | ---------- | -------- | ---- |
| Shadow Color        | 阴影颜色     | シャドウのカラー       |            |          |      |
| Opacity             | 不透明度     | 不透明度               |            |          |      |
| Light source        | 光源         | 光源                   |            |          |      |
| Projection Distance | 投影距离     | 投影距離               |            |          |      |
| Softness            | 柔和度       | 柔らかさ               |            |          |      |
| Render              | 渲染         | レンダリング           | Reqular    | 常规     | 標準 |
|                     |              |                        | Glass Edge | 玻璃边缘 |      |
| Color Infuence      | 颜色影响     | カラーの影響           |            |          |      |
| Shadow Only         | 仅阴影       | シャドウのみ           |            |          |      |
| Resize Layer        | 调整图层大小 | レイヤーのサイズを変更 |            |          |      |

## 参数详解

### 阴影颜色

阴影的颜色。如果“渲染”控件中选择“玻璃边缘”，则图层颜色可能会覆盖此选项。

### 不透明度

阴影的不透明度。

### 光源

“点光源”的位置，光线在它周围扩散。

::: tip
:::

复制和粘贴功能可从其他效果（例如，镜头光晕效果）控制点的关键帧或表达式，可以快速创建与其他效果的光源匹配的阴影。

![](https://cdn.yuelili.com/20211226015012.png)

### 投影距离

图层与落到表面的阴影距离。阴影也会随此值增加而增大。

### 柔和度

数值越大，阴影越模糊，越柔和。

![](https://cdn.yuelili.com/20211226015037.png)

### 渲染

图层的像素越透明，阴影颜色与图层颜色越接近。

**-常规**

不管图层中是否有半透明像素，均根据“阴影颜色”和“不透明度”值创建阴影。（如果选择“常规”，则禁用“颜色影响”控件。）

**-玻璃边缘**

![](https://cdn.yuelili.com/20211226024153.png)

_图为黄色图层创建黄色阴影边缘_

根据图层的颜色和不透明度创建彩色阴影。如果图层包含半透明像素，则阴影会使用图层的颜色和透明度。如果图层不包含半透明像素，会很难产生“玻璃边缘”效果。例如，此选项可用于创建通过彩色玻璃的阳光外观。

::: tip
:::

在选择“玻璃边缘”时，即使图层完全不透明，消除锯齿边缘也会在阴影边缘产生颜色。图层的颜色通过这些消除锯齿边缘发光，并且“阴影颜色”将填充阴影的中心。

### 颜色影响

阴影 **最终颜色** 由图层颜色与“阴影颜色”参数共同决定，此参数控制图层颜色影响值。

增加“颜色影响”，会降低“阴影颜色”占比。

值为 100%，阴影呈现图层中所有半透明像素的颜色。如果图层不包含半透明像素，则本参数几乎不生效，最终颜色会取决于“阴影颜色”属性。

### 仅阴影

选择此选项，则仅渲染阴影。

### 调整图层大小

选择此选项，则阴影可扩展到图层原始边界之外。

## 案例

可以在文本上投下阴影，使其看起来具有立体感。

![](https://cdn.yuelili.com/20211226015114.png)
