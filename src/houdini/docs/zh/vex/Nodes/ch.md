---
title: ch
order: 3
category:
  - vex
---

`float ch(string channel)`

`float ch(string channel, float time\_in\_sec)`

`string ch(string channel)`

`string ch(string channel, float time\_in\_sec)`

`string ch(string channel, float time\_in\_sec)`

`float ch(int op\_id, int parm\_index, int vector\_index)`

`float ch(int op\_id, int parm\_index, int vector\_index, float time\_in\_sec)`

评估一个通道（或参数）并返回其值。时间的单位是\_秒，而不是帧。如果你不指定时间，函数会返回当前时间的值。

Houdini 包括几个函数来评估不同类型的通道/参数。

- 要获得一个浮点数或字符串而不需要知道参数类型，使用[ch](ch.html)（"评估一个通道（或参数）并返回其值"）。
- 要得到一个浮点数，使用[chf](chf.html)（"评估一个通道（或参数）并返回其值"）。
- 要获得一个字符串，使用[chs](chs.html)（"评估一个通道（或参数）并返回其值"）。
- 对于整数参数，使用[chi](chi.html) () ("评估一个通道（或参数）并返回其值。")
- 对于矩阵型参数，使用 [ch3](ch3.html) () （"评估一个通道（或参数）并返回其值。"）或 [ch4](ch4.html) （"评估一个通道（或参数）并返回其值。"）。
- 对于斜坡参数，使用[chramp](chramp.html) ()（"评估一个斜坡参数并返回其值。"）或[chrampderiv](chrampderiv.html)（"评估一个参数相对于位置的导数。"）。
- 使用[chid](chid.html) () ("解析一个通道的字符串（或参数）并返回 op_id, parm_index 和 vector_index.")来获得一个`op_id`, `parm_index`和`vector_index`来评估通道，而不必做字符串解析。

## Examples



```c
// Get the X transform of the box1 SOP at 1.5s into the animation
float tx = ch("/obj/geo1/box1/tx", 1.5)

```

## See also

- [attrib](attrib.html)
- [chf](chf.html)
- [chs](chs.html)
- [chi](chi.html)
- [chv](chv.html)
- [ch3](ch3.html)
- [ch4](ch4.html)
- [chramp](chramp.html)
- [chid](chid.html)
- [opid](opid.html)

|
utility

[assert_enabled](assert_enabled.html)

[ch](ch.html)

[ch2](ch2.html)

[ch3](ch3.html)

[ch4](ch4.html)

[chdict](chdict.html)

[chexpr](chexpr.html)

[chexprf](chexprf.html)

[chexprt](chexprt.html)

[chf](chf.html)

[chi](chi.html)

[chid](chid.html)

[chp](chp.html)

[chramp](chramp.html)

[chrampderiv](chrampderiv.html)

[chs](chs.html)

[chsop](chsop.html)

[chsraw](chsraw.html)

[chu](chu.html)

[chv](chv.html)

[error](error.html)

[expand_udim](expand_udim.html)

[has_udim](has_udim.html)

[isbound](isbound.html)

[isconnected](isconnected.html)

[ninputs](ninputs.html)

[opid](opid.html)

[print_once](print_once.html)

[printf](printf.html)

[select](select.html)

[sleep](sleep.html)

[sprintf](sprintf.html)

[texprintf](texprintf.html)

[warning](warning.html)