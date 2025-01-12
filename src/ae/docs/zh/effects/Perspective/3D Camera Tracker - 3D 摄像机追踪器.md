---
title: 3D Camera Tracker - 3D 摄像机追踪器
order: 2
category:
  - AE
---

## 简述

可以根据视频的摄像机对视频进行分析，并进行三维合成。

## 效果展示

## 教程

## 中英日对照

![](https://cdn.yuelili.com/20211225222641.png)

![](https://cdn.yuelili.com/20211225222655.png)

| 3D Camera Tracker        | 3D 摄像机追踪器 | 3D カメラトラッカー            |                                |                  |                          |                   |            |     |
| ------------------------ | --------------- | ------------------------------ | ------------------------------ | ---------------- | ------------------------ | ----------------- | ---------- | --- |
| Analyze                  | 分析            | 分析                           |                                |                  |                          |                   |            |     |
| Cancel                   | 取消            | キャンセル                     |                                |                  |                          |                   |            |     |
| Shot Type                | 拍摄类型        | ショットのタイプ               | Fixed Angle of View            | 视图的固定角度   |                          |                   |            |     |
|                          |                 |                                | Variable Zoom                  | 变量缩放         |                          |                   |            |     |
|                          |                 |                                | Specify Angle of View          | 指定视角         |                          |                   |            |     |
| Horizontal Angle of View | 水平视角        | 水平方向の視界                 |                                |                  |                          |                   |            |     |
| Show Track Points        | 显示轨迹点      | トラックポイントを表示         | 2D Source                      | 2D 源            |                          |                   |            |     |
|                          |                 |                                | 3D Solved                      | 3D 已解析        |                          |                   |            |     |
| Render Track Points      | 渲染跟踪点      | トラックポイントをレンダリング |                                |                  |                          |                   |            |
| Track Point Size         | 跟踪点大小      | トラックポイントのサイズ       |                                |                  |                          |                   |            |     |
| Target Size              | 目标大小        | ターゲットサイズ               |                                |                  |                          |                   |            |     |
| Advanced                 | 高级            | 高度                           |                                |                  |                          |                   |            |     |
|                          |                 |                                | Solve Method                   | 解决方法         | 解析方法                 | Auto Detect       | 自动检测   |     |
|                          |                 |                                |                                |                  |                          | Typical           | 典型       |     |
|                          |                 |                                |                                |                  |                          | Mostly Flat Scene | 最平场景   |     |
|                          |                 |                                |                                |                  |                          | Tripod Pan        | 三脚架全景 |     |
|                          |                 |                                | Method Used                    | 采用的方法：     |                          |                   |            |     |
|                          |                 |                                | Average Error                  | 平均误差         |                          |                   |            |     |
|                          |                 |                                | Detailed Analysis              | 详细分析         | 詳細分析                 |                   |            |     |
|                          |                 |                                | Auto-delete Points Across Time | 跨时间自动删除点 | 自動削除ポイントの時間枠 |                   |            |
|                          |                 |                                | Hide Warning Banner            | 隐藏警告横幅     | 警告バナーを隠す         |                   |            |     |

## 流程(简单版)

1.插入要合并的视频

2.选择 [效果]> [透视]> [3D 摄像机跟踪器]

3.会出现“后台正在分析”和“摄像头正在处理”的提示，处理需要一些时间，请耐心等待。

![](https://cdn.yuelili.com/20211225235610.png)

_正在分析中_

![](https://cdn.yuelili.com/20211225235619.png)

_分析完毕_

4.完成后，单击 **渲染跟踪点** 使跟踪点可见。(打个勾)

![](https://cdn.yuelili.com/20211226000007.png)

5.当您选择视频时，会出现如下图所示的红色图案，移动光标并右键单击。选择“创建文本和相机”

![](https://cdn.yuelili.com/20211226000050.png)

6.如果文字位置不对，使用选择工具移动文字。  
\*文字的角度应与地面的角度一致。

![](https://cdn.yuelili.com/20211226000206.png)

7.为了使文本具有 3D 效果，复制并粘贴 "文本"，将其向后倾斜 90°，并将其放在黑色的地方。

![](https://cdn.yuelili.com/20211226000228.gif)

## 流程详解

### 分析素材和提取摄像机运动

- 选中一个素材图层，然后执行下列操作之一：
  - 选择“动画”>“跟踪摄像机”，或者从图层上下文菜单中选择“跟踪摄像机”。
  - 选择“效果”>“透视”>“3D 摄像机跟踪器”。
  - 在“跟踪器”面板中，单击“跟踪摄像机”按钮。

此时将应用 3D 摄像机跟踪器效果。分析和解析阶段是在后台进行的，其状态显示为素材上的一个横幅并且位于“取消”按钮旁。

- 根据需要调整设置。

3D 解析的跟踪点显示为小的着色的 x。您可以使用这些跟踪点将内容放置在场景中。

::: tip
:::

您可以一次选择多个图层来使用 3D 摄像机跟踪器效果进行摄像机跟踪。

将内容附加到包含已解析的摄像机的场景

### 选中效果，然后选择要用作附加点的一个或多个跟踪点（定义最合适的平面）。

1. 将鼠标指针在可以定义一个平面的三个相邻的未选定跟踪点之间徘徊，在这些点之间会出现一个半透明的三角形。将出现一个红色的目标，在 3D 空间中显示平面的方向。
2. 围绕多个跟踪点绘制一个选取框以选择它们。

### 在选取框或目标上单击右键，然后选择要创建的内容的类型。可以创建以下类型：

- 文本
- 纯色
- 用于目标的中心的空图层
- 用于每个选定点的文本、纯色或空图层
- 通过在上下文菜单中使用“创建阴影捕手”命令为创建的内容创建的“阴影捕手”图层（一个仅接受阴影的纯色图层）。

::: tip
:::

阴影捕手图层还会创建光照（如果尚不存在光照）。

::: tip
:::

如果创建多个图层，则每个图层都有一个唯一的编号名称。如果创建多个文本图层，则会对入点和出点进行修剪以匹配点持续时间。

### 移动目标以将内容附加到其他位置

要移动目标以便您可以将内容附加到其他位置，请执行以下操作：

1. 当位于目标的中心上方时，将出现一个用于调整目标位置的“移动”指针。
2. 将目标的中心拖到所需的位置。

在位于预期的位置之后，您可以使用上下文中的命令来附加内容。

::: tip
:::

如果目标的大小太大或太小以致无法查看，您可以调整其大小以便显示平面。目标大小还控制使用上下文菜单命令创建的文本和纯色图层的默认大小。

### 调整目标大小

要调整目标大小，请执行以下操作之一：

- 调整目标大小属性。
- 在从目标的中心拖动时，在按住 Alt 键的同时单击 (Windows) 或在按住 Option 键的同时单击 (Mac OS)。当位于目标的中心上方时，将出现一个带水平箭头的指针，您可以使用它来调整目标大小。

### 选择和取消选择跟踪点

要选择跟踪点，请执行以下操作之一：

- 单击某个跟踪点。
- 在三个相邻的跟踪点之间单击。
- 围绕多个点绘制一个选取框。
- 在按住 Shift 键的同时单击跟踪点或者围绕跟踪点绘制一个 Shift 选取框来将多个跟踪点添加到当前选区。

要取消选择跟踪点，请执行以下操作之一：

- 在按住 Alt 键的同时单击 (Windows) 或在按住 Option 键的同时单击 (Mac OS) 所选择的跟踪点。
- 远离跟踪点单击。

::: tip
:::

移动对象可能会干扰 3D 摄像机跟踪器效果。由于视差原因，它可能会将靠近摄像机的固定对象的点解释为移动的。要帮助处理摄像机，请删除坏点和不需要的点。

### 删除不需要的跟踪点

要删除不需要的跟踪点，请执行以下操作：

1. 选择跟踪点。
2. 按 Delete 键或者从上下文菜单中选择删除选定的点。

在删除不需要的跟踪点后，摄像机将重新解析。当重新解析在后台执行时，您可以删除额外的点。删除 3D 点还将删除对应的 2D 点。

### 创建“阴影捕手”图层

您可以快速创建“阴影捕手”图层，用来为效果创建逼真的阴影。阴影捕手图层是大小与素材相同的白色的纯色图层，但是设置为仅接受阴影。

要创建阴影捕手图层，请使用上下文菜单中的创建阴影捕手、摄像机和光命令。

如果需要，请调整阴影捕手图层的位置和比例，以便投影按所需的方式显示。如果合成中不存在投影灯，此命令还会创建一个投影灯（一个开关已打开且投射阴影的灯）。

### 用于 3D 摄像机跟踪器的效果控件

该效果具有以下控件和设置：

**分析/取消**

开始或停止素材的后台分析。在分析期间，状态显示为素材上的一个横幅并且位于“取消”按钮旁。

**拍摄类型**

指定是以固定的水平视角、可变缩放还是以特定的水平视角来捕捉素材。更改此设置需要解析。

**水平视角**

指定解析器使用的水平视角。仅当拍摄类型设置为指定视角时才启用。

**显示轨迹点**

将检测到的特性显示为带透视提示的 3D 点（已解析的 3D）或由特性跟踪捕捉的 2D 点（2D 源）。

**渲染跟踪点**

控制跟踪点是否渲染为效果的一部分。

::: tip
:::

当选中了效果时，始终会显示轨迹点，即使没有选择渲染跟踪点。当启用时，点将显示在图像中，以便在预览期间可以看到它们。

**跟踪点大小**

更改跟踪点的显示大小。

**创建摄像机**

创建 3D 摄像机。在通过上下文菜单创建文本、纯色或空图层时，会自动添加一个摄像机。

**高级控件**

用于 3D 摄像机跟踪器效果的高级控件

- **解决方法 ：**提供有关场景的提示以帮助解析摄像机。通过尝试以下方法来解析摄像机：
  - **自动检测 ：**自动检测场景类型。
  - **典型 ：**将场景指定为纯旋转场景或最平场景之外的场景。
  - **最平场景 ：**将场景指定为最平场景。
  - **三脚架全景 ：**将场景指定为纯旋转场景。
- **采用的方法 ：**当解决方法设置为自动检测时，这将显示所使用的实际解决方法。
- **平均误差 ：**显示原始 2D 原点与 3D 已解析点在源素材的 2D 平面上的重新投射之间的平均差异（以像素为单位）。如果跟踪/解析是完美的，则此误差将为 0，并且如果您在 2D 源与已解析的 3D 跟踪点之间进行切换，不会存在可见差异。您可以使用此值来指示删除点、更改解决方法或进行其他更改是否会降低该值并因此而改进跟踪。
- **详细分析 ：**当选中时，会让下一个分析阶段执行额外的工作来查找要跟踪的元素。启用该选项时，生成的数据（作为效果的一部分存储在项目中）会更大且速度更慢。
- **跨时间自动删除点** ：使用新的“跨时间自动删除跟踪点”选项，当您在“合成”面板中删除跟踪点时，相应的跟踪点（即，同一特性/对象上的跟踪点）将在其他时间在图层上予以删除。您不需要逐帧删除跟踪点来提高跟踪质量。例如，如果跑过场景的人的运动不应考虑用于确定摄像机的摄像运动方式，则可以删除此人身上的跟踪点。
- **隐藏警告横幅 ：**即使警告横幅指示需要重新分析素材，您也不希望重新分析时，请使用此选项。

## 3D 摄像机跟踪器效果中的地平面和原点

您可以定义地平面（参考面）和原点，例如 3D 摄像机跟踪器效果中的坐标系的 (0,0,0) 点。

1. 使用 3D 摄像机跟踪器效果分析场景
2. 选择一组跟踪点。此操作将使圆心目标出现，显示由选定跟踪点定义的平面。
3. （可选）按照中心拖动目标以沿着平面重新定位目标，并且将中心放置在您希望原点位于的地方。
4. 右键单击 (Windows) 或按住 Control 键并单击 (Mac OS) 目标，然后选择设置地平面和原点。

此操作没有任何可见的结果，但是将为此场景保存坐标系的参考面和原点。从此 3D 摄像机跟踪器效果实例内部创建的所有项目都是使用此平面和原点创建的。

## 跨时间自动删除点

在效果属性的高级部分，有一个新选项：跨时间自动删除点。

如果此选项已打开，则在合成面板中删除跟踪点时，相应的跟踪点（例如，同一特性或对象上的跟踪点）将在其他时间在图层上予以删除，因此不必逐帧删除跟踪点来提高跟踪质量。例如，如果跑过场景的人的运动不应考虑用于确定摄像机的摄像运动方式，则可以删除此人身上的跟踪点。此方法对
2D 源跟踪点和 3D 已解析跟踪点均适用。

您可以使用 Delete 键或通过上下文单击并选择“删除选定的点”来删除选定的跟踪点。

::: tip
:::

即便使用新的“跨时间自动删除点”功能，也可以改为或另外针对图层定义 Alpha 通道，从而防止 3D 摄像机跟踪器效果使用图像的特定部分来确定摄像机。

## 将 3D 摄像机跟踪器数据导出到 3D 应用程序

您可将 3D 摄像机跟踪器数据导出到 3D 应用程序（例如 MAXON CINEMA 4D）。

执行以下操作：

- 选择“文件”>“导出”>“MAXON Cinema 4D 导出器”。

- 在打开的“文本导出”对话框中，选择“凸出”或“文本”选项。

![](https://cdn.yuelili.com/20211225223500.png)

导出到 MAXON Cinema4D 导出器

- 指定文件名称并单击“保存”。

- 在 3D 应用程序中打开该文件。
