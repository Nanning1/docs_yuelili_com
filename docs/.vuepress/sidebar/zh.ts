import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    { text: "AE文档", icon: "creative", prefix: "ae/", link: "ae/", children: "structure" },
    { text: "Blender文档", icon: "creative", prefix: "blender/", link: "blender/", children: "structure" },
  ],
  "/zh/ae/": [
    { text: "表达式", icon: "creative", prefix: "expression/", link: "expression/" },
    { text: "文字动画", icon: "creative", prefix: "text-animation/", link: "text-animation/" },
    { text: "形状图层", icon: "creative", prefix: "shape/", link: "shape/" },
    { text: "内置效果", icon: "creative", prefix: "effects/", link: "expression/" },
  ],
  "/zh/ae/expression/": [
    { text: "Intro", icon: "creative", prefix: "Intro/", collapsable: true, children: "structure" },
    { text: "General", icon: "creative", prefix: "General/", collapsable: true, children: "structure" },
    { text: "Objects", icon: "creative", prefix: "Objects/", collapsable: true, children: "structure" },
    { text: "Layers", icon: "creative", prefix: "Layers/", collapsable: true, children: "structure" },
    { text: "Text", icon: "creative", prefix: "Text/", collapsable: true, children: "structure" },
  ],
  "/zh/ae/effects/": [
    { text: "Overview", icon: "creative", prefix: "Overview/", collapsable: true, children: "structure" },
    { text: "3D-Channel", icon: "creative", prefix: "3D-Channel/", collapsable: true, children: "structure" },
    { text: "Audio", icon: "creative", prefix: "Audio/", collapsable: true, children: "structure" },
    { text: "Blur-Sharpen", icon: "creative", prefix: "Blur-Sharpen/", collapsable: true, children: "structure" },
    { text: "Channel", icon: "creative", prefix: "Channel/", collapsable: true, children: "structure" },
    { text: "Color-Correction", icon: "creative", prefix: "Color-Correction/", collapsable: true, children: "structure" },
    { text: "Distort", icon: "creative", prefix: "Distort/", collapsable: true, children: "structure" },
    { text: "Expression-Controls", icon: "creative", prefix: "Expression-Controls/", collapsable: true, children: "structure" },
    { text: "Generate", icon: "creative", prefix: "Generate/", collapsable: true, children: "structure" },
    { text: "Immersive-Video", icon: "creative", prefix: "Immersive-Video/", collapsable: true, children: "structure" },
    { text: "Keying", icon: "creative", prefix: "Keying/", collapsable: true, children: "structure" },
    { text: "Matte", icon: "creative", prefix: "Matte/", collapsable: true, children: "structure" },
    { text: "Noise-Grain", icon: "creative", prefix: "Noise-Grain/", collapsable: true, children: "structure" },
    { text: "Obsolete", icon: "creative", prefix: "Obsolete/", collapsable: true, children: "structure" },
    { text: "Perspective", icon: "creative", prefix: "Perspective/", collapsable: true, children: "structure" },
    { text: "Simulation", icon: "creative", prefix: "Simulation/", collapsable: true, children: "structure" },
    { text: "Stylize", icon: "creative", prefix: "Stylize/", collapsable: true, children: "structure" },
    { text: "Text", icon: "creative", prefix: "Text/", collapsable: true, children: "structure" },
    { text: "Time", icon: "creative", prefix: "Time/", collapsable: true, children: "structure" },
    { text: "Transition", icon: "creative", prefix: "Transition/", collapsable: true, children: "structure" },
    { text: "Utility", icon: "creative", prefix: "Utility/", collapsable: true, children: "structure" },
  ],
  "/zh/ae/shape/": "structure",
  "/zh/ae/text-animation/": "structure",
  "/zh/ae/scripting/": [
    { text: "学习指南", icon: "creative", prefix: "Guide/", collapsable: true, children: "structure" },
    { text: "介绍", icon: "creative", prefix: "Intro/", collapsable: true, children: "structure" },
    { text: "常规", icon: "creative", prefix: "General/", collapsable: true, children: "structure" },
    { text: "项目 Item", icon: "creative", prefix: "Item/", collapsable: true, children: "structure" },
    { text: "图层 Layer", icon: "creative", prefix: "Layer/", collapsable: true, children: "structure" },
    { text: "属性 Property", icon: "creative", prefix: "Property/", collapsable: true, children: "structure" },
    { text: "渲染队列 Render-Queue", icon: "creative", prefix: "Render-Queue/", collapsable: true, children: "structure" },
    { text: "图层源 Source", icon: "creative", prefix: "Source/", collapsable: true, children: "structure" },
    { text: "其他 Other", icon: "creative", prefix: "Other/", collapsable: true, children: "structure" },
    { text: "匹配名称 Match-Name", icon: "creative", prefix: "Match-Name/", collapsable: true, children: "structure" },
    { text: "Javascript-工具", icon: "creative", prefix: "Javascript-Tools/", collapsable: true, children: "structure" },
    { text: "第三方工具", icon: "creative", prefix: "Third-Part/", collapsable: true, children: "structure" },
  ],
  "/zh/pr/scripting/": [
    { text: "介绍", icon: "creative", prefix: "Intro/", collapsable: true, children: "structure" },
    { text: "常规", icon: "creative", prefix: "General/", collapsable: true, children: "structure" },
    { text: "项目 Item", icon: "creative", prefix: "Item/", collapsable: true, children: "structure" },
    { text: "序列 Sequence", icon: "creative", prefix: "Sequence/", collapsable: true, children: "structure" },
    { text: "其他 Other", icon: "creative", prefix: "Other/", collapsable: true, children: "structure" },
    { text: "集合 Collection", icon: "creative", prefix: "Collection/", collapsable: true, children: "structure" },
  ],
  "/zh/ae/plugins/stardust/": [
    { text: "介绍", icon: "creative", prefix: "Overview/", collapsable: true, children: "structure" },
    { text: "交互式界面", icon: "creative", prefix: "User-Interface/", collapsable: true, children: "structure" },
    { text: "发射器", icon: "creative", prefix: "Emitters/", collapsable: true, children: "structure" },
    { text: "粒子", icon: "creative", prefix: "Particle/", collapsable: true, children: "structure" },
    { text: "场", icon: "creative", prefix: "Space-Deformers/", collapsable: true, children: "structure" },
    { text: "模型与材质", icon: "creative", prefix: "Model-And-Materials/", collapsable: true, children: "structure" },
    { text: "体积", icon: "creative", prefix: "Volumes/", collapsable: true, children: "structure" },
    { text: "变形与变换", icon: "creative", prefix: "Transform/", collapsable: true, children: "structure" },
  ],
  "/zh/blender/development/": [
    { text: "概述", icon: "creative", prefix: "Overview/", collapsable: true, children: "structure" },
    { text: "介绍", icon: "creative", prefix: "Intro/", collapsable: true, children: "structure" },
    { text: "Bl-App", icon: "creative", prefix: "Bl-App/", collapsable: true, children: "structure" },
    { text: "Bpy-Ops", icon: "creative", prefix: "Bpy-Ops/", collapsable: true, children: "structure" },
    { text: "Bpy-Types-Bpy_Struct", icon: "creative", prefix: "Bpy-Types-Bpy_Struct/", collapsable: true, children: "structure" },
    { text: "Bpy-Types-Id", icon: "creative", prefix: "Bpy-Types-Id/", collapsable: true, children: "structure" },
    { text: "Bpy-Types-Nodeinternal", icon: "creative", prefix: "Bpy-Types-Nodeinternal/", collapsable: true, children: "structure" },
  ],
  "/zh/houdini/vex/": [
    { text: "Vex", icon: "creative", prefix: "Vex/", collapsable: true, children: "structure" },
    { text: "Arrays", icon: "creative", prefix: "Arrays/", collapsable: true, children: "structure" },
    { text: "Attributes-And-Intrinsics", icon: "creative", prefix: "Attributes-And-Intrinsics/", collapsable: true, children: "structure" },
    { text: "Bsdfs", icon: "creative", prefix: "Bsdfs/", collapsable: true, children: "structure" },
    { text: "Chop", icon: "creative", prefix: "Chop/", collapsable: true, children: "structure" },
    { text: "Color", icon: "creative", prefix: "Color/", collapsable: true, children: "structure" },
    { text: "Conversion", icon: "creative", prefix: "Conversion/", collapsable: true, children: "structure" },
    { text: "Crowds", icon: "creative", prefix: "Crowds/", collapsable: true, children: "structure" },
    { text: "Dict", icon: "creative", prefix: "Dict/", collapsable: true, children: "structure" },
    { text: "Displace", icon: "creative", prefix: "Displace/", collapsable: true, children: "structure" },
    { text: "File-I-O", icon: "creative", prefix: "File-I-O/", collapsable: true, children: "structure" },
    { text: "Filter", icon: "creative", prefix: "Filter/", collapsable: true, children: "structure" },
    { text: "Fuzzy-Logic", icon: "creative", prefix: "Fuzzy-Logic/", collapsable: true, children: "structure" },
    { text: "Geometry", icon: "creative", prefix: "Geometry/", collapsable: true, children: "structure" },
    { text: "Groups", icon: "creative", prefix: "Groups/", collapsable: true, children: "structure" },
    { text: "Half-Edges", icon: "creative", prefix: "Half-Edges/", collapsable: true, children: "structure" },
    { text: "Image-Processing", icon: "creative", prefix: "Image-Processing/", collapsable: true, children: "structure" },
    { text: "Interpolation", icon: "creative", prefix: "Interpolation/", collapsable: true, children: "structure" },
    { text: "Light", icon: "creative", prefix: "Light/", collapsable: true, children: "structure" },
    { text: "Math", icon: "creative", prefix: "Math/", collapsable: true, children: "structure" },
    { text: "Measure", icon: "creative", prefix: "Measure/", collapsable: true, children: "structure" },
    { text: "Metaball", icon: "creative", prefix: "Metaball/", collapsable: true, children: "structure" },
    { text: "Nodes", icon: "creative", prefix: "Nodes/", collapsable: true, children: "structure" },
    { text: "Noise-And-Randomness", icon: "creative", prefix: "Noise-And-Randomness/", collapsable: true, children: "structure" },
    { text: "Normals", icon: "creative", prefix: "Normals/", collapsable: true, children: "structure" },
    { text: "Open-Color-Io", icon: "creative", prefix: "Open-Color-Io/", collapsable: true, children: "structure" },
    { text: "Particles", icon: "creative", prefix: "Particles/", collapsable: true, children: "structure" },
    { text: "Point-Clouds-And-3D-Images", icon: "creative", prefix: "Point-Clouds-And-3D-Images/", collapsable: true, children: "structure" },
    { text: "Sampling", icon: "creative", prefix: "Sampling/", collapsable: true, children: "structure" },
    { text: "Sensor-Input", icon: "creative", prefix: "Sensor-Input/", collapsable: true, children: "structure" },
    { text: "Shading-And-Rendering", icon: "creative", prefix: "Shading-And-Rendering/", collapsable: true, children: "structure" },
    { text: "Strings", icon: "creative", prefix: "Strings/", collapsable: true, children: "structure" },
    { text: "Subdivision-Surfaces", icon: "creative", prefix: "Subdivision-Surfaces/", collapsable: true, children: "structure" },
    { text: "Tetrahedrons", icon: "creative", prefix: "Tetrahedrons/", collapsable: true, children: "structure" },
    { text: "Texturing", icon: "creative", prefix: "Texturing/", collapsable: true, children: "structure" },
    { text: "Transforms-And-Space", icon: "creative", prefix: "Transforms-And-Space/", collapsable: true, children: "structure" },
    { text: "Usd", icon: "creative", prefix: "Usd/", collapsable: true, children: "structure" },
    { text: "Utility", icon: "creative", prefix: "Utility/", collapsable: true, children: "structure" },
    { text: "Volume", icon: "creative", prefix: "Volume/", collapsable: true, children: "structure" },
  ],
  "/zh/Speed Tree/": "structure",
});
