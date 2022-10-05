import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as r,e as t}from"./app.75ca2a8e.js";const i={},n=t(`<p>Camera objects have the same attributes and methods as Layer objects, except for:</p><ul><li><p><code>source</code></p></li><li><p><code>effect</code></p></li><li><p><code>mask</code></p></li><li><p><code>width</code></p></li><li><p><code>height</code></p></li><li><p><code>anchorPoint</code></p></li><li><p><code>scale</code></p></li><li><p><code>opacity</code></p></li><li><p><code>audioLevels</code></p></li><li><p><code>timeRemap</code></p></li><li><p>all the material properties</p></li></ul><hr><h2 id="camera-pointofinterest" tabindex="-1"><a class="header-anchor" href="#camera-pointofinterest" aria-hidden="true">#</a> Camera.pointOfInterest</h2><p><strong>Description</strong></p><p>Returns the point of interest values of a camera in world space.</p><p><strong>Type</strong></p><p>Array (3 dimensional)</p><hr><h2 id="camera-zoom" tabindex="-1"><a class="header-anchor" href="#camera-zoom" aria-hidden="true">#</a> Camera.zoom</h2><p><strong>Description</strong></p><p>Returns the zoom values of a camera in pixels.</p><p>Here\u2019s an expression for the Scale property of a layer that maintains therelative size of the layer in frame while changing the z position (depth) of alayer or the Zoom value of a camera:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>cam <span class="token operator">=</span> thisComp<span class="token punctuation">.</span>activeCamera<span class="token punctuation">;</span>
distance <span class="token operator">=</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token function">sub</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> cam<span class="token punctuation">.</span>position<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span>scale <span class="token operator">*</span> distance<span class="token punctuation">)</span> <span class="token operator">/</span> cam<span class="token punctuation">.</span>zoom<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Type</strong></p><p>Number</p><hr><h2 id="camera-depthoffield" tabindex="-1"><a class="header-anchor" href="#camera-depthoffield" aria-hidden="true">#</a> Camera.depthOfField</h2><p><strong>Description</strong></p><p>Returns <code>1</code> if the Depth Of Field property of a camera is on, or returns <code>0</code>if the Depth Of Field property is off.</p><p><strong>Type</strong></p><p>Boolean Number</p><hr><h2 id="camera-focusdistance" tabindex="-1"><a class="header-anchor" href="#camera-focusdistance" aria-hidden="true">#</a> Camera.focusDistance</h2><p><strong>Description</strong></p><p>Returns the focus distance value of a camera, in pixels.</p><p><strong>Type</strong></p><p>Number</p><hr><h2 id="camera-aperture" tabindex="-1"><a class="header-anchor" href="#camera-aperture" aria-hidden="true">#</a> Camera.aperture</h2><p><strong>Description</strong></p><p>Returns the aperture value of a camera, in pixels.</p><p><strong>Type</strong></p><p>Number</p><hr><h2 id="camera-blurlevel" tabindex="-1"><a class="header-anchor" href="#camera-blurlevel" aria-hidden="true">#</a> Camera.blurLevel</h2><p><strong>Description</strong></p><p>Returns the blur level value of a camera as a percentage.</p><p><strong>Type</strong></p><p>Number</p><hr><h2 id="camera-irisshape" tabindex="-1"><a class="header-anchor" href="#camera-irisshape" aria-hidden="true">#</a> Camera.irisShape</h2><p><strong>Description</strong></p><p>Returns the iris shape value from 1-10, corresponding to the selected dropdown value.</p><p><strong>Type</strong></p><p>Number</p><hr><h2 id="camera-irisrotation" tabindex="-1"><a class="header-anchor" href="#camera-irisrotation" aria-hidden="true">#</a> Camera.irisRotation</h2><p><strong>Description</strong></p><p>Returns the iris rotation value, in degrees.</p><p><strong>Type</strong></p><p>Number</p><hr><h2 id="camera-irisroundness" tabindex="-1"><a class="header-anchor" href="#camera-irisroundness" aria-hidden="true">#</a> Camera.irisRoundness</h2><p><strong>Description</strong></p><p>Returns the camera iris roundness value as a percentage.</p><p><strong>Type</strong></p><p>Number</p><hr><h2 id="camera-irisaspectratio" tabindex="-1"><a class="header-anchor" href="#camera-irisaspectratio" aria-hidden="true">#</a> Camera.irisAspectRatio</h2><p><strong>Description</strong></p><p>Returns the camera iris aspect ratio, from 1 to 100.</p><p><strong>Type</strong></p><p>Number</p><hr><h2 id="camera-irisdiffractionfringe" tabindex="-1"><a class="header-anchor" href="#camera-irisdiffractionfringe" aria-hidden="true">#</a> Camera.irisDiffractionFringe</h2><p><strong>Description</strong></p><p>Returns the camera iris diffraction fringe, from 1 to 100.</p><p><strong>Type</strong></p><p>Number</p><hr><h2 id="camera-highlightgain" tabindex="-1"><a class="header-anchor" href="#camera-highlightgain" aria-hidden="true">#</a> Camera.highlightGain</h2><p><strong>Description</strong></p><p>Returns the camera highlight gain, from 1 to 100.</p><p><strong>Type</strong></p><p>Number</p><hr><h2 id="camera-highlightthreshold" tabindex="-1"><a class="header-anchor" href="#camera-highlightthreshold" aria-hidden="true">#</a> Camera.highlightThreshold</h2><p><strong>Description</strong></p><p>Returns the camera highlight threshhold.</p><ul><li><p>In an 8-bit comp, this value ranges from 0 to 100</p></li><li><p>In a 16-bit comp, this value ranges from 0 to 32768</p></li><li><p>In a 32-bit comp, this value ranges from 0 to 1.0</p></li></ul><p><strong>Type</strong></p><p>Number</p><hr><h2 id="camera-highlightsaturation" tabindex="-1"><a class="header-anchor" href="#camera-highlightsaturation" aria-hidden="true">#</a> Camera.highlightSaturation</h2><p><strong>Description</strong></p><p>Returns the camera highlight saturation, from 1 to 100.</p><p><strong>Type</strong></p><p>Number</p><hr><h2 id="camera-active" tabindex="-1"><a class="header-anchor" href="#camera-active" aria-hidden="true">#</a> Camera.active</h2><p><strong>Description</strong></p><p>Returns <code>true</code> if the camera:</p><ol><li><p>is the active camera for the composition at the current time: the <em>video switch</em> for the camera layer is on</p></li><li><p>the current time is in the range from the <em>in point</em> of the camera layer to the <em>out point</em> of the camera layer</p></li><li><p>and it is the first (topmost) such camera layer listed in the <em>timeline panel</em></p></li></ol><p>Returns <code>false</code> otherwise.</p><p><strong>Type</strong></p><p>Boolean</p>`,97),s=[n];function o(p,c){return a(),r("div",null,s)}const d=e(i,[["render",o],["__file","Camera.html.vue"]]);export{d as default};