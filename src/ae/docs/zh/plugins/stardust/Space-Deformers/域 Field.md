---
title: 域 Field
order: 4
category:
  - AE
---

## 介绍

以可能的方式变形粒子空间，例如球形场，贴图，黑洞等等。
Field场可以被分为两大类，域和变形器。
域：指的是当粒子经过某块区域时，粒子的属性会产生变化：位置，大小，颜色，不透明度，模糊。
变形器：不改变粒子的任何属性，只对粒子的发射器拉伸变形。
黑洞场既不属于域也不属于变形器，比较特殊。

## Field 场

### Field Type 场类型

- Sphere 球 （域类型）
- Box 立方体 （域类型）
- Grad 渐变 （域类型，只能影响颜色，透明度，模糊属性，大小处于失效状态）
- Radial Grad 圆形渐变 （域类型，只能影响颜色，透明度，模糊属性，大小处于失效状态）
- Black Hole 黑洞 （把粒子全部吸在一个点，配和Over life使用）
- Object OBJ 模型  （域类型）
- Bend 弯曲  （变形类型，只能对粒子发射器拉伸变形，不能对粒子属性产生影响，）
- Stretch 拉伸 （变形类型）
- Twist 扭曲  （变形类型）
- Spiral 螺旋   （变形类型）
- Maps 贴图 （域类型）

### Origin Use 用什么控制起点

- Point 点
- Null（s） 空对象
- Light（s） 灯光

### Starting With 图层选择

### Origin XY 起点 XY

### Origin Z 起点 Z

### Amount 量（强度）

### Maps 贴图

- Type 类型
  - Graph 图表
  - Color 颜色
  - Layer 图层
- Size Type 大小类型
  - From Emitter 和发射器一样
  - Size XYZ 大小调节
- Layer 图层
- Time Sample 时间采样
  - Current Time 当前时间
  - Particle Birth 从粒子出生开始
- Sample Quality 样品质量
  - Normal 正常
  - High 高
- Over Length 图表
- Color Over Length 颜色图表
- Affect 影响
  - Opacity 不透明度
  - Size 大小
  - Color 颜色
  - Position 位置
  - Rotation 旋转
  - Texture 贴图
- Project 项目（投射方向）
  - X
  - Y
  - Z
  - XY
  - XZ
  - YZ
  - XYZ
  - Sphere
  - UV
- Apply Axis 应用轴
  - X
  - Y
  - Z
  - XY
  - XZ
  - YZ
  - XYZ
  - Sphere
  - Normal
- Affect BY 影响
  - Value 数值
  - Noise 噪波
- Offset Sample （precent）偏移样本（百分比）

### Field Properties 场属性

- Size 大小
- Size Y Y 轴大小
- Size Z Z 轴大小
- Orient X 方向 X
- Orient Y 方向 Y
- Orient Z 方向 Z
- Feather 羽化
- Randomize 随机
- Enclose 2
- Affect Over Life 影响跟随生命

### Affected Properties 影响属性

- Position 位置
- Size 大小
- Color 颜色
- Particle Color 粒子颜色
- Opacity 不透明度
- Blur 模糊

### Apply 应用

- Angle X 角度 X
- Angle Y 角度 Y
- Angle Z 角度 Z
- Scale X X 轴缩放
- Scale Y Y 轴缩放
- Scale Z Z 轴缩放

### Object Properties 模型属性

- Object Origin XY 模型起点 XY
- Object Angle X 模型角度 X
- Object Angle Y 模型角度 Y
- Object Angle Z 模型角度 Z
- Object Size 模型大小
- Center 居中
- Normalize Scale 标准大小
- Obj File Name 模型文件名称
