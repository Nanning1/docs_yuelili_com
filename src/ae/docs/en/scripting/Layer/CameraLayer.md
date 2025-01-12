---
title: CameraLayer object
order: 5
category:
  - AE 脚本
---

## Description

# CameraLayer object¶

`app.project.item(index).layer(index)`

**Description**

The CameraLayer object represents a camera layer within a composition. Createit using [LayerCollection.addCamera()](layercollection.html#layercollection-addcamera). It can be accessed in an item’s layer collection either by indexnumber or by a name string.

> CameraLayer is a subclass of [Layer object](layer.html#layer). All methods
> and attributes of Layer are available when working with CameraLayer.

**AE Properties**

CameraLayer defines no additional attributes, but has different AE propertiesthan other layer types. It has the following properties and property groups:

- `Marker`

- `Transform`

  - `PointofInterest`

  - `Position`

  - `Scale`

  - `Orientation`

  - `XRotation`

  - `YRotation`

  - `Rotation`

  - `Opacity`

- `CameraOptions`

  - `Zoom`

  - `DepthofField`

  - `FocusDistance`

  - `BlurLevel`
