import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as t,e as r}from"./app.75ca2a8e.js";const n={},s=r(`<p><strong>Description</strong></p><p>When you add masks, effects, paint, or text to a layer, After Effects adds newproperties to the Timeline panel. There are too many of these properties tolist here, so use the pick whip to learn the syntax for referring to them in your expressions.</p><hr><h2 id="layer-anchorpoint" tabindex="-1"><a class="header-anchor" href="#layer-anchorpoint" aria-hidden="true">#</a> Layer.anchorPoint</h2><p><strong>Description</strong></p><p>Returns the anchor point value of the layer in the coordinate system of the layer (layer space).</p><p><strong>Type</strong></p><p>Array of Numbers (2- or 3-dimensional)</p><hr><h2 id="layer-position" tabindex="-1"><a class="header-anchor" href="#layer-position" aria-hidden="true">#</a> Layer.position</h2><p><strong>Description</strong></p><p>Returns the position value of the layer, in world space if the layer has noparent. If the layer has a parent, it returns the position value of the layerin the coordinate system of the parent layer (in the layer space of the parent layer).</p><p><strong>Type</strong></p><p>Array of Numbers (2- or 3-dimensional)</p><hr><h2 id="layer-scale" tabindex="-1"><a class="header-anchor" href="#layer-scale" aria-hidden="true">#</a> Layer.scale</h2><p><strong>Description</strong></p><p>Returns the scale value of the layer, expressed as a percentage.</p><p><strong>Type</strong></p><p>Array of Numbers (2- or 3-dimensional)</p><hr><h2 id="layer-rotation" tabindex="-1"><a class="header-anchor" href="#layer-rotation" aria-hidden="true">#</a> Layer.rotation</h2><p><strong>Description</strong></p><p>Returns the rotation value of the layer in degrees. For a 3D layer, it returnsthe z rotation value in degrees.</p><p><strong>Type</strong></p><p>Number</p><hr><h2 id="layer-opacity" tabindex="-1"><a class="header-anchor" href="#layer-opacity" aria-hidden="true">#</a> Layer.opacity</h2><p><strong>Description</strong></p><p>Returns the opacity value for the layer, expressed as a percentage.</p><p><strong>Type</strong></p><p>Number</p><hr><h2 id="layer-audiolevels" tabindex="-1"><a class="header-anchor" href="#layer-audiolevels" aria-hidden="true">#</a> Layer.audioLevels</h2><p><strong>Description</strong></p><p>Returns the value of the Audio Levels property of the layer, in decibels. Thisvalue is a 2D value; the first value represents the left audio channel, andthe second value represents the right. The value is not the amplitude of theaudio track of the source material. Instead, it is the value of the AudioLevels property, which may be affected by keyframes.</p><p><strong>Type</strong></p><p>Array of Numbers (2-dimensional)</p><hr><h2 id="layer-timeremap" tabindex="-1"><a class="header-anchor" href="#layer-timeremap" aria-hidden="true">#</a> Layer.timeRemap</h2><p><strong>Description</strong></p><p>Returns the value of the Time Remap property, in seconds, if Time Remap is enabled.</p><p><strong>Type</strong></p><p>Number</p><hr><h2 id="layer-marker-key-index" tabindex="-1"><a class="header-anchor" href="#layer-marker-key-index" aria-hidden="true">#</a> Layer.marker.key(<code>index</code>)</h2><p><strong>Description</strong></p><p>Returns the MarkerKey object of the layer marker with the specified index.</p><p><strong>Parameters</strong></p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td><code>index</code></td><td>Number</td></tr></tbody></table><p><strong>Type</strong></p><p>MarkerKey</p><hr><h2 id="layer-marker-key-name" tabindex="-1"><a class="header-anchor" href="#layer-marker-key-name" aria-hidden="true">#</a> Layer.marker.key(<code>name</code>)</h2><p><strong>Description</strong></p><p>Returns the MarkerKey object of the layer marker with the specified name. Thename value is the name of the marker, as typed in the comment field in themarker dialog box, for example, <code>marker.key(&quot;ch1&quot;)</code>. If more than one markeron the layer has the same name, this method returns the marker that occursfirst in time (in layer time). The value for a marker key is a <code>String</code>, not a <code>Number</code>.</p><p>This expression on a property ramps the value of the property from <code>0</code> to<code>100</code> between two markers identified by name:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>m1 <span class="token operator">=</span> marker<span class="token punctuation">.</span><span class="token function">key</span><span class="token punctuation">(</span><span class="token string">&quot;Start&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>time<span class="token punctuation">;</span>
m2 <span class="token operator">=</span> marker<span class="token punctuation">.</span><span class="token function">key</span><span class="token punctuation">(</span><span class="token string">&quot;End&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>time<span class="token punctuation">;</span>
<span class="token function">linear</span><span class="token punctuation">(</span>time<span class="token punctuation">,</span> m1<span class="token punctuation">,</span> m2<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Parameters</strong></p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td><code>name</code></td><td>String</td></tr></tbody></table><p><strong>Type</strong></p><p>MarkerKey</p><hr><h2 id="layer-marker-nearestkey-t" tabindex="-1"><a class="header-anchor" href="#layer-marker-nearestkey-t" aria-hidden="true">#</a> Layer.marker.nearestKey(<code>t</code>)</h2><p><strong>Description</strong></p><p>Returns the layer marker that is nearest in time to t.</p><p>For example, this expression returns the time of the marker on the layernearest to the time of <code>1</code> second:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>marker<span class="token punctuation">.</span><span class="token function">nearestKey</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>time<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This expression returns the time of the marker on the layer nearest to the current time:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>marker<span class="token punctuation">.</span><span class="token function">nearestKey</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">.</span>time<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Parameters</strong></p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td><code>t</code></td><td>Number</td></tr></tbody></table><p><strong>Type</strong></p><p>MarkerKey</p><hr><h2 id="layer-marker-numkeys" tabindex="-1"><a class="header-anchor" href="#layer-marker-numkeys" aria-hidden="true">#</a> Layer.marker.numKeys</h2><p><strong>Description</strong></p><p>Returns the total number of markers on the layer.</p><p><strong>Type</strong></p><p>Number</p><hr><h2 id="layer-name" tabindex="-1"><a class="header-anchor" href="#layer-name" aria-hidden="true">#</a> Layer.name</h2><p><strong>Description</strong></p><p>Returns the name of the layer.</p><p><strong>Type</strong></p><p>String</p>`,86),o=[s];function p(i,c){return a(),t("div",null,o)}const l=e(n,[["render",p],["__file","Properties.html.vue"]]);export{l as default};