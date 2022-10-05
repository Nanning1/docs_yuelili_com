import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as s,a as e,b as r,d as a,w as t,e as d,r as n}from"./app.75ca2a8e.js";const l={},c=e("h2",{id:"description",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#description","aria-hidden":"true"},"#"),r(" Description")],-1),h=e("h1",{id:"maskpropertygroup-object\xB6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#maskpropertygroup-object\xB6","aria-hidden":"true"},"#"),r(" MaskPropertyGroup object\xB6")],-1),u=e("p",null,[e("code",null,"app.project.item(index).layer(index).mask")],-1),k=e("p",null,[e("strong",null,"Description")],-1),m=e("p",null,"The MaskPropertyGroup object encapsulates mask attributes in a layer.",-1),f=d('<hr><h2 id="attributes\xB6" tabindex="-1"><a class="header-anchor" href="#attributes\xB6" aria-hidden="true">#</a> Attributes\xB6</h2><h3 id="maskpropertygroup-color\xB6" tabindex="-1"><a class="header-anchor" href="#maskpropertygroup-color\xB6" aria-hidden="true">#</a> MaskPropertyGroup.color\xB6</h3><p><code>app.project.item(index).layer(index).mask(index).color</code></p><p><strong>Description</strong></p><p>The color used to draw the mask outline as it appears in the user interface(Composition panel, Layer panel, and Timeline panel).</p><p><strong>Type</strong></p><p>Array of three floating-point values, [R, G, B], in the range <code>[0.0..1.0]</code>; read/write.</p><hr><h3 id="maskpropertygroup-inverted\xB6" tabindex="-1"><a class="header-anchor" href="#maskpropertygroup-inverted\xB6" aria-hidden="true">#</a> MaskPropertyGroup.inverted\xB6</h3><p><code>app.project.item(index).layer(index).mask(index).inverted</code></p><p><strong>Description</strong></p><p>When true, the mask is inverted; otherwise false.</p><p><strong>Type</strong></p><p>Boolean; read/write.</p><hr><h3 id="maskpropertygroup-locked\xB6" tabindex="-1"><a class="header-anchor" href="#maskpropertygroup-locked\xB6" aria-hidden="true">#</a> MaskPropertyGroup.locked\xB6</h3><p><code>app.project.item(index).layer(index).mask(index).locked</code></p><p><strong>Description</strong></p><p>When true, the mask is locked and cannot be edited in the user interface; otherwise, false.</p><p><strong>Type</strong></p><p>Boolean; read/write.</p><hr><h3 id="maskpropertygroup-maskfeatherfalloff\xB6" tabindex="-1"><a class="header-anchor" href="#maskpropertygroup-maskfeatherfalloff\xB6" aria-hidden="true">#</a> MaskPropertyGroup.maskFeatherFalloff\xB6</h3><p><code>app.project.item(index).layer(index).mask(index).maskFeatherFalloff</code></p><p><strong>Description</strong></p><p>The feather falloff mode for the mask. Equivalent to the Layer &gt; Mask &gt; Feather Falloff setting.</p><p><strong>Type</strong></p><p>A <code>MaskFeatherFalloff</code> enumerated value; read/write. One of:</p><ul><li><p><code>MaskFeatherFalloff.FFO_LINEAR</code></p></li><li><p><code>MaskFeatherFalloff.FFO_SMOOTH</code></p></li></ul><hr><h3 id="maskpropertygroup-maskmode\xB6" tabindex="-1"><a class="header-anchor" href="#maskpropertygroup-maskmode\xB6" aria-hidden="true">#</a> MaskPropertyGroup.maskMode\xB6</h3><p><code>app.project.item(index).layer(index).mask(index).maskMode</code></p><p><strong>Description</strong></p><p>The masking mode for this mask.</p><p><strong>Type</strong></p><p>A <code>MaskMode</code> enumerated value; read/write. One of:</p><ul><li><p><code>MaskMode.NONE</code></p></li><li><p><code>MaskMode.ADD</code></p></li><li><p><code>MaskMode.SUBTRACT</code></p></li><li><p><code>MaskMode.INTERSECT</code></p></li><li><p><code>MaskMode.LIGHTEN</code></p></li><li><p><code>MaskMode.DARKEN</code></p></li><li><p><code>MaskMode.DIFFERENCE</code></p></li></ul><hr><h3 id="maskpropertygroup-maskmotionblur\xB6" tabindex="-1"><a class="header-anchor" href="#maskpropertygroup-maskmotionblur\xB6" aria-hidden="true">#</a> MaskPropertyGroup.maskMotionBlur\xB6</h3><p><code>app.project.item(index).layer(index).mask(index).maskMotionBlur</code></p><p><strong>Description</strong></p><p>How motion blur is applied to this mask.</p><p><strong>Type</strong></p><p>A <code>MakMotionBlur</code> enumerated value; read/write. One of:</p><ul><li><p><code>MaskMotionBlur.SAME_AS_LAYER</code></p></li><li><p><code>MaskMotionBlur.ON</code></p></li><li><p><code>MaskMotionBlur.OFF</code></p></li></ul><hr><h3 id="maskpropertygroup-rotobezier\xB6" tabindex="-1"><a class="header-anchor" href="#maskpropertygroup-rotobezier\xB6" aria-hidden="true">#</a> MaskPropertyGroup.rotoBezier\xB6</h3><p><code>app.project.item(index).layer(index).mask(index).rotoBezier</code></p><p><strong>Description</strong></p><p>When true, the mask is a RotoBezier shape; otherwise, false.</p><p><strong>Type</strong></p><p>Boolean; read/write.</p>',53);function y(g,M){const o=n("RouterLink");return i(),s("div",null,[c,h,u,k,m,e("blockquote",null,[e("p",null,[r("MaskPropertyGroup is a subclass of "),a(o,{to:"/en/ae/scripting/Property/propertygroup.html#propertygroup"},{default:t(()=>[r("PropertyGroup object")]),_:1}),r(". All methods and attributes of "),a(o,{to:"/en/ae/scripting/Property/propertybase.html#propertybase"},{default:t(()=>[r("PropertyBase object")]),_:1}),r(" and PropertyGroup, in addition to those listed below, are available when working with MaskPropertyGroup.")])]),f])}const _=p(l,[["render",y],["__file","MaskPropertyGroup.html.vue"]]);export{_ as default};