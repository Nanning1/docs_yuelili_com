---
title: Implementation
order: 5
category:
  - AE 插件开发
---

# Implementation

由于AEGP API提供的功能非常广泛，与After Effects的整合也非常完整，因此有必要进行大量的设计工作，以确保你的插件在所有情况下都能表现得很好。

AEGPs通过PICA功能套件与After Effects进行交互。

AEGPs并不是按照特定的顺序加载的。

检查AEGP API的版本（在你的AEGP的入口函数中），以确认是否会有一个特定的套件。

AEGP也可以使用任何不需要PF_ProgPtr（由特效从PF_InData获得）的特效API套件函数。

## Entry Point

```cpp
A_Err AEGP_PluginInitFuncPrototype(
 struct SPBasicSuite *pica_basicP,
 A_long major_versionL,
 A_long minor_versionL,
 AEGP_PluginID aegp_plugin_id,
 AEGP_GlobalRefcon *global_refconP)

```

插件的入口点，在[PiPL Resources](.../intro/pipl-resources.html)中导出，在启动过程中只被调用一次；所有其他对AEGP的调用都转到它所注册的函数。

这与效果插件模型非常不同，在那里所有的通信都是通过同一个入口点进行的。

因为插件的加载顺序可能不同，所以在入口点函数中获取After Effects没有提供的套件绝不是一个好主意。相反，要等到适当的钩子函数出现。

AEGP [API Versions](.../intro/compatibility-across-multiple-versions.html)  可以帮助区分不同版本的After Effects，以防AEGP需要有不同的行为或处理不同的行为。

那些其他函数被注册为回调钩子。一个添加菜单项的AEGP必须注册一个UpdateMenuHook函数（其函数签名如AE_GeneralPlug.h所述），After Effects可以调用该函数来决定是否启用这些项目。同样，处理命令的插件也注册一个CommandHook（所有命令都有一个）。

## Specialization

AEIO和工匠必须向After Effects注册，以便接收它们所依赖的信息流。

就像AEGP API中的其他东西一样，这是通过一个函数套件完成的；在这种情况下，命名为AEGP_RegisterSuite。

## Example: Adding A Menu Item

在你的入口函数中，使用`AEGP_GetUniqueCommand()`从[Command Suite](aegp-suites.html) 获得After Effects的命令ID，用于`AEGP_InsertMenuCommand`。为你添加的每个菜单项使用不同的ID。

使用AEGP_RegisterSuite的`AEGP_RegisterCommandHook()`，告诉After Effects在你的菜单项被选中时要调用哪个函数。你使用`AEGP_RegisterUpdateMenuHook()`注册的函数可以启用和禁用你的菜单项。除非你注册一个菜单更新函数，否则你的菜单项将被永久禁用。

无论你添加多少个菜单项，你只能注册一个CommandHook。当被调用时，确定哪个菜单项被选中（基于命令ID），使用AEGP PICA套件功能来确定项目的当前状态，并采取相应的行动。例如，关键帧插件可能希望禁用它们的菜单项，除非（可关键帧的）参数流是当前选择的一部分。

## Private Data

与特效不同，AEGPs在After Effects会话中永远不会被卸载。但是，这并不意味着依赖静态和全局变量是一个好主意。

所有的钩子函数都会传递一个plugin_refconPV，用于存储该函数的特定信息。许多AEGP套件函数把`aegp_plugin_id`作为参数；把它存储在传递给你的`global_refconPV`中，可以是一个你分配的结构，也可以是ID本身。

在可能的情况下，使用这些refcon来存储信息，而不是静态变量和全局变量。这在处理多线程问题时变得尤为重要。

使用`global_refconPV`来存储你的全局变量（比如`aegp_plugin_id`），使用refcon来存储钩子函数。

一个潜在的 "After Effects的多个实例 "问题；当第二个After Effects的命令行实例被启动时，所有AEGP的句柄都会被重复。如果这引起了问题（有可能），请提供代码，将保存的句柄附加到你的插件的特定实例中。

## Threading

AEGP完全不支持线程。所有的事情都必须在主线程中完成，要么是对回调的响应，要么是从空闲钩中完成。

有一个调用是线程安全的。`AEGP_CauseIdleRoutinesToBeCalled()`。

但由于`SPBasicSuite`本身不是线程安全的，你需要在主线程中藏起函数指针。