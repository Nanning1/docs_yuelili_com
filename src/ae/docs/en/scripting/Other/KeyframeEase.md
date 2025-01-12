---
title: KeyframeEase object
order: 4
category:
  - AE 脚本
---

## Description

# KeyframeEase object¶

`myKey = new KeyframeEase(speed, influence);`

**Description**

The KeyframeEase object encapsulates the keyframe ease settings of a layer’sAE property. Keyframe ease is determined by the speed and influence valuesthat you set using the property’s[setTemporalEaseAtKey](../properties/property.html#property-settemporaleaseatkey) method. The constructor creates a KeyframeEase object.Both parameters are required.

- `speed`: A floating-point value. Sets the `speed` attribute.

- `influence`: A floating-pointvalue in the range `[0.1..100.0]`. Sets the `influence` attribute.

**Example**

This example assumes that the Position, a spatial property, has more than two
keyframes.

```javascript
var easeIn = new KeyframeEase(0.5, 50);
var easeOut = new KeyframeEase(0.75, 85);
var myPositionProperty = app.project.item(1).layer(1).property("Position");
myPositionProperty.setTemporalEaseAtKey(2, [easeIn], [easeOut]);
```

This example sets the Scale, a temporal property with either two or threedimensions. For 2D and 3D properties you must set an `easeIn` and `easeOut`value for each dimension:

```javascript
var easeIn = new KeyframeEase(0.5, 50); var easeOut = new
KeyframeEase(0.75, 85); var myScaleProperty =app.project.item(1).layer(1).property("Scale")myScaleProperty.setTemporalEaseAtKey(2, [easeIn, easeIn, easeIn], [easeOut,easeOut, easeOut]);
```

---

## Attributes¶

### KeyframeEase.influence¶

`myKey.influence`

**Description**

The influence value of the keyframe, as shown in the Keyframe Velocity dialog
box.

**Type**

Floating-point value in the range `[0.1..100.0]`; read/write.

---

### KeyframeEase.speed¶

`myKey.speed`

**Description**

The speed value of the keyframe. The units depend on the type of keyframe, andare displayed in the Keyframe Velocity dialog box.

**Type**

Floating-point value; read/write.
