---
title: usd_iprimvarsize
order: 55
category:
  - houdini
---
    
## 描述

Returns the tuple size of the primvar directly on the USD primitive or on USD
primitive‘sancestor.

| Since | 19.0 |
| ----- | ---- |

```c
int  usd_iprimvarsize(<stage>stage, string primpath, string name)
```

This function returns the tuple size of a primvar found directly on the given
primitive or inherited from primitive‘sancestor. If the primvar is an
array, it returns the tuple size of the array element. E.g., for vector types,
this is the number of components.

此函数返回直接在给定基元上找到的或从基元的祖先继承的一个 primvar 的元组大小。如果 primvar
是一个数组，它返回数组元素的元组大小。例如，对于向量类型，这就是组件的数目。

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument
can be an integer representing the input number (starting at 0) to read the
stage from. The integer is equivalent to the string form referencing a
particular input, e.g., “opinput:0”.

当在节点的上下文中运行时（如 wrangle
LOP），该参数可以是一个整数，代表要从中读取阶段的输入数（从 0 开始）。该整数等同于引用特定输入的字符串形式，例如，"opinput:0"。

`primpath`

The path to the primitive.

通向基元的路径。

`name`

Primvar name (without namespace).

Primvar 名称（不含命名空间）。

Returns

The tuple size of the primvar.

Primvar 的元组大小。

- For a vector type, this is the number of components.

对于向量类型，这是其组件的数目。

- For an integer, float, or string, this returns `1`.

对于整数、浮点或字符串，这将返回 1。

- For an array primvar, this returns the tuple size of the elements.

对于一个数组的 primvar，这将返回元素的元组大小。

If the primvar does not exist, returns `0`.

如果 primvar 不存在，返回 0。

Use [usd_iprimvarlen](usd_iprimvarlen.html) "Returns the length of the array
primvar directly on the USD primitive or on USD primitive‘sancestor.") if
you want to obtain the array primvar length.

如果你想获得数组的 primvar 长度，请使用 usd_iprimvarlen。

## Examples

    // Get the tuple size of a primvar on the cube primitive or its ancestor.int tuple_size = usd_iprimvarsize(0, "/geo/cube", "primvar_name");