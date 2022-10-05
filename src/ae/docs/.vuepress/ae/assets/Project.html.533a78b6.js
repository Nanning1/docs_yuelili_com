import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as t,e as a}from"./app.75ca2a8e.js";const r={},s=a(`<h2 id="project-fullpath" tabindex="-1"><a class="header-anchor" href="#project-fullpath" aria-hidden="true">#</a> Project.fullPath</h2><p><strong>Description</strong></p><p>The platform-specific absolute file path, including the project file name. Ifthe project has not been saved, it returns an empty string.</p><p>Example:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>thisProject<span class="token punctuation">.</span>fullPath<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Type</strong></p><p>String</p><hr><h2 id="project-bitsperchannel" tabindex="-1"><a class="header-anchor" href="#project-bitsperchannel" aria-hidden="true">#</a> Project.bitsPerChannel</h2><p><strong>Description</strong></p><p>The color depth of the project in bits per channel (bpc), as set in <em>ProjectSettings &gt; Color Management</em> They are one of 8, 16, or 32. Equivalent to thescripting project attribute app.project.bitsPerChannel.</p><p>Example:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>thisProject<span class="token punctuation">.</span>bitsPerChannel<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Type</strong></p><p>Number</p><hr><h2 id="project-linearblending" tabindex="-1"><a class="header-anchor" href="#project-linearblending" aria-hidden="true">#</a> Project.linearBlending</h2><p><strong>Description</strong></p><p>The state of the Blend Colors Using 1.0 Gamma option in <em>Project Settings &gt;Color Management</em>. Equivalent to the scripting project attributeapp.project.linearBlending.</p><p>Example:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>thisProject<span class="token punctuation">.</span>linearBlending<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Type</strong></p><p>Boolean</p>`,23),i=[s];function p(o,c){return n(),t("div",null,i)}const h=e(r,[["render",p],["__file","Project.html.vue"]]);export{h as default};