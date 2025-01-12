---
title: Custom ECW UI Over A Standard Data Type
order: 9
category:
  - AE 插件开发
---

# Plug-Ins… Reloaded

在第一次启动时，Premiere Pro 会加载所有的插件，读取 PiPL，并发送 PF_Cmd_GLOBAL_SETUP 来确定插件的功能。为了节省以后启动应用程序的时间，它将这些功能中的一部分保存在我们所说的插件缓存中(在 Windows 中是注册表，在 macOS 中是属性列表文件)。下次启动应用程序时，尽可能使用缓存的信息，而不是加载插件。

调试时，你可以在启动 Premiere Pro 时按住 Shift 键，强制重新加载所有的插件。

如果你的效果每次都需要重新加载，有一种方法可以禁用这种缓存。插件可以使用 AE_CacheOnLoadSuite.h ( 参见[Premiere Pro SDK](http://ppro-plugin-sdk.aenhancers.com/)头文件)中的 PF Cache On Load 套件，在 PF_Cmd_GLOBAL_SETUP 期间调用 PF_SetNoCacheOnLoad()。对于该函数的第二个参数，如果你想让你的效果显示在用户界面上，请传一个非零值。如果加载失败，但你仍然希望 Premiere Pro 在下一次重新启动时尝试再次加载，则传给 0。

# Effects Presets

Premiere Pro 使用的预设方案与 After Effects 不同。

来自 Premiere Pro SDK 指南。

效果预设出现在 Effects 面板的 Presets bin 中，可以像 Effects 一样通过特定的参数设置和关键帧来应用。效果预设可以按以下方式创建。

1. 将一个滤镜应用于一个片段
2. 2. 设置滤波器的参数，如果需要的话，添加关键帧
3. 在 "效果控制 "面板上右击滤波器名称，并选择 "保存预设..."。
4. 如果需要的话，在效果面板上点击右键，选择 "新建预置库 "来创建预置库。
5. 5.在预置文件夹中组织预置。
6. 6. 选择你想输出的仓和/或预置，右击，并选择 "Export Preset"。

预设应该安装在 Plug-ins 目录中。一旦它们被安装在该目录中，它们将是只读的，用户将不能把它们移到不同的文件夹或改变它们的名称。用户创建的预置将是可修改的。

在 Windows Vista 中，这些预设在用户隐藏的 AppData 文件夹中(例如：C:Users[用户名]AppDataRoamingAdobePremiere Pro[版本]Effect Presets and Custom Items.prfpset)。

在 macOS 上，它们在用户文件夹中，在~/Library/应用支持/Adobe/Premiere Pro/[版本]/Effect Presets and Custom Items.prfpset。

# Custom ECW UI Over A Standard Data Type

虽然这被记录为第 1235407 号错误，但有一个简单的解决方法。创建两个独立的参数，并让自定义 UI 使用参数监督来控制滑块参数。
