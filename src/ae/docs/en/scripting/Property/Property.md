---
title: Property object
order: 3
category:
  - AE 脚本
---

## Description

# Property object¶

`app.project.item(index).layer(index).propertySpec`

**Description**

The Property object contains value, keyframe, and expression information abouta particular AE property of a layer. An AE property is a value, oftenanimatable, of an effect, mask, or transform within an individual layer. Forexamples of how to access properties, see [PropertyBaseobject](propertybase.html#propertybase) and[PropertyGroup.property()](propertygroup.html#propertygroup-property).

> Property is a subclass of [PropertyBase](propertybase.html#propertybase).
> All methods and attributes of PropertyBase, in addition to those listed
> below, are available when working with Property.

:::info Note

JavaScript objects commonly referred to as “properties” are called“attributes” in this guide, to avoid confusion with the After Effects
definition of property.
:::
**Examples**

- Get and set the value of opacity

> ```javascript
> var myProperty = myLayer.opacity; // opacity has
> propertyValueType of OneD, and is stored as a float myProperty.setValue(50);
> //set opacity to 50% // Variable my Opacity is a float value var myOpacity =
> myProperty.value;
> ```

```

  * Get and set the value of a position

> ```javascript
var myProperty = myLayer.position; // position has
> propertyValueType of ThreeD_SPATIAL, and is stored as an array of 3 floats
> myProperty.setValue([10.0, 30.0, 0.0]); // Variable my Position is an array
> of 3 floats var myPosition = myProperty.value;
```

- Change the value of a mask shape to be open instead of closed

> ```javascript
> var myMask = mylayer.mask(1);
> var myProperty = myMask.maskPath;
> myShape = myProperty.value;
> myShape.closed = false;
> myProperty.setValue(myShape);
> ```

```

  * Get the value of a color at a particular time. A color is stored as an array of four floats, `[r, g, b, opacity]`. This sets the value of the red component of a light’s color at time 4 to be half of that at time 2

> ```javascript
var myProperty = myLight.color; var colorValue =
> myProperty.valueAtTime(2, true); colorValue[0] = 0.5 * colorValue[0];
> myProperty.setValueAtTime(4, colorValue);
```

- Check that a scale calculated by an expression at time 3.5 is the expected value of [10,50]

> ```javascript
> var myProperty = myLayer.scale; // false value of
> preExpression means evaluate the expression var scaleValue =
> myProperty.valueAtTime(3.5, false); if (scaleValue[0] === 10 &&
> scaleValue[1] === 50) { alert("hurray"); } else { alert("oops"); }
> ```

```

  * Keyframe a rotation from 0 to 90 and back again. The animation is 10 seconds, and the middle keyframe is at the 5 second mark. Rotation properties are stored as a OneD value

> ```javascript
var myProperty = myLayer.rotation;
> myProperty.setValueAtTime(0, 0); myProperty.setValueAtTime(5, 90);
> myProperty.setValueAtTime(10, 0);
```

- Change the key frame values for the first three keyframes of some sourcetext

> ```javascript
> var myProperty = myTextLayer.sourceText;
> if (myProperty.numKeys < 3) {
>   alert("error, I thought there were 3 keyframes");
> } else {
>   myProperty.setValueAtKey(1, newTextDocument("keynumber1"));
>   myProperty.setValueAtKey(2, newTextDocument("keynumber2"));
>   myProperty.setValueAtKey(3, newTextDocument("keynumber3"));
> }
> ```

```

  * Set values using the convenience syntax for position, scale, color, or source text

> ```javascript
// These two are equivalent. The second fills in a default
> of 0. myLayer.position.setValue([20, 30, 0]); myLayer.position.setValue([20,
> 30]); // These two are equivalent. The second fills in a defaultof 100.
> myLayer.scale.setValue([50, 50, 100]); myLayer.scale.setValue([50, 50]); //
> These two are equivalent. The second fills in a defaultof 1.0
> myLight.color.setValue([0.8, 0.3, 0.1, 1.0]); myLight.color.setValue([0.8,
> 0.3, 0.1]); // These two are equivalent. The second creates a TextDocument
> myTextLayer.sourceText.setValue(newTextDocument("foo"));
> myTextLayer.sourceText.setValue("foo");
```

---

## Attributes¶

### Property.alternateSource¶

`app.project.item(index).layer(index).propertySpec.alternateSource`

:::info Note

This functionality was added in After Effects 18.0 (2021)
:::
**Description**

The value is null when:

- The alternate source is not set for the associated layer.

- The property cannot be used to set an alternate source.

Use Property.canSetAlternateSource to determine if the property is a MediaReplacement Essential Property.

All Media Replacement Layers have an alternate source item that can be set.

A layer is “marked” for media replacement when the layer is added to theEssential Graphics Panel (see[AVLayer.addToMotionGraphicsTemplate()](../layers/avlayer.html#avlayer-addtomotiongraphicstemplate) or[AVLayer.addToMotionGraphicsTemplateAs()](../layers/avlayer.html#avlayer-addtomotiongraphicstemplateas)).

- If present, the render workflow will pick up the alternate source while rendering the layer.

- If the alternate source for the layer is not set, then the source layer of the Media Replacement control is used for rendering (this is the normal workflow).

Use Property.setAlternateSource() to change the value.

**Type**

AVItem object; read-only.

---

### Property.canSetAlternateSource¶

`app.project.item(index).layer(index).propertySpec.canSetAlternateSource`

:::info Note

This functionality was added in After Effects 18.0 (2021)
:::
**Description**

Test whether the property is an Essential Property that supports Media
Replacement.

Returns true if the property allows Media Replacement, false otherwise.

**Type**

Boolean; read-only.

---

### Property.canSetExpression¶

`app.project.item(index).layer(index).propertySpec.canSetExpression`

**Description**

When true, the named property is of a type whose expression can be set by ascript. See also Property expression attribute.

**Type**

Boolean; read-only.

---

### Property.canVaryOverTime¶

`app.project.item(index).layer(index).propertySpec.canVaryOverTime`

**Description**

When true, the named property can vary over time—that is, keyframe values orexpressions can be written to this property.

**Type**

Boolean; read-only.

---

### Property.dimensionsSeparated¶

`app.project.item(index).layer(index).propertySpec.dimensionsSeparated`

**Description**

When true, the property’s dimensions are represented as separate properties.For example, if the layer’s position is represented as X Position and YPosition properties in the Timeline panel, the Position property has this
attribute set to true.

:::info Note

This attribute applies only when the isSeparationLeader attribute is true.
:::
**Type**

Boolean; read/write.

---

### Property.essentialPropertySource¶

`app.project.item(index).layer(index).essentialProperty.property(index).essentialPropertySource`

:::info Note

This functionality was added in After Effects 22.0 (2022)
:::
**Description**

Instance property on an Essential Property object which returns the originalsource Property which was used to create the Essential Property.

**Type**

Can be either:

- A read/write Property object, in the case that the source object used to create the Essential Property was a Property

- A read/write [AVLayer object](../layers/avlayer.html#avlayer), in the case that the source object used to create the Essential Property was a Media Replacement Footage item

- Null if called on a non-Essential Property

**Example**

```javascript
var firstComp = app.project.item(1);
var opacityProp = firstComp.layer(1).property("Transform").property("Opacity");
opacityProp.addToMotionGraphicsTemplate(firstComp);
var secondComp = app.project.item(2);
secondComp.layers.add(firstComp);
var essentialOpacity = secondComp.layer(1).essentialProperty.property(1);
if (essentialOpacity.essentialPropertySource == opacityProp) {
  alert("You can getthe source Property from an Essential Property!");
}
```

---

### Property.expression¶

`app.project.item(index).layer(index).propertySpec.expression`

**Description**

The expression for the named property. Writeable only when canSetExpressionfor the named property is true. When you specify a value for this attribute,
the string is evaluated.

- If the string contains a valid expression, expressionEnabled becomes true.

- If the string does not contain a valid expression, an error is generated, and expressionEnabled becomes false.

- If you set the attribute to the empty string, expressionEnabled becomes false, but no error is generated.

**Type**

String; read/write if canSetExpression for the named property is true.

---

### Property.expressionEnabled¶

`app.project.item(index).layer(index).propertySpec.expressionEnabled`

**Description**

When true, the named property uses its associated expression to generate avalue. When false, the keyframe information or static value of the property isused. This attribute can be set to true only if canSetExpression for the namedproperty is true and expression contains a valid expression string.

**Type**

Boolean; read/write.

---

### Property.expressionError¶

`app.project.item(index).layer(index).propertySpec.expressionError`

**Description**

Contains the error, if any, generated by evaluation of the string mostrecently set in expression. If no expression string has been specified, or ifthe last expression string evaluated without error, contains the empty string
`("")`.

**Type**

String; read-only.

---

### Property.hasMax¶

`app.project.item(index).layer(index).propertySpec.hasMax`

**Description**

When true, there is a maximum permitted value for the named property;
otherwise false.

**Type**

Boolean; read-only.

---

### Property.hasMin¶

`app.project.item(index).layer(index).propertySpec.hasMin`

**Description**

When true, there is a minimum permitted value for the named property;
otherwise false.

**Type**

Boolean; read-only.

---

### Property.isDropdownEffect¶

`app.project.item(index).layer(index).propertySpec.isDropdownEffect`

:::info Note

This functionality was added in After Effects 17.0.1 (2020)
:::
**Description**

When true, the property is the Menu property of a Dropdown Menu Control effectand can have its items updated with setPropertyParameters.

**Examples**

```javascript
appliedEffect.property("Menu").isDropdownEffect; // true
appliedEffect.property("Color").isDropdownEffect; // falseappliedEffect.property("Feather").isDropdownEffect; // false
```

**Type**

Boolean; read-only.

---

### Property.isSeparationFollower¶

`app.project.item(index).layer(index).propertySpec.isSeparationFollower`

**Description**

When true, the property represents one of the separated dimensions for amultidimensional property. For example, the X Position property has this
attribute set to true.

:::info Note

The original, consolidated, multidimensional property is the “separationleader” and the new, separated, single-dimensional properties are its
“separation followers”.
:::
**Type**

Boolean; read-only.

---

### Property.isSeparationLeader¶

`app.project.item(index).layer(index).propertySpec.isSeparationLeader`

**Description**

When true, the property is multidimensional and can be separated. For example,the Position property has this attribute set to true.

:::info Note

The original, consolidated, multidimensional property is the “separationleader” and the new, separated, single-dimensional properties are its
“separation followers”.
:::
**Type**

Boolean; read-only.

---

### Property.isSpatial¶

`app.project.item(index).layer(index).propertySpec.isSpatial`

**Description**

When true, the named property defines a spatial value. Examples are positionand effect point controls.

**Type**

Boolean; read-only.

---

### Property.isTimeVarying¶

`app.project.item(index).layer(index).propertySpec.isTimeVarying`

**Description**

When true, the named property is time varying — that is, it has keyframes oran enabled expression. When this attribute is true, the attribute`canVaryOverTime` must also be true.

**Type**

Boolean; read-only.

---

### Property.maxValue¶

`app.project.item(index).layer(index).propertySpec.maxValue`

**Description**

The maximum permitted value of the named property. If the `hasMax` attributeis false, an exception occurs, and an error is generated.

**Type**

Floating-point value; read-only.

---

### Property.minValue¶

`app.project.item(index).layer(index).propertySpec.minValue`

**Description**

The minimum permitted value of the named property. If the `hasMin` attributeis false, an exception occurs, and an error is generated.

**Type**

Floating-point value; read-only.

---

### Property.numKeys¶

`app.project.item(index).layer(index).propertySpec.numKeys`

**Description**

The number of keyframes in the named property. If the value is 0, the property
is not being keyframed.

**Type**

Integer; read-only.

---

### Property.propertyIndex¶

`app.project.item(index).layer(index).propertySpec.propertyIndex`

**Description**

The position index of the named property. The first property is at index
position 1.

**Type**

Integer; read-only.

---

### Property.propertyValueType¶

`app.project.item(index).layer(index).propertySpec.propertyValueType`

**Description**

The type of value stored in the named property. The `PropertyValueType`enumeration has one value for each type of data that can be stored in orretrieved from a property. Each type of data is stored and retrieved in adifferent kind of structure. All property objects store data according to oneof these categories. For example, a 3D spatial property (such as a layer’sposition) is stored as an array of three floating-point values. When setting avalue for position, pass in such an array, as follows:`mylayer.property("position").setValue([10, 20, 0]);`

In contrast, a shape property (such as a layer’s mask shape) is stored as aShape object. When setting a value for a shape, pass a Shape object, as
follows:

```javascript
var myShape = new Shape(); myShape.vertices = [[0,0], [0,100],
[100,100], [100,0]]; var myMask = mylayer.property("ADBE Mask
Parade").property(1); myMask.property("ADBE Mask Shape").setValue(myShape);

```

**Type**

A `PropertyValueType` enumerated value; read/write. One of:

- `PropertyValueType.NO_VALUE`: Stores no data.

- `PropertyValueType.ThreeD_SPATIAL`: Array of three floating-point positional values. For example, an Anchor Point value might be [10.0, 20.2, 0.0]

- `PropertyValueType.ThreeD`: Array of three floating-point quantitative values. For example, a Scale value might be [100.0, 20.2, 0.0]

- `PropertyValueType.TwoD_SPATIAL`: Array of 2 floating-point positional values. For example, an Anchor Point value might be [5.1, 10.0]

- `PropertyValueType.TwoD`: Array of 2 floating-point quantitative values. For example, a Scale value might be [5.1, 100.0]

- `PropertyValueType.OneD`: A floating-point value.

- `PropertyValueType.COLOR`:Array of 4 floating-point values in the range `[0.0..1.0]`. For example, [0.8, 0.3, 0.1, 1.0]

- `PropertyValueType.CUSTOM_VALUE` : Custom property value, such as the Histogram property for the Levels effect.

- `PropertyValueType.MARKER`: [MarkerValue object](../other/markervalue.html#markervalue)

- `PropertyValueType.LAYER_INDEX`: Integer; a value of 0 means no layer.

- `PropertyValueType.MASK_INDEX`: Integer; a value of 0 means no mask.

- `PropertyValueType.SHAPE`: [Shape object](../other/shape.html#shape)

- `PropertyValueType.TEXT_DOCUMENT`: [TextDocument object](../other/textdocument.html#textdocument)

---

### Property.selectedKeys¶

`app.project.item(index).layer(index).propertySpec.selectedKeys`

**Description**

The indices of all the selected keyframes in the named property. If nokeyframes are selected, or if the property has no keyframes, returns an empty
array.

**Type**

Array of integers; read-only.

---

### Property.separationDimension¶

`app.project.item(index).layer(index).propertySpec.separationDimension`

**Description**

For a separated follower, the dimension number it represents in themultidimensional leader. The first dimension starts at 0. For example, the YPosition property has a `separationDimension` value of 1; X Position has a
value of 0.

**Type**

Integer; read-only.

---

### Property.separationLeader¶

`app.project.item(index).layer(index).propertySpec.separationLeader`

**Description**

The original multidimensional property for this separated follower. Forexample, if the current property is Y Position, this attribute’s value pointsto the Position property.

:::info Note

The original, consolidated, multidimensional property is the “separationleader” and the new, separated, single-dimensional properties are its
“separation followers”.
:::
**Type**

Property object; read-only.

---

### Property.unitsText¶

`app.project.item(index).layer(index).propertySpec.unitsText`

**Description**

The text description of the units in which the value is expressed.

**Type**

String; read-only.

---

### Property.value¶

`app.project.item(index).layer(index).propertySpec.value`

**Description**

The value of the named property at the current time.

- If `expressionEnabled` is true, returns the evaluated expression value.

- If there are keyframes, returns the keyframed value at the current time.

- Otherwise, returns the static value.

The type of value returned depends on the property value type. See examples
for Property object.

**Type**

A value appropriate for the type of the property (seeProperty.propertyValueType); read-only.

---

## Methods¶

### Property.addKey()¶

`app.project.item(index).layer(index).propertySpec.addKey(time)`

**Description**

Adds a new keyframe or marker to the named property at the specified time andreturns the index of the new keyframe.

**Parameters**

| Property | Type                                                                                                              |
| -------- | ----------------------------------------------------------------------------------------------------------------- |
| `time`   | The time, in seconds, at which to add the keyframe. A floating-point value.The beginning of the composition is 0. |

**Returns**

Integer; the index of the new keyframe or marker.

---

### Property.addToMotionGraphicsTemplate()¶

`app.project.item(index).layer(index).propertySpec.addToMotionGraphicsTemplate(comp)`

:::info Note

This functionality was added in After Effects 15.0 (CC 2018)
:::
**Description**

Adds the property to the Essential Graphics panel for the specified
composition.

Returns true if the property is successfully added, false otherwise.

If the property is not added, it is either because it is not one of thesupported property types or the property has already been added to the EGP forthat composition. After Effects will present a warning dialog if the propertycannot be added to the EGP.

Use the Property.canAddToMotionGraphicsTemplate() method to test whether theproperty can be added to a Motion Graphics template.

**Parameters**

| Property | Type                                                                        |
| -------- | --------------------------------------------------------------------------- |
| `comp`   | The composition that you wish to add the property to, a CompItem. Required. |

**Returns**

Boolean.

---

### Property.addToMotionGraphicsTemplateAs()¶

`app.project.item(index).layer(index).propertySpec.addToMotionGraphicsTemplateAs(comp, name)`

:::info Note

This functionality was added in After Effects 16.1 (CC 2019)
:::
**Description**

Adds the property to the Essential Graphics panel for the specifiedcomposition, but with an additional option to give the EGP property a custom
name.

Returns true if the property is successfully added, false otherwise.

If the property is not added, it is either because it is not one of thesupported property types or the property has already been added to the EGP forthat composition. After Effects will present a warning dialog if the propertycannot be added to the EGP.

Use the Property.canAddToMotionGraphicsTemplate() method to test whether theproperty can be added to a Motion Graphics template.

**Parameters**

| Property | Type                                                                        |
| -------- | --------------------------------------------------------------------------- |
| `comp`   | The composition that you wish to add the property to, a CompItem. Required. |
| `name`   | A string for the new name. Required.                                        |

**Returns**

Boolean.

---

### Property.canAddToMotionGraphicsTemplate()¶

`app.project.item(index).layer(index).propertySpec.canAddToMotionGraphicsTemplate(comp)`

:::info Note

This functionality was added in After Effects 15.0 (CC 2018)
:::
**Description**

Test whether or not the property can be added to the Essential Graphics panelfor the specified composition.

Returns true if the property can be added, false otherwise.

If the property can not be added, it is either because it is not one of thesupported property types or the property has already been added to the EGP forthat composition. After Effects will present a warning dialog if the propertycannot be added to the EGP.

Supported property types are:

- Checkbox

- Color

- Numerical Slider (i.e., a single-value numerical property, such as Transform > Opacity or the Slider Control expression control effect)

- Source Text

**Parameters**

| Property | Type                                                                        |
| -------- | --------------------------------------------------------------------------- |
| `comp`   | The composition that you wish to add the property to, a CompItem. Required. |

**Returns**

Boolean.

---

### Property.getSeparationFollower()¶

`app.project.item(index).layer(index).propertySpec.getSeparationFollower(dim)`

**Description**

For a separated, multidimensional property, retrieves a specific followerproperty. For example, you can use this method on the Position property toaccess the separated X Position and Y Position properties

:::info Note

This attribute applies only when the isSeparationLeader attribute is true.
:::
**Parameters**

| Property | Type                                  |
| -------- | ------------------------------------- |
| `dim`    | The dimension number (starting at 0). |

**Returns**

Property object, or an error if the property is not multidimensional or doesnot have the specified dimension.

---

### Property.isInterpolationTypeValid()¶

`app.project.item(index).layer(index).propertySpec.isInterpolationTypeValid(type)`

**Description**

Returns true if the named property can be interpolated using the specifiedkeyframe interpolation type.

**Parameters**

**Type**

A `KeyframeInterpolationType` enumerated value; one of:

- `KeyframeInterpolationType.LINEAR`

- `KeyframeInterpolationType.BEZIER`

- `KeyframeInterpolationType.HOLD`

**Returns**

Boolean.

---

### Property.keyInInterpolationType()¶

`app.project.item(index).layer(index).propertySpec.keyInInterpolationType(keyIndex)`

**Description**

Returns the ‘in’ interpolation type for the specified keyframe.

**Parameters**

| Property   | Type                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex` | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |

**Returns**

A `KeyframeInterpolationType` enumerated value; one of:

- `KeyframeInterpolationType.LINEAR`

- `KeyframeInterpolationType.BEZIER`

- `KeyframeInterpolationType.HOLD`

---

### Property.keyInSpatialTangent()¶

`app.project.item(index).layer(index).propertySpec.keyInSpatialTangent(keyIndex)`

**Description**

Returns the incoming spatial tangent for the specified keyframe, if the namedproperty is spatial (that is, the value type is`TwoD_SPATIALorThreeD_SPATIAL`).

**Parameters**

| Property   | Type                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex` | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |

**Returns**

Array of floating-point values:

- If the property value type is `PropertyValueType.TwoD_SPATIAL`, the array contains 2 floating-point values.

- If the property value type is `PropertyValueType.ThreeD_SPATIAL`, the array contains 3 floating-point values.

- If the property value type is neither of these types, an exception is generated.

---

### Property.keyInTemporalEase()¶

`app.project.item(index).layer(index).propertySpec.keyInTemporalEase(keyIndex)`

**Description**

Returns the incoming temporal ease for the specified keyframe.

**Parameters**

| Property   | Type                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex` | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |

**Returns**

Array of [KeyframeEase objects](../other/keyframeease.html#keyframeease):

- If the property value type is `PropertyValueType.TwoD`, the array contains 2 objects.

- If the property value type is `PropertyValueType.ThreeD`, the array contains 3 objects.

- For any other value type, the array contains 1 object.

---

### Property.keyLabel()¶

`app.project.item(index).layer(index).propertySpec.keyLabel(keyIndex)`

:::info Note

This functionality was added in After Effects 22.6.
:::
**Description**

The label color for the keyframe. Colors are represented by their number (0for None, or 1 to 16 for one of the preset colors in the Labels preferences).

Read only. Keyframe color labels can be set by setLabelAtKey.

**Parameters**

| Property   | Type                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex` | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |

**Returns**

Integer (0 to 16); read only.

---

### Property.keyOutInterpolationType()¶

`app.project.item(index).layer(index).propertySpec.keyOutInterpolationType(keyIndex)`

**Description**

Returns the outgoing interpolation type for the specified keyframe.

**Parameters**

| Property   | Type                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex` | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |

**Returns**

A `KeyframeInterpolationType` enumerated value; one of:

- `KeyframeInterpolationType.LINEAR`

- `KeyframeInterpolationType.BEZIER`

- `KeyframeInterpolationType.HOLD`

---

### Property.keyOutSpatialTangent()¶

`app.project.item(index).layer(index).propertySpec.keyOutSpatialTangent(keyIndex)`

**Description**

Returns the outgoing spatial tangent for the specified keyframe.

**Parameters**

| Property   | Type                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex` | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |

**Returns**

Array of floating-point values:

- If the property value type is `PropertyValueType.TwoD_SPATIAL`, the array contains 2 floating-point values.

- If the property value type is `PropertyValueType.ThreeD_SPATIAL`, the array contains 3 floating-point values.

- If the property value type is neither of these types, an exception is generated.

---

### Property.keyOutTemporalEase()¶

`app.project.item(index).layer(index).propertySpec.keyOutTemporalEase(keyIndex)`

**Description**

Returns the outgoing temporal ease for the specified keyframe.

**Parameters**

| Property   | Type                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex` | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |

**Returns**

Array of KeyframeEase objects:

- If the property value type is `PropertyValueType.TwoD`, the array contains 2 objects.

- If the property value type is `PropertyValueType.ThreeD`, the array contains 3 objects.

- For any other value type, the array contains 1 object.

---

### Property.keyRoving()¶

`app.project.item(index).layer(index).propertySpec.keyRoving(keyIndex)`

**Description**

Returns true if the specified keyframe is roving. The first and last keyframein a property cannot rove; if you try to set roving for one of these, theoperation is ignored, and keyRoving() continues to return false. If theproperty value type is neither `TwoD_SPATIAL` nor `ThreeD_SPATIAL`, an
exception is generated.

**Parameters**

| Property   | Type                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex` | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |

**Returns**

Boolean.

---

### Property.keySelected()¶

`app.project.item(index).layer(index).propertySpec.keySelected(keyIndex)`

**Description**

Returns true if the specified keyframe is selected.

**Parameters**

| Property   | Type                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex` | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |

**Returns**

Boolean.

---

### Property.keySpatialAutoBezier()¶

`app.project.item(index).layer(index).propertySpec.keySpatialAutoBezier(keyIndex)`

**Description**

Returns true if the specified keyframe has spatial auto-Bezier interpolation.(This type of interpolation affects this keyframe only if`keySpatialContinuous(keyIndex)` is also true.) If the property value type isneither `TwoD_SPATIAL` nor `ThreeD_SPATIAL`, an exception is generated.

**Parameters**

| Property   | Type                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex` | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |

**Returns**

Boolean.

---

### Property.keySpatialContinuous()¶

`app.project.item(index).layer(index).propertySpec.keySpatialContinuous(keyIndex)`

**Description**

Returns true if the specified keyframe has spatial continuity. If the propertyvalue type is neither `TwoD_SPATIAL` nor `ThreeD_SPATIAL`, an exception is
generated.

**Parameters**

| Property   | Type                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex` | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |

**Returns**

Boolean.

---

### Property.keyTemporalAutoBezier()¶

`app.project.item(index).layer(index).propertySpec.keyTemporalAutoBezier(keyIndex)`

**Description**

Returns true if the specified keyframe has temporal auto-Bezier interpolation.Temporal auto-Bezier interpolation affects this keyframe only if the keyframeinterpolation type is `KeyframeInterpolationType.BEZIER` for both`keyInInterpolationType(keyIndex)` and `keyOutInterpolationType(keyIndex)`.

**Parameters**

| Property   | Type                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex` | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |

**Returns**

Boolean.

---

### Property.keyTemporalContinuous()¶

`app.project.item(index).layer(index).propertySpec.keyTemporalContinuous(keyIndex)`

**Description**

Returns true if the specified keyframe has temporal continuity. Temporalcontinuity affects this keyframe only if keyframe interpolation type is`KeyframeInterpolationType.BEZIER` for both `keyInInterpolationType(keyIndex)`and `keyOutInterpolationType(keyIndex)`.

**Parameters**

| Property   | Type                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex` | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |

**Returns**

Boolean.

---

### Property.keyTime()¶

`app.project.item(index).layer(index).propertySpec.keyTime(keyIndex)`
`app.project.item(index).layer(index).propertySpec.keyTime(markerComment)`

**Description**

Finds the specified keyframe or marker and returns the time at which itoccurs. If no keyframe or marker can be found that matches the argument, thismethod generates an exception, and an error is displayed.

**Parameters**

| Property        | Type                                                                                                             |
| --------------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex`      | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |
| `markerComment` | The comment string attached to a marker (see[MarkerValue.comment](../other/markervalue.html#markervalue-comment) |

attribute).

**Returns**

Floating-point value.

---

### Property.keyValue()¶

`app.project.item(index).layer(index).propertySpec.keyValue(keyIndex)`

`app.project.item(index).layer(index).propertySpec.keyValue(markerComment)`

**Description**

Finds the specified keyframe or marker and returns its current value. If nokeyframe or marker can be found that matches the argument, this methodgenerates an exception, and an error is displayed.

**Parameters**

| Property        | Type                                                                                                             |
| --------------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex`      | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |
| `markerComment` | The comment string attached to a marker (see[MarkerValue.comment](../other/markervalue.html#markervalue-comment) |

attribute).

**Returns**

Floating-point value for keyframes, MarkerValue object for markers.

---

### Property.nearestKeyIndex()¶

`app.project.item(index).layer(index).propertySpec.nearestKeyIndex(time)`

**Description**

Returns the index of the keyframe nearest to the specified time.

**Parameters**

| Property | Type                                                                          |
| -------- | ----------------------------------------------------------------------------- |
| `time`   | The time in seconds; a floating-point value. The beginning of the composition |

is 0.  
**Returns**

Integer.

---

### Property.removeKey()¶

`app.project.item(index).layer(index).propertySpec.removeKey(keyIndex)`

**Description**

Removes the specified keyframe from the named property. If no keyframe withthe specified index exists, generates an exception and displays an error. Whena keyframe is removed, the remaining index numbers change. To remove more thanone keyframe, you must start with the highest index number and work down tothe lowest to ensure that the remaining indices reference the same keyframe
after each removal.

**Parameters**

| Property   | Type                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex` | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |

**Returns**

Nothing.

---

### Property.setAlternateSource()¶

`app.project.item(index).layer(index).propertySpec.setAlternateSource(newSource)`

:::info Note

This functionality was added in After Effects 18.0 (2021)
:::
**Description**

Set the alternate source for this property.

The Property object and the input parameters for the AVItem that is beingcalled needs to be Media Replacement compatible for the action to go through.

- Use the [AVItem.isMediaReplacementCompatible](../items/avitem.html#avitem-ismediareplacementcompatible) method to test whether the AVItem can be used as an alternate source for Media Replacement.

- Use Property.canSetAlternateSource to test if the property allows Media Replacement.

**Parameters**

| Property    | Type                                    |
| ----------- | --------------------------------------- |
| `newSource` | The new source AVItem object. Required. |

**Returns**

Nothing.

---

### Property.setInterpolationTypeAtKey()¶

`app.project.item(index).layer(index).propertySpec.setInterpolationTypeAtKey(keyIndex, inType[, outType])`

**Description**

Sets the `in` and `out` interpolation types for the specified keyframe.

**Parameters**

| Property   | Type                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex` | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |
| `inType`   | The incoming interpolation type. A `KeyframeInterpolationType` enumerated                                        |

value; one of:

- `KeyframeInterpolationType.LINEAR`

- `KeyframeInterpolationType.BEZIER`

- `KeyframeInterpolationType.HOLD`

| Property  | Type                                                                           |
| --------- | ------------------------------------------------------------------------------ |
| `outType` | (Optional) The outgoing interpolation type. If not supplied, the ‘out’ type is |

set to the `inType` value. A `KeyframeInterpolationType` enumerated value; one
of:

- `KeyframeInterpolationType.LINEAR`

- `KeyframeInterpolationType.BEZIER`

- `KeyframeInterpolationType.HOLD`

**Returns**

Nothing.

---

### Property.setLabelAtKey()¶

`app.project.item(index).layer(index).propertySpec.setLabelAtKey(keyIndex, labelIndex)`

:::info Note

This functionality was added in After Effects 22.6 (2022)
:::
**Description**

Set the label color for the keyframe. Colors are represented by their number(0 for None, or 1 to 16 for one of the preset colors in the Labels
preferences).

**Parameters**

| Property     | Type                                                                                                             |
| ------------ | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex`   | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |
| `labelIndex` | The index for the new label value. An integer in the range 0-16.                                                 |

**Returns**

Nothing.

---

### Property.setPropertyParameters()¶

`app.project.item(index).layer(index).propertySpec.setPropertyParameters(items)`

:::info Note

This functionality was added in After Effects 17.0.1 (2020)
:::
**Description**

Sets parameters for a Dropdown Menu Control’s Menu Property. This method willoverwrite the existing set of Menu items with the provided array of strings.

- The Dropdown Menu Control effect’s Menu property is the only property that allows parameters to be set.

- To check if a property allows parameters to be set, check with isDropdownEffect before calling this method.

- An exception is raised whenever this method fails.

**Parameters**

| Property | Type                                                                           |
| -------- | ------------------------------------------------------------------------------ |
| `items`  | An array of strings which will replace the existing menu entries in a Dropdown |

Menu Control.

- Only strings are allowed.

- Empty item strings are not allowed.

- Duplicate item strings are not allowed.

- The character “|” is not allowed in the item strings.

- The string “(-” - can be specified as of the item strings. These appear as separator lines in the dropdown menu. The separator lines will claim an index for each of themselves.

:::info Note

Item strings should be in ASCII or MultiByte encodable in the current code-page. In other words, the item strings should be provided in the script of therunning system. For example: Specifying the item strings in Japanese whilerunning the script on an English system will create a dropdown effect withillegible characters in the item strings.
:::
**Example**

```javascript
var dropdownItems = [ "First Item", "Second Item", "(-",
"Another Item", "Last Item" ]; var dropdownEffect = layer.property("ADBE
Effect Parade").addProperty("ADBE Dropdown Control");dropdownEffect.property(1).setPropertyParameters(dropdownItems);
```

**Returns**

Property object, the updated Dropdown Menu Control’s Menu property.

---

### Property.setRovingAtKey()¶

`app.project.item(index).layer(index).propertySpec.setRovingAtKey(keyIndex, newVal)`

**Description**

Turns roving on or off for the specified keyframe. The first and last keyframein a property cannot rove; if you try to set roving for one of these, theoperation is ignored, and `keyRoving()` continues to return false. If theproperty value type is neither `TwoD_SPATIAL` nor `ThreeD_SPATIAL`, an
exception is generated.

**Parameters**

| Property   | Type                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex` | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |
| `newVal`   | True to turn roving on, false to turn roving off.                                                                |

**Returns**

Nothing.

---

### Property.setSelectedAtKey()¶

`app.project.item(index).layer(index).propertySpec.setSelectedAtKey(keyIndex, onOff)`

**Description**

Selects or deselects the specified keyframe.

**Parameters**

| Property   | Type                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex` | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |
| `onOff`    | True to select the keyframe, false to deselect it.                                                               |

**Returns**

Nothing.

---

### Property.setSpatialAutoBezierAtKey()¶

`app.project.item(index).layer(index).propertySpec.setSpatialAutoBezierAtKey(keyIndex, newVal)`

**Description**

Turns spatial auto-Bezier interpolation on or off for the specified keyframe.If the property value type is neither `TwoD_SPATIAL` nor `ThreeD_SPATIAL`, an
exception is generated.

**Parameters**

| Property   | Type                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex` | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |
| `newVal`   | True to turn spatial auto-Bezier on, false to turn it off.                                                       |

**Returns**

Nothing.

---

### Property.setSpatialContinuousAtKey()¶

`app.project.item(index).layer(index).propertySpec.setSpatialContinuousAtKey(keyIndex, newVal)`

**Description**

Turns spatial continuity on or off for the specified keyframe. If the propertyvalue type is neither `TwoD_SPATIAL` nor `ThreeD_SPATIAL`, an exception is
generated.

**Parameters**

| Property   | Type                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex` | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |
| `newVal`   | True to turn spatial auto-Bezier on, false to turn it off.                                                       |

**Returns**

Nothing.

---

### Property.setSpatialTangentsAtKey()¶

`app.project.item(index).layer(index).propertySpec.setSpatialTangentsAtKey(keyIndex, inTangent[, outTangent])`

**Description**

Sets the incoming and outgoing tangent vectors for the specified keyframe. Ifthe property value type is neither `TwoD_SPATIAL` nor `ThreeD_SPATIAL`, an
exception is generated.

**Parameters**

| Property    | Type                                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------- |
| `keyIndex`  | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex() method. |
| `inTangent` | The incoming tangent vector. An array of 2 or 3 floating-point values.                                                    |

- If the property value type is `PropertyValueType.TwoD_SPATIAL`, the array contains 2 values.

- If the property value type is `PropertyValueType.ThreeD_SPATIAL`, the array contains 3 values.

| Property     | Type                                                                          |
| ------------ | ----------------------------------------------------------------------------- |
| `outTangent` | (Optional) The outgoing tangent vector. If not supplied, the `out` tangent is |

set to the `inTangent` value. An array of 2 or 3 floating-point values.

- If the property value type is `PropertyValueType.TwoD_SPATIAL`, the array contains 2 values.

- If the property value type is

`PropertyValueType.ThreeD_SPATIAL`, the array contains 3 values.

**Returns**

Nothing.

---

### Property.setTemporalAutoBezierAtKey()¶

`app.project.item(index).layer(index).propertySpec.setTemporalAutoBezierAtKey(keyIndex, newVal)`

**Description**

Turns temporal auto-Bezier interpolation on or off for the specified keyframe.When this is turned on, it affects this keyframe only if`keySpatialContinuous(keyIndex)` is also true.

**Parameters**

| Property   | Type                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex` | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |
| `newVal`   | True to turn temporal auto-Bezier on, false to turn it off.                                                      |

**Returns**

Nothing.

---

### Property.setTemporalContinuousAtKey()¶

`app.project.item(index).layer(index).propertySpec.setTemporalContinuousAtKey(keyIndex, newVal)`

**Description**

Turns temporal continuity on or off for the specified keyframe. When temporalcontinuity is turned on, it affects this keyframe only if the keyframeinterpolation type is `KeyframeInterpolationType.BEZIER` for both`keyInInterpolationType(keyIndex)` and `keyOutInterpolationType(keyIndex)`.

**Parameters**

| Property   | Type                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex` | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |
| `newVal`   | True to turn temporal continuity on, false to turn it off.                                                       |

**Returns**

Nothing.

---

### Property.setTemporalEaseAtKey()¶

`app.project.item(index).layer(index).propertySpec.setTemporalEaseAtKey(keyIndex, inTemporalEase[, outTemporalEase])`

**Description**

Sets the incoming and outgoing temporal ease for the specified keyframe. See[KeyframeEase object](../other/keyframeease.html#keyframeease).

**Parameters**

| Property         | Type                                                                                                             |
| ---------------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex`       | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |
| `inTemporalEase` | The incoming temporal ease. An array of 1, 2, or 3 KeyframeEase objects.                                         |

- If the property value type is `PropertyValueType.TwoD`, the array contains 2 objects.

- If the property value type is `PropertyValueType.ThreeD`, the array contains 3 objects.

- For all other value types, the array contains 1 object.

| Property          | Type                                                                         |
| ----------------- | ---------------------------------------------------------------------------- |
| `outTemporalEase` | (Optional) The outgoing temporal ease. If not supplied, the outgoing ease is |

set to the `inTemporalEase` value. An array of 1, 2, or 3 KeyframeEase
objects.

- If the property value type is `PropertyValueType.TwoD`, the array contains 2 objects.

- If the property value type is `PropertyValueType.ThreeD`, the array contains 3 objects.

- For all other value types, the array contains 1 object.

**Returns**

Nothing.

---

### Property.setValue()¶

`app.project.item(index).layer(index).propertySpec.setValue(newValue)`

**Description**

Sets the static value of a property that has no keyframes. If the namedproperty has keyframes, this method generates an exception and displays anerror. To set the value of a property with keyframes, useProperty.setValueAtTime() or Property.setValueAtKey().

**Parameters**

| Property   | Type                                                                                   |
| ---------- | -------------------------------------------------------------------------------------- |
| `newValue` | A value appropriate for the type of property being set; seeProperty.propertyValueType. |

**Returns**

Nothing.

---

### Property.setValueAtKey()¶

`app.project.item(index).layer(index).propertySpec.setValueAtKey(keyIndex, newValue)`

**Description**

Finds the specified keyframe and sets its value. If the named property has nokeyframes, or no keyframe with the specified index, this method generates anexception and displays an error.

**Parameters**

| Property   | Type                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `keyIndex` | The index for the keyframe. An integer in the range `[1..numKeys]`, asreturned by the addKey or nearestKeyIndex. |
| `newValue` | A value appropriate for the type of property being set; seeProperty.propertyValueType.                           |

**Returns**

Nothing.

---

### Property.setValueAtTime()¶

`app.project.item(index).layer(index).propertySpec.setValueAtTime(time, newValue)`

**Description**

Sets the value of a keyframe at the specified time. Creates a new keyframe forthe named property, if one does not currently exist for the specified time,
and sets its value.

**Parameters**

| Property | Type                                                                          |
| -------- | ----------------------------------------------------------------------------- |
| `time`   | The time in seconds, a floating-point value. The beginning of the composition |

is 0.  
|Property|Type|
|---|---|
|`newValue`|A value appropriate for the type of property being set; seeProperty.propertyValueType. |

**Returns**

Nothing.

---

### Property.setValuesAtTimes()¶

`app.project.item(index).layer(index).propertySpec.setValuesAtTimes(times, newValues)`

**Description**

Sets values for a set of keyframes at specified times. Creates a new keyframefor the named property, if one does not currently exist for a specified time,and sets its value. Times and values are expressed as arrays; the arrays must
be of the same length.

**Parameters**

| Property    | Type                                                                                                      |
| ----------- | --------------------------------------------------------------------------------------------------------- |
| `times`     | An array of times, in seconds. Each time is a floating-point value. Thebeginning of the composition is 0. |
| `newValues` | A array of values appropriate for the type of property being set; seeProperty.propertyValueType.          |

**Returns**

Nothing.

---

### Property.valueAtTime()¶

`app.project.item(index).layer(index).propertySpec.valueAtTime(time, preExpression)`

**Description**

The value of the named property as evaluated at the specified time. Note thatthe type of value returned is not made explicit; it will be of a differenttype, depending on the property evaluated.

:::info Note

As After Effects 13.6, this method now waits for time-intensive expressions,like `sampleImage`, to finish evaluating before it returns the result.
:::
**Parameters**

| Property | Type                                                                          |
| -------- | ----------------------------------------------------------------------------- |
| `time`   | The time in seconds; a floating-point value. The beginning of the composition |

is 0.  
|Property|Type|
|---|---|
|`preExpression`|If the property has an expression and this is true, return the value for thespecified time without applying the expression to it. When false, return theresult of evaluating the expression for the specified time. Ignored if theproperty does not have an associated expression. |

**Returns**

A value appropriate for the type of the property (see “PropertypropertyValueType attribute” on page 138).
