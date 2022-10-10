---
title: Parameters
order: 7
category:
  - AE 插件开发
---

# Parameters

Parameters are streams of values that vary with time; the source image, sliders, angles, points, colors, paths, and any arbitrary data types the user can manipulate.

They are passed to the plug-in as an array of PF_ParamDefs, though the values in the array are only valid during certain selectors.

One of the best aspects of the After Effects effect API is the parameter interpolation and management.

How much does the shutter angle change during one-fourth of a 29.97 fps frame? Not your problem; leave it to After Effects.

Describe your plug-in’s parameters during [PF_Cmd_PARAM_SETUP](command-selectors.html) (#effect-basics-command-selectors-global-selectors), using [PF_ADD_PARAM](../effect-details/interaction-callback-functions.html) (#effect-details-interaction-callback-functions-interaction-callbacks).

You may have up to (approximately) 38 kajillion parameters, or as many as your users are willing to sift through before demanding a refund. Choose wisely.

Avoid countless problems by clearing PF_ParamDefs with AEFX_CLR_STRUCT (defined in AE_Macros.h) before registering them.

---

## Parameter Types

| **Parameter Type** | **Parameter Type**                                              | **PF_ParamDefUnion Member** | **Param Value Data Type** | **Description**                                                                                                                                      |
| ------------------ | --------------------------------------------------------------- | --------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PF\_Param\_LAYER` | [PF_LayerDef](PF_EffectWorld.html) (#effect-basics-pf-effectworld) | `ld`                        | `A\_long`                 | Image and audio layers in the composition. All effects automatically have at least 1 layer parameter, param[0], the layer to which they are applied. |

When used as effect parameters, these appear as a pull-down menu with which the user selects a layer within the current composition.
The pull-down menu contents are generated by After Effects.
NOTE: This is a reference to a layer which contains pixels and audio samples, not actual pixels and audio samples. |
| `PF\_Param\_SLIDER` | `PF\_SliderDef` | `sd` | `long` | No longer used. |
| `PF\_Param\_FIX\_SLIDER` | `PF\_FixedSliderDef` | `fd` | `PF\_Fixed` | Deprecated. For many years, we promoted fixed sliders. We now recommend `PF\_Param\_FLOAT\_SLIDERs`.
The additional precision helps in many situations, and isn’t as expensive as it once was. Plus, we’re just tired of low byte / high byte silliness.
`FIX\_SLIDERs` provide higher precision than `PF\_Param\_SLIDER`. Specify the UI decimal places independently.
Ignore the low word of the `PF\_Fixed` to get integral results. |
| `PF\_Param\_FLOAT\_SLIDER` | `PF\_FloatSliderDef` | `fs\_d` | `PF\_FPLong` | Sliders represent numerical values. `FLOAT\_SLIDERs` contain values for phase, precision, and curve tolerance for use by audio filters.
Specify a minimum and maximum value, and the user can move a slider or types a number to specify the setting.
`PF\_Param\_FLOAT\_SLIDERs` also respond to slider flags discussed in [Audio Filters](../audio/audio-considerations.html) (#audio-audio-considerations). |
| `PF\_Param\_ANGLE` | `PF\_AngleDef` | `ad` | `PF\_Fixed` | Angles in (fixed point) degrees, accurate to small fractions of a degree.
Users can specify multiple revolutions, resulting in values greater than 360. |
| `PF\_Param\_CHECKBOX` | `PF\_CheckBoxDef` | `bd` | `PF\_Boolean` | `PF\_ParamFlag\_CANNOT\_INTERP` is forced on for all checkboxes. |
| `PF\_Param\_COLOR` | `PF\_ColorDef` | `cd` | `PF\_Pixel` | RGB value (alpha is not used) that the user can choose either with the standard color picker or with an eye dropper tool.
For floating point accuracy, use [PF_ColorParamSuite1](../effect-details/parameters-floating-point-values.html) (#effect-details-parameters-floating-point-values-pf-colorparamsuite) to retrieve the values. |
| `PF\_Param\_POINT` | `PF\_PointDef` | `td` | `PF\_Fixed` | A two-dimensional point. The point provides x and y values in destination layer space.
The origin of the layer is the upper-left hand corner, with x increasing to the right, y increasing down.
Starting in CS5.5, for floating point accuracy, use [PF_PointParamSuite1](../effect-details/parameters-floating-point-values.html) (#effect-details-parameters-floating-point-values-pf-pointparamsuite) to retrieve the values.
Dusty history lesson to follow: Prior to API specification version 12.1 (After Effects 4.0),
the default value for the point was between 0 and 100 in fixed point with the radix point at bit 16 (i.e. standard fixed point).
Specifying (50,50) in fixed point yields the center of the image. The value you are returned for a point control is in absolute pixels with some number of bits of fixed point accuracy.
Thus, if you gave (50,50) as the default position and the user applied the effect to a 640 by 480 layer, the default value you would be sent would be (320, 240) in Fixed point.
Plug-ins which specify API versions before 12.1 will still get the old behavior. |
| `PF\_Param\_POPUP` | `PF\_PopupDef` | `pd` | `A\_long` | List of choices. Build a string in namesptr containing a list of (read-only) pop-up entries (“Entry1 / Entry2 / Entry3”).
After Effects copies the data and creates a pop-up menu.
These entries cannot be modified once the parameter is added.
An entry of “(-” will result in a separator being drawn between previous and subsequent entries. |
| `PF\_Param\_ARBITRARY\_DATA` | `PF\_ArbitraryDef` | `arb\_d` | `???` | Custom data type.
[Arbitrary Data Parameters](../effect-details/arbitrary-data-parameters.html) (#effect-details-arbitrary-data-parameters) contain an ID (you can use more than one custom data type in a given effect),
a default value (so After Effects knows what your data type should start as), and a handle to your actual parameter.
In AE, must specify either `PF\_PUI\_TOPIC` / `PF\_PUI\_CONTROL` or `PF\_PUI\_NO\_ECW`.
In PPro 8.0 and later, it’s okay to set none of those flags, which allows you to
see the parameter’s keyframe track on the right side of Effect Controls without creating a custom control. |
| `PF\_Param\_PATH` | `PF\_PathDef` | `path\_d` | `PF\_PathID` | Path parameters are references to masks applied to the same layer as the effect.
Path parameter data cannot be accessed directly; use [PF_PathQuerySuite1](../effect-details/working-with-paths.html) (#effect-details-working-with-paths-pf-pathquerysuite) and [PF_PathDataSuite](../effect-details/working-with-paths.html) (#effect-details-working-with-paths-pf-pathdatasuite) to manage and inquire about paths.
`PF\_PathDef.path\_id` contains the index of the mask selected by the user.
A corresponding `AEGP\_MaskRefH` can be obtained using `AEGP\_GetLayerMaskByIndex` from [AEGP_MaskSuite6](../aegps/aegp-suites.html) (#aegps-aegp-suites-aegp-masksuite). |
| `PF\_Param\_GROUP\_START`
`PF\_Param\_GROUP\_END` | (none)
(none) | | | Parameter groups (topics) organize parameters into sets.
Each group receives its own twirly and will be indented in the ECP relative to the neighboring parameters or groups.
One group can be nested within another.
Each twirly can be spun open or closed by the user, or programatically by the effect.
The effect may choose to have certain groups initialized with the twirly spun open, and others with the twirly spun closed. |
| `PF\_Param\_BUTTON` | `PF\_Button` | `button\_d` | (no value) | A simple push button. Use [Parameter Supervision](../effect-details/parameter-supervision.html) (#effect-detals-parameter-supervision) to detect when the button is pressed.
New in CS5.5 to After Effects. |
| `PF\_Param\_POINT\_3D` | `PF\_Point3D` | `point3d\_d` | `PF\_FpLong (3)` | A three-dimensional point.
New in CS5.5. Unsupported in Premiere Pro. |

---

## Slider Range Issues?

If your slider seems disabled but not grayed out, check the valid_min, slider_min, valid_max and slider_max fields. Is the param a `PF\_Param\_FIX\_SLIDER`? If so, did you convert your mins and maxs to reasonable fixed values? If you’re using the macros provided in AE_Macros.h, they’re expecting to receive ints; passing fixed point values won’t work.

---

## Point Parameter Origin

After Effects modifies any point parameter to account for origin offset, introduced by “upstream” effects that modify the output dimensions. Even if the ECP UI indicates the value of the point parameter is (0,0), the offset has already been factored in.