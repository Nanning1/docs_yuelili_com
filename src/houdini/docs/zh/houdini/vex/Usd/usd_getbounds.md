---
title: usd_getbounds
order: 44
category:
  - houdini
---
    
## 描述

Obtains the primitive‘sbounds

| Since | 18.0 |
| ----- | ---- |

`int usd_getbounds(<stage>stage, string primpath, string purpose, vector &min, vector &max)`

`int usd_getbounds(<stage>stage, string primpath, string purpose, float timecode, vector &min, vector &max)`

`int usd_getbounds(<stage>stage, string primpath, string purpose[], vector &min, vector &max)`

`int usd_getbounds(<stage>stage, string primpath, string purpose[], float timecode, vector &min, vector &max)`

This function returns primitive‘saxis-aligned bounding box. The point
corresponding to the minimum corner of the bounding box will be returned in
min, while the maximum will be in max. Always returns 1.

此函数返回基元的轴对齐包围盒。与界线盒的最小角相对应的点将在 min 中返回，而最大角将在 max 中返回。总是返回 1。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

在节点的上下文中运行时（如 wrangle
LOP），此参数可以是一个整数，代表要从中读取阶段的输入数字（从 0 开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通往基元的路径。

`purpose`

The primitive‘spurpose for which to return the bounding box (e.g.,
“render”).

基元的目的，用于返回边界框（例如，"渲染"）。

`timecode`

The USD time code at which to evaluate the attribute. A USD time code roughly
corresponds to a frame in Houdini. If not given, the time code corresponding
to the current frame is used.

评估该属性的美元时间代码。一个美元时间代码大致对应于胡迪尼的一个帧。如果没有给出，则会使用与当前帧对应的时间码。

Returns

Always 1.

总是 1。

## Examples

    // Get the sphere's bounding box.vector min, max;usd_getbounds(0, "/src/sphere", "render", min, max);