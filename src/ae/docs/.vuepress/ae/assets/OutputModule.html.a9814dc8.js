import{_ as u}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as r,a as e,b as t,d as n,w as i,e as a,r as o}from"./app.75ca2a8e.js";const l={},d=e("h2",{id:"description",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#description","aria-hidden":"true"},"#"),t(" Description")],-1),m=e("h1",{id:"outputmodule-object\xB6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#outputmodule-object\xB6","aria-hidden":"true"},"#"),t(" OutputModule object\xB6")],-1),h=e("p",null,[e("code",null,"app.project.renderQueue.item(index).outputModule(index)")],-1),g=e("p",null,[e("strong",null,"Description")],-1),k=e("hr",null,null,-1),f=e("h2",{id:"attributes\xB6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#attributes\xB6","aria-hidden":"true"},"#"),t(" Attributes\xB6")],-1),b=e("h3",{id:"outputmodule-file\xB6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#outputmodule-file\xB6","aria-hidden":"true"},"#"),t(" OutputModule.file\xB6")],-1),v=e("p",null,[e("code",null,"app.project.renderQueue.item(index).outputModule(index).file")],-1),_=e("p",null,[e("strong",null,"Description")],-1),w={href:"https://extendscript.docsforadobe.dev/file-system-access/file-object.html",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,[e("strong",null,"Type")],-1),y={href:"https://extendscript.docsforadobe.dev/file-system-access/file-object.html",target:"_blank",rel:"noopener noreferrer"},M=a('<hr><h3 id="outputmodule-includesourcexmp\xB6" tabindex="-1"><a class="header-anchor" href="#outputmodule-includesourcexmp\xB6" aria-hidden="true">#</a> OutputModule.includeSourceXMP\xB6</h3><p><code>app.project.renderQueue.item(index).outputModule(index).includeSourceXMP</code></p><p><strong>Description</strong></p><p>When true, writes all source footage XMP metadata to the output file.Corresponds to the Include Source XMP Metadata option in the Output Module Settings dialog box.</p><p><strong>Type</strong></p><p>Boolean; read/write.</p><hr><h3 id="outputmodule-name\xB6" tabindex="-1"><a class="header-anchor" href="#outputmodule-name\xB6" aria-hidden="true">#</a> OutputModule.name\xB6</h3><p><code>app.project.renderQueue.item(index).outputModule(index).name</code></p><p><strong>Description</strong></p><p>The name of the output module, as shown in the user interface.</p><p><strong>Type</strong></p><p>String; read-only.</p><hr><h3 id="outputmodule-postrenderaction\xB6" tabindex="-1"><a class="header-anchor" href="#outputmodule-postrenderaction\xB6" aria-hidden="true">#</a> OutputModule.postRenderAction\xB6</h3><p><code>app.project.renderQueue.item(index).outputModule(index).postRenderAction</code></p><p><strong>Description</strong></p><p>An action to be performed when the render operation is completed.</p><p><strong>Type</strong></p><p>A <code>PostRenderAction</code> enumerated value (read/write); one of:</p><ul><li><p><code>PostRenderAction.NONE</code></p></li><li><p><code>PostRenderAction.IMPORT</code></p></li><li><p><code>PostRenderAction.IMPORT_AND_REPLACE_USAGE</code></p></li><li><p><code>PostRenderAction.SET_PROXY</code></p></li></ul><hr><h3 id="outputmodule-templates\xB6" tabindex="-1"><a class="header-anchor" href="#outputmodule-templates\xB6" aria-hidden="true">#</a> OutputModule.templates\xB6</h3><p><code>app.project.renderQueue.item(index).outputModule(index).templates</code></p><p><strong>Description</strong></p><p>The names of all output-module templates available in the local installation of After Effects.</p><p><strong>Type</strong></p><p>Array of strings; read-only.</p><hr><h2 id="methods\xB6" tabindex="-1"><a class="header-anchor" href="#methods\xB6" aria-hidden="true">#</a> Methods\xB6</h2><h3 id="outputmodule-applytemplate-\xB6" tabindex="-1"><a class="header-anchor" href="#outputmodule-applytemplate-\xB6" aria-hidden="true">#</a> OutputModule.applyTemplate()\xB6</h3><p><code>app.project.renderQueue.item(index).outputModule(index).applyTemplate(templateName)</code></p><p><strong>Description</strong></p><p>Applies the specified existing output-module template.</p><p><strong>Parameters</strong></p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td><code>templateName</code></td><td>A string containing the name of the template to be applied.</td></tr></tbody></table><p><strong>Returns</strong></p><p>Nothing.</p><hr><h3 id="outputmodule-getsetting-\xB6" tabindex="-1"><a class="header-anchor" href="#outputmodule-getsetting-\xB6" aria-hidden="true">#</a> OutputModule.getSetting()\xB6</h3><p><code>app.project.renderQueue.item(index).outputModule(index).getSetting()</code></p><p>:::info Note</p><p>This functionality was added in After Effects 13.0 (CC 2014) ::: <strong>Description</strong></p><p>Gets a specific setting for a given Output Module.</p>',45),S={href:"https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva",target:"_blank",rel:"noopener noreferrer"},q={href:"https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva",target:"_blank",rel:"noopener noreferrer"},j=a('<p><strong>Example</strong></p><p>See the example in [RenderQueueItem.getSetting()](renderqueueitem.html#renderqueueitem- getsetting) for structure reference.</p><hr><h3 id="outputmodule-getsettings-\xB6" tabindex="-1"><a class="header-anchor" href="#outputmodule-getsettings-\xB6" aria-hidden="true">#</a> OutputModule.getSettings()\xB6</h3><p><code>app.project.renderQueue.item(index).outputModule(index).getSettings()</code></p><p>:::info Note</p><p>This functionality was added in After Effects 13.0 (CC 2014) ::: <strong>Description</strong></p><p>Gets all settings for a given Output Module.</p>',8),T={href:"https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva",target:"_blank",rel:"noopener noreferrer"},A={href:"https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva",target:"_blank",rel:"noopener noreferrer"},O=a(`<p><strong>Example</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Get object that contains the string version of all current</span>
output module setting <span class="token comment">// values of output module item 1 from render queue item1. // To get the values in the number format, use GetSettingsFormat.NUMBER asan argument. var omItem1_all_str=app.project.renderQueue.item(1).outputModule(1).getSettings(GetSettingsFormat.STRING ); // Convert to JSON format so that it is human-readable. var omItem1_all_str_json = omItem1_all_str.toSource(); // Get objectthat contains string version of settable output module setting values // ofoutput module item 1 from render queue item 1. // If you want to get thevalues in the number format, use // GetSettingsFormat.NUMBER_SETTABLE as anargument. var omItem1_settable_str =app.project.renderQueue.item(1).outputModule(1).getSettings(GetSettingsFormat.STRING_SETTABLE ); // Currently, the format setting in theoutput module is not settable, but it // is readable. The next line will tellyou the current format of output module // item 1 from render queue item 1.</span>
<span class="token keyword">var</span> current_format <span class="token operator">=</span>
app<span class="token punctuation">.</span>project<span class="token punctuation">.</span>renderQueue<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">outputModule</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSettings</span><span class="token punctuation">(</span>GetSettingsFormat<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Format<span class="token punctuation">;</span><span class="token comment">// This line will tell you the output module file info. var</span>
current_omFileTempalte <span class="token operator">=</span>
app<span class="token punctuation">.</span>project<span class="token punctuation">.</span>renderQueue<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">outputModule</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSettings</span><span class="token punctuation">(</span>GetSettingsFormat<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&quot;OutputFile Info&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;File Template&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="outputmodule-remove-\xB6" tabindex="-1"><a class="header-anchor" href="#outputmodule-remove-\xB6" aria-hidden="true">#</a> OutputModule.remove()\xB6</h3><p><code>app.project.renderQueue.item(index).outputModule(index).remove()</code></p><p><strong>Description</strong></p><p>Removes this OutputModule object from the collection.</p><p><strong>Parameters</strong></p><p>None.</p><p><strong>Returns</strong></p><p>Nothing.</p><hr><h3 id="outputmodule-saveastemplate-\xB6" tabindex="-1"><a class="header-anchor" href="#outputmodule-saveastemplate-\xB6" aria-hidden="true">#</a> OutputModule.saveAsTemplate()\xB6</h3><p><code>app.project.renderQueue.item(index).outputModule(index).saveAsTemplate(name)</code></p><p><strong>Description</strong></p><p>Saves this output module as a template and adds it to the te mpl ate s array.</p><p><strong>Parameters</strong></p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td><code>name</code></td><td>A string containing the name of the new template.</td></tr></tbody></table><p><strong>Returns</strong></p><p>Nothing.</p><hr><h3 id="outputmodule-setsetting-\xB6" tabindex="-1"><a class="header-anchor" href="#outputmodule-setsetting-\xB6" aria-hidden="true">#</a> OutputModule.setSetting()\xB6</h3><p><code>app.project.renderQueue.item(index).outputModule(index).setSetting()</code></p><p>:::info Note</p><p>This functionality was added in After Effects 13.0 (CC 2014) ::: <strong>Description</strong></p><p>Sets a specific setting for a given Output Module.</p>`,26),R={href:"https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva",target:"_blank",rel:"noopener noreferrer"},E={href:"https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva",target:"_blank",rel:"noopener noreferrer"},N=e("p",null,[e("strong",null,"Example")],-1),Q=e("p",null,"See the example in [RenderQueueItem.setSetting()](renderqueueitem.html#renderqueueitem- setsetting) for structure reference.",-1),I=e("hr",null,null,-1),F=e("h3",{id:"outputmodule-setsettings-\xB6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#outputmodule-setsettings-\xB6","aria-hidden":"true"},"#"),t(" OutputModule.setSettings()\xB6")],-1),P=e("p",null,[e("code",null,"app.project.renderQueue.item(index).outputModule(index).setSettings()")],-1),C=e("p",null,":::info Note",-1),D=e("p",null,[t("This functionality was added in After Effects 13.0 (CC 2014) ::: "),e("strong",null,"Description")],-1),G={href:"https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva",target:"_blank",rel:"noopener noreferrer"},B={href:"https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva",target:"_blank",rel:"noopener noreferrer"},L=a(`<p>Warning</p><p>There is a bug that causes OutputModule object to be invalidated after theoutput module setting is modified, so you need to retrieve the Output Moduleagain after you modify it.</p><p><strong>Examples</strong></p><p>Get the settings from one item\u2019s output module and use them on another:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// If you want to get the values in the number format, use //</span>
GetSettingsFormat<span class="token punctuation">.</span><span class="token constant">NUMBER_SETTABLE</span> <span class="token keyword">as</span> an argument<span class="token punctuation">.</span> <span class="token keyword">var</span> omItem1_settable_str <span class="token operator">=</span>app<span class="token punctuation">.</span>project<span class="token punctuation">.</span>renderQueue<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">outputModule</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSettings</span><span class="token punctuation">(</span>GetSettingsFormat<span class="token punctuation">.</span><span class="token constant">STRING_SETTABLE</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Set output module item 1 of renderqueue item 2 with values that you get from // output module 1 of render queueitem 1 app.project.renderQueue.item(2).outputModule(1).setSettings(omItem1_settable_str );</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Set output module item 1 of render queue item 3 with values that you create:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> crop_data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">Crop</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;Crop Bottom&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;Crop Left&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;Crop Right&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;Crop Top&quot;</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span>project<span class="token punctuation">.</span>renderQueue<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">outputModule</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setSettings</span><span class="token punctuation">(</span>crop_data<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Route the output file to the user directory:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> om1 <span class="token operator">=</span> app<span class="token punctuation">.</span>project<span class="token punctuation">.</span>renderQueue<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">outputModule</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">var</span>
file_name <span class="token operator">=</span> File<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span> om1<span class="token punctuation">.</span>file<span class="token punctuation">.</span>name <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Name contains special character,space? var new_dir = new Folder( &quot;~/new_output&quot; ); var new_path =new_dir.fsName; var new_data = { &quot;Output File Info&quot;: { &quot;Base Path&quot;: new_path,&quot;Subfolder Path&quot;: &quot;draft&quot;, &quot;File Name&quot;: file_name } }; om1.setSettings(</span>
new_data <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example, the output file is routed to the user directory, but thistime using the full path:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> om1 <span class="token operator">=</span> app<span class="token punctuation">.</span>project<span class="token punctuation">.</span>renderQueue<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">outputModule</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//</span>
Name contains special character<span class="token punctuation">,</span> such <span class="token keyword">as</span> space<span class="token operator">?</span> <span class="token keyword">var</span> file_name <span class="token operator">=</span> File<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>om1<span class="token punctuation">.</span>file<span class="token punctuation">.</span>name <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">var</span> new_path <span class="token operator">=</span> <span class="token string">&quot;/Users/myAccount/new_output&quot;</span><span class="token punctuation">;</span> <span class="token keyword">var</span> separator <span class="token operator">=</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">;</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>$<span class="token punctuation">.</span>os<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;Mac&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> new_path <span class="token operator">=</span><span class="token string">&quot;C:\\Users\\myAccount\\new_output&quot;</span><span class="token punctuation">;</span> separator <span class="token operator">=</span> <span class="token string">&quot;\\&quot;; } var new_data = { &quot;</span>OutputFile Info<span class="token string">&quot;: { &quot;</span>Full Flat Path&quot;<span class="token operator">:</span> new_path <span class="token operator">+</span> separator <span class="token operator">+</span> file_name <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>om1<span class="token punctuation">.</span><span class="token function">setSettings</span><span class="token punctuation">(</span> new_data <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function U(X,V){const p=o("RouterLink"),s=o("ExternalLinkIcon");return c(),r("div",null,[d,m,h,g,e("p",null,[t("An OutputModule object of a"),n(p,{to:"/en/ae/scripting/Render-Queue/renderqueueitem.html#renderqueueitem"},{default:i(()=>[t("RenderQueueItem")]),_:1}),t(" generates a singlefile or sequence via a render operation, and contains attributes and methodsrelating to the file to be rendered.")]),k,f,b,v,_,e("p",null,[t("The "),e("a",w,[t("Extendscript File"),n(s)]),t(" object for the file this output module is set to render.")]),x,e("p",null,[e("a",y,[t("Extendscript File"),n(s)]),t(" object; read/write.")]),M,e("ul",null,[e("li",null,[e("p",null,[t("Depreciated Source: "),e("a",S,[t("https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva"),n(s)])])]),e("li",null,[e("p",null,[t("Archived version: "),e("a",q,[t("https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva"),n(s)])])])]),j,e("ul",null,[e("li",null,[e("p",null,[t("Depreciated Source: "),e("a",T,[t("https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva"),n(s)])])]),e("li",null,[e("p",null,[t("Archived version: "),e("a",A,[t("https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva"),n(s)])])])]),O,e("ul",null,[e("li",null,[e("p",null,[t("Depreciated Source: "),e("a",R,[t("https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva"),n(s)])])]),e("li",null,[e("p",null,[t("Archived version: "),e("a",E,[t("https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva"),n(s)])])])]),N,Q,I,F,P,C,D,e("ul",null,[e("li",null,[e("p",null,[t("Depreciated Source: "),e("a",G,[t("https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva"),n(s)])])]),e("li",null,[e("p",null,[t("Archived version: "),e("a",B,[t("https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva"),n(s)])])])]),L])}const Y=u(l,[["render",U],["__file","OutputModule.html.vue"]]);export{Y as default};