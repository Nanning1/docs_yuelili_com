---
title: Tips & Tricks
order: 7
category:
  - AE 插件开发
---

# Tips & Tricks

## UI Performance

实验一下来自[PF_EventExtra](PF_EventExtra.html) 的`PF_EO_ALWAYS_UPDATE`和`PF_EO_NEVER_UPDATE`，以便在响应性和准确性之间找到一个满意的媒介。

在macOS上，当自定义UI绘制事件被发送时，前景和背景颜色不会被设置为白色和黑色。

这是设计上的问题；当你直接在我们的上下文中绘图时，你不必改变背景颜色。

## How Deep Are My Pixels?

没有办法确定事件发生时正在处理的图层的位深度。

然而，你可以在你的序列数据中缓存最后已知的像素深度。

更好的是，你可以让你的固定和浮动滑块参数依赖于它们参数定义中的`PF_ValueDisplayFlags'；如果你使用这个，它将使你的参数的UI响应用户对像素显示值的偏好。

你也可以在`PF_Cmd_RENDER`期间检查你的输入世界的深度。

## Arbitrary Data

一个任意的数据参数是管理你的自定义UI的绝佳方式。

将状态、偏好和最后使用的项目信息存储在一个arb中，你就可以随时恢复它。

After Effects用比自定义UI更丰富的消息流来管理参数。

## Custom UI Implementation for Color Sampling, Using Keyframes

一个插件可能想从一个合成中的某个图层获取颜色。用户会使用与颜色参数相关的滴管，或插件的自定义合成面板用户界面来选择该点。

在点击事件中，插件将点击的坐标转换为层空间，并将该信息存储在序列数据中。然后它强制重新渲染，在此期间它可以访问与存储的坐标相对应的图层点的颜色。

插件将颜色值存储在序列数据中，并取消渲染，要求重新绘制受影响的参数。

最后，在绘制过程中，插件使用[AEGP_KeyframeSuite](.../aegps/aegp-suites.html) 向其颜色参数流添加适当的关键帧。

是的，这意味着效果需要[Cheating Effect Usage of AEGP Suites](.../aegps/cheating effect-usage-of-aegp-suites.html)  并使用AEGP API。