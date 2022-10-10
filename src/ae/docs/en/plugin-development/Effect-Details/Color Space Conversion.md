---
title: Color Space Conversion
order: 19
category:
  - AE 插件开发
---

# Color Space Conversion

Different pixel formats are useful for different operations. After Effects exposes its internal functions through PF_ColorCallbacksSuite. Here are the supported formats.

---

## Pixel Types For Different Color Spaces

| **Pixel Type** | **Data Structure** |
| -------------- | ------------------ |
| 8 bpc ARGB     |

```cpp
typedef struct {
 A\_u\_char alpha, red, green, blue;
} PF\_Pixel8;

```

|
| 16 bpc ARGB |

```cpp
typedef struct {
 A\_u\_short alpha, red, green, blue;
} PF\_Pixel16;

```

|
| 32 bpc ARGB |

```cpp
typedef struct {
 PF\_FpShort alpha, red, green, blue;
} PF\_PixelFloat, PF\_Pixel32;

```

|
| HLS (Hue, Lightness, Saturation) |

```cpp
typedef PF\_Fixed PF\_HLS\_PIXEL[3]

```

|
| YIQ (luminance, in-phase chrominance, quadrature chrominance) |

```cpp
typedef PF\_Fixed PF\_YIQ\_PIXEL[3]

```

|

---

Plug-ins can draw on image processing algorithms written for nearly any color space by using the following callback functions.

## Color Space Conversion Callbacks

| **Function**                                                                                                  | **Purpose**                                                                                                              | **Replaces**       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| RGBtoHLS                                                                                                      | Given an RGB pixel, returns an HLS (hue, lightness, saturation) pixel. HLS values are scaled from 0 to 1 in fixed point. | `PF\_RGB\_TO\_HLS` |
| HLStoRGB                                                                                                      | Given an HLS pixel, returns an RGB pixel.                                                                                | `PF\_HLS\_TO\_RGB` |
| RGBtoYIQ                                                                                                      | Given an RGB pixel, returns a YIQ (luminance, inphase chrominance, quadrature chrominance) pixel.                        |
| Y is 0 to 1 in fixed point, I is -0.5959 to 0.5959 in fixed point, and Q is -0.5227 to 0.5227 in fixed point. | `PF\_RGB\_TO\_YIQ`                                                                                                       |
| YIQtoRGB                                                                                                      | Given a YIQ pixel, returns an RGB pixel.                                                                                 | `PF\_YIQ\_TO\_RGB` |
| Luminance                                                                                                     | Given an RGB pixel, returns 100 times its luminance value (0 to 25500).                                                  | `PF\_LUMINANCE`    |
| Hue                                                                                                           | Given an RGB pixel, eturns its hue angle mapped from 0 to 255, where 0 is 0 degrees and 255 is 360 degrees.              | `PF\_HUE`          |
| Lightness                                                                                                     | Given an RGB pixel, returns its lightness value (0 to 255).                                                              | `PF\_LIGHTNESS`    |
| Saturation                                                                                                    | Given an RGB pixel, returns its saturation value (0 to 255).                                                             | `PF\_SATURATION`   |