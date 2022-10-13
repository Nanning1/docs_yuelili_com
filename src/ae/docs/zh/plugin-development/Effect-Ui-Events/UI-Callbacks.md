---
title: UI Callbacks
order: 6
category:
  - AE 插件开发
---
# UI Callbacks

After Effects提供了回调功能，用于在坐标系之间进行转换，并获得操作系统特定的绘图上下文信息，无需猜测或直接询问操作系统。使用这些回调! 这些回调的指针在PF_EventCallbacks中提供。使用AE_EffectUI.h和AE_EffectCB.h中的宏来访问这些程序。

有可能在不实现坐标系换位回调的情况下建立一个利用自定义UI的有效插件。然而，当用户放大图层面板或旋转图层时，你的插件将表现得很糟糕。我们添加了这些宏和回调，以便自定义用户界面可以很容易地集成到After Effects的用户界面中，而不会给开发者带来用户界面的开销。再次强调，请使用它们!

为了简单起见，这些宏默认了refcon和context handle。refcon假定你有一个名为 "extra "的局部变量。默认的上下文是当前的上下文。这些默认参数在PF_EventCallbacks结构中定义（在AE_EffectUI.h中）。你可以通过PF_EventExtra结构访问这些回调来覆盖默认参数。我们不建议（或支持）修改头文件中的宏。请不要这样做!

### layer_to_comp


Transforms layer panel coordinates to the composition panel coordinates.

```
PF_Errlayer_to_comp(
void*refcon,
PF_ContextHcontext,
A_longcurr_time,
A_longtime_scale,
PF_FixedPoint*pt);
```


### comp_to_layer


Transforms composition panel coordinates to the layer panel coordinates.

```
PF_Errcomp_to_layer(
void*refcon,
PF_ContextHcontext,
A_longcurr_time,
A_longtime_scale,
PF_FixedPoint*pt);
```

### get_comp2layer_xform


Returns the matrix used to convert from the composition panel to the layer panel. If `<span class="pre">*exists</span>` returns `<span class="pre">FALSE</span>`, the matrix cannot be computed because the layer scales to zero.

```
PF_Errget_comp2layer_xform(
void*refcon,
PF_ContextHcontext,
A_longcurr_time,
longtime_scale,
long*exists,
PF_FloatMatrix*comp2layer);
```

### get_layer2comp_xform


Returns the transformation matrix used to convert from the layer panel to the composition panel. This always exists.

```
PF_Errget_layer2comp_xform(
void*refcon,
PF_ContextHcontext,
A_longcurr_time,
A_longtime_scale,
PF_FloatMatrix*layer2comp);
```


### source_to_frame


Transforms the source coordinates in the current context to screen coordinates. Screen (frame) coordinates are affected by the current zoom level.

```
PF_Errsource_to_frame(
void*refcon,
PF_ContextHcontext,
PF_FixedPoint*pt);
```


### frame_to_source


Transforms the screen coordinates identified by `<span class="pre">*pt</span>` to the source coordinates of the current context.

```
PF_Errframe_to_source(
void*refcon,
PF_ContextHcontext,
PF_FixedPoint*pt);
```

### PF_GET_PLATFORM_DATA


Retrieves platform-specific data. For plug-ins loaded with localized resource files, `<span class="pre">PF_PlatData_RES_FILE_PATH</span>` will point to the external file, not the plug-in file. Use `<span class="pre">PF_PlatData_EXE_FILE_PATH</span>` if you want the path of your plug-in.

Starting in CS6, use `<span class="pre">PF_PlatData_EXE_FILE_PATH_W</span>` and `<span class="pre">PF_PlatData_RES_FILE_PATH_W</span>` instead of the old non-wide calls.

```
PF_ErrPF_GET_PLATFORM_DATA(
PF_PlatDataIDwhich,
void*ppData);
```

PF_PlatDataID can have the following values:

> * `<span class="pre">PF_PlatData_MAIN_WND</span>`
> * `<span class="pre">PF_PlatData_EXE_FILE_PATH_DEPRECATED</span>`
> * `<span class="pre">PF_PlatData_RES_FILE_PATH_DEPRECATED</span>`
> * `<span class="pre">PF_PlatData_RES_REFNUM</span>` // macOS
> * `<span class="pre">PF_PlatData_RES_DLLINSTANCE</span>` // Win
> * `<span class="pre">PF_PlatData_BUNDLE_REF</span>`
> * `<span class="pre">PF_PlatData_EXE_FILE_PATH_W</span>` // new CS6
> * `<span class="pre">PF_PlatData_RES_FILE_PATH_W</span>` // new CS6
>