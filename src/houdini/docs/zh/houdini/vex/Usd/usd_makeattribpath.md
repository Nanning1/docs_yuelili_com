---
title: usd_makeattribpath
order: 83
category:
  - houdini
---
    
## 描述

Constructs an attribute path from a primitive path and an attribute name.

| Since | 18.0 |
| ----- | ---- |

```c
string  usd_makeattribpath(<stage>stage, string primpath, string name)
```

This function returns the full path of a given attribute.

这个函数返回一个给定属性的完整路径。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

当在一个节点的上下文中运行时（如 wrangle
LOP），这个参数可以是一个整数，代表要读取阶段的输入号码（从 0 开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通往基元的路径。

`name`

Attribute name.

属性名称。

Returns

The full path of a given attribute.

给定属性的完整路径。

## Examples

    // Obtain the full path to the attribute "attrib_name" on the cube primitive.string attrib_path = usd_makeattribpath(0, "/geo/cube", "attrib_name");