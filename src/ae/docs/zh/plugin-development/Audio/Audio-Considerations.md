---
title: Audio Considerations
order: 7
category:
  - AE 插件开发
---

# Audio Considerations

After Effects 的音频 API 支持高达 96Khz 的采样率，支持尽可能多的格式。

就像插件的像素处理功能应该保持 "独立于分辨率 "一样，音频插件应该是采样率和比特深度独立的。

你的插件不可能知道有关音频的最终输出格式；它可能在你的插件应用和最终输出之间被拉伸、规范化、截断或相位颠倒。

音频过滤器遇到的问题与图像过滤器不同。

调查 SDK 样本，了解音频渲染的一个可能实现。
