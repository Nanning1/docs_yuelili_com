---
title: setprimgroup
order: 10
category:
  - houdini
---
    
## 描述

Adds or removes a primitive to/from a group in a geometry.

`int setprimgroup(int geohandle, string name, int prim_num, int value, string mode="set")`

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or
[geoself](geoself.html) "Returns a handle to the current geometry."), which
means the current geometry in a node. (This argument may be used in the future
to allow writing to other geometries.)

要写入的几何体的句柄。目前唯一有效的值是 0orgeoself，也就是一个节点中的当前几何体。(这个参数将来可能会被用来允许写到其他的几何体。)

`name`

The name of the group to modify.

要修改的组的名称。

`prim_num`

The primitive number to add or remove from the group.

要从组中添加或删除的基元编号。

`value`

`1` to put the primitive in the group, `0` to remove the primitive from the
group.This is ignored if `mode` is `"toggle"`.

1 表示将基元放入组内，0 表示将基元从组内移除。

`mode`

Use `"set"` to set the primitive‘smembership according to the `value`.Use
`"toggle"` to toggle the primitive‘smembership, regardless of the `value`.

如果模式是 "切换"，则会忽略这一点。