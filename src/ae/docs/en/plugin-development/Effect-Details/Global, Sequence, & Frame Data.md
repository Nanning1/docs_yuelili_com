---
title: Global, Sequence, & Frame Data
order: 13
category:
  - AE 插件开发
---

# Global, Sequence, & Frame Data

After Effects allows plug-ins to store data at three scopes: global, sequence, and frame. Consider carefully where you store information; choosing poorly can impact performance, or make your plug-in confusing to the user.

Use global data for information common to all instances of the effect: static variables and data, bitmaps, pointers to other DLLs or external applications. If your effect supports Multi-Frame Rendering, any static or global variables must be free of race conditions (see [What does it mean for an effect to be thread-safe?](multi-frame-rendering-in-ae.html) (#ts-effect) for more information).

Store anything specific to this instance of your plug-in (UI settings, text strings, and any custom data not stored in parameters) in Sequence Data or in the new [Compute Cache For Multi-Frame Rendering](multi-frame-rendering-in-ae.html) (#compute-cache).

Frame data is used for information specific to rendering a given frame. This has fallen into disuse, as most machines are capable of loading an entire frame into memory at a time. Of course, your IMAX-generating users will still appreciate any optimizations you can make.

---

## Persistence

After Effects saves sequence data in the project file, but not global or frame data. Pointers within sequence data which point to external data are, in all likelihood, invalid upon reopening the project, and must be re-connected. We call this process “flattening” and “unflattening” the sequence data.

:::tip

The Compute Cache does not store its contents to the project file. The data stored in the cache must be recreated during render.

---

## Validating Sequence Data

Careful sequence data validation is important for effects that do simulation across time, where frame N is dependent on frame N-1, and you use a cache of calculated data in your sequence data. If a parameter is changed, certain calculated data may no longer be valid, but it would also be wasteful to blindly recalculate everything after every change.

When asked to render frame N, assuming you have your cached data calculated up to frame N-1, call `PF\_GetCurrentState()` / `PF\_AreStatesIdentical()` from [PF_ParamUtilSuite3](parameter-supervision.html) (#effect-detals-parameter-supervision-pf-paramutilsuite) to see if the cache of calculated data is still valid given the current parameter settings.

The state of all parameters (except those with [PF_ParamFlag_EXCLUDE_FROM_HAVE_INPUTS_CHANGED](../effect-basics/PF_ParamDef.html) (#effect-basics-pf-paramdef-parameter-flags) set), including layer parameters (including [param[0]](../effect-basics/PF_ParamDef.html) (#effect-basics-pf-paramdef-param-zero)) are checked over the passed time span.

This is done efficiently, as the change tracking is done with timestamps.

If the inputs have not changed, you can safely use your cache, AND the internal caching system will assume that you have a temporal dependency on the passed range. So if something changes upstream, the host’s caches will be properly invalidated automatically.

To test that it is working, apply your effect with one parameter keyframed on every frame. RAM Preview to fill the cache, then change one of the keyframes. The related frame and all dependent frames (e.g. later frames, in the case of a simulation) should lose their cache marks and require re-rendering. Similarly, upstream changes to sources of layer parameters should cause time-selective invalidation of the cache.

---

## Flattened And Unflattened Sequence Data

If your sequence data references external memory (in pointers or handles), you must flatten and unflatten your data for disk-safe storage. This is analogous to creating your own miniature file format.

Upon receiving [PF_Cmd_SEQUENCE_FLATTEN](../effect-basics/command-selectors.html) (#effect-basics-command-selectors-sequence-selectors), put data referenced by pointers into one contiguous block from which you can later recover the old structure.

If your sequence data contains a pointer to a long, allocate 4 bytes in which to store the flattened data. You must handle platform-specific byte ordering.

Remember, your users (the ones who bought two copies of your plug-in, anyway) may want the same project to work on macOS and Windows.

After Effects sends [PF_Cmd_SEQUENCE_RESETUP](../effect-basics/command-selectors.html) (#effect-basics-command-selectors-sequence-selectors) when the data is reloaded, for either flat or unflat data.

Use a flag at a common offset within both structures to indicate the data’s state.

```cpp
typedef struct {
 A\_char\* messageZ;
 PF\_FpLong big\_numF;
 void\* temp\_storage;
} non\_flat\_data;

typedef struct {
 char message[256];
 PF\_FpLong big\_numF;
 A\_Boolean big\_endianB;
} flat\_data;

```

---

## Resizing Sequence Data

During [PF_Cmd_SEQUENCE_SETUP](../effect-basics/command-selectors.html) (#effect-basics-command-selectors-sequence-selectors), allocate a handle for data specific to this instance of your effect.

You may modify the contents, but not the size, of the sequence data during any selector.

You may resize the sequence data handle only during the following selectors:

> - `PF\_Cmd\_AUDIO\_SETUP`
> - `PF\_Cmd\_AUDIO\_SETDOWN`
> - `PF\_Cmd\_FRAME\_SETUP`
> - `PF\_Cmd\_FRAME\_SETDOWN`
> - `PF\_Cmd\_AUDIO\_RENDER`
> - `PF\_Cmd\_RENDER`
> - `PF\_Cmd\_SEQUENCE\_SETUP`
> - `PF\_Cmd\_SEQUENCE\_SETDOWN`
> - `PF\_Cmd\_SEQUENCE\_FLATTEN`
> - `PF\_Cmd\_SEQUENCE\_RESETUP`
> - `PF\_Cmd\_DO\_DIALOG`

---

## Accessing sequence_data at Render Time with Multi-Frame Rendering

When enabling Multi-Frame Rendering on an effect, the `sequence\_data` object will be read-only/const during Render and accessible on each render thread via the `PF\_EffectSequenceDataSuite1` suite.

### PF_EffectSequenceDataSuite1

| **Function**               | **Purpose**                                                                                                                    |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `PF\_GetConstSequenceData` | Retrieves the read-only const sequence_data object for a rendering thread when Multi-Frame Rendering is enabled for an effect. |

```cpp
PF\_Err(\*PF\_GetConstSequenceData)(
 PF\_ProgPtr effect\_ref,
 PF\_ConstHandle \*sequence\_data);

```

|

```cpp
static PF_Err Render(
   PF_InData   *in_dataP,
   PF_OutData  *out_dataP,
   PF_ParamDef *params[],
   PF_LayerDef *output )
{
    PF_ConstHandle seq_handle;

    AEFX_SuiteScoper<PF_EffectSequenceDataSuite1> seqdata_suite =
      AEFX_SuiteScoper<PF_EffectSequenceDataSuite1>(
        in_dataP,
        kPFEffectSequenceDataSuite,
        kPFEffectSequenceDataSuiteVersion1,
        out_dataP);

    PF_ConstHandle const_seq;
    seqdata_suite->PF_GetConstSequenceData(in_data->effect_ref, &const_seq);
 ​
    // cast const_seq to the type used when storing to sequence_data

    // rest of render function code...
}

```