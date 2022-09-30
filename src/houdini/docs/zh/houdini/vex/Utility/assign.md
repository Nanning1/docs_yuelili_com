---
title: assign
order: 2
category:
  - houdini
---
    
## 描述

An efficient way of extracting the components of a vector or matrix into float
variables.

```c
void  assign(float &c1, float &c2, vector2 source)
```

```c
void  assign(float &c1, float &c2, float &c3, vector source)
```

```c
void  assign(float &c1, float &c2, float &c3, float &c4, vector4 source)
```

```c
void  assign(float &c1, float &c2, float &c3, float &c4, matrix2 source)
```

`void assign(float &c1, float &c2, float &c3, float &c4, float &c5, float &c6, float &c7, float &c8, float &c9, matrix3 source)`

`void assign(float &c1, float &c2, float &c3, float &c4, float &c5, float &c6, float &c7, float &c8, float &c9, float &c10, float &c11, float &c12, float &c13, float &c14, float &c15, float &c16, matrix source)`

This function overwrites the float variables with the components from the
final vector or matrix argument.

这个函数用最后的向量或矩阵参数的分量覆盖了浮点变量。
