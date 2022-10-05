import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as i,a as e,b as t,d as a,w as s,e as o,r as d}from"./app.75ca2a8e.js";const c={},l=e("h2",{id:"description",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#description","aria-hidden":"true"},"#"),t(" Description")],-1),u=e("h1",{id:"item-object\xB6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#item-object\xB6","aria-hidden":"true"},"#"),t(" Item object\xB6")],-1),h=e("p",null,[e("code",null,"app.project.item(index)")],-1),m=e("p",null,[e("code",null,"app.project.items[index]")],-1),g=e("p",null,[e("strong",null,"Description")],-1),k=e("p",null,"The Item object represents an item that can appear in the Project panel. Thefirst item is at index 1.",-1),f=o(`<p><strong>Example</strong></p><p>This example gets the second item from the project and checks that it is afolder. It then removes from the folder any top-level item that is notcurrently selected. It also checks to make sure that, for each item in thefolder, the parent is properly set to the correct folder.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> myFolder <span class="token operator">=</span> app<span class="token punctuation">.</span>project<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>myFolder <span class="token keyword">instanceof</span>
<span class="token class-name">FolderItem</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;error: second item is not a folder&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> varnumInFolder <span class="token operator">=</span> myFolder<span class="token punctuation">.</span>numItems<span class="token punctuation">;</span> <span class="token comment">//Always run loops backwards when deletingthings: for (var i = numInFolder; i &gt;= 1; i\\--) { var curItem =myFolder.item(i); if (curItem.parentFolder !== myFolder) { alert(&quot;error withinAE: the parentFolder is not set correctly&quot;); } else { if (!curItem.selected) {//found an unselected solid. curItem.remove(); } } } }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="attributes\xB6" tabindex="-1"><a class="header-anchor" href="#attributes\xB6" aria-hidden="true">#</a> Attributes\xB6</h2><h3 id="item-comment\xB6" tabindex="-1"><a class="header-anchor" href="#item-comment\xB6" aria-hidden="true">#</a> Item.comment\xB6</h3><p><code>app.project.item(index).comment</code></p><p><strong>Description</strong></p><p>A string that holds a comment, up to 15,999 bytes in length after any encodingconversion. The comment is for the user\u2019s purpose only; it has no effect onthe item\u2019s appearance or behavior.</p><p><strong>Type</strong></p><p>String; read/write.</p><hr><h3 id="item-dynamiclinkguid\xB6" tabindex="-1"><a class="header-anchor" href="#item-dynamiclinkguid\xB6" aria-hidden="true">#</a> Item.dynamicLinkGUID\xB6</h3><p><code>app.project.item(index).dynamicLinkGUID</code></p><p><strong>Description</strong></p><p>A unique and persistent identification number used for the dynamic link, inform of <code>00000000-0000-0000-0000-000000000000</code>.</p><p><strong>Type</strong></p><p>String; read-only.</p><hr><h3 id="item-guides\xB6" tabindex="-1"><a class="header-anchor" href="#item-guides\xB6" aria-hidden="true">#</a> Item.guides\xB6</h3><p><code>app.project.item(index).guides</code></p><p>:::info Note</p><p>This functionality was added in After Effects 16.1 (CC 2019) ::: <strong>Description</strong></p><p>An array of <code>guide</code> objects, containing <code>orientationType</code>, <code>positionType</code>, and <code>position</code> attributes.</p><p><strong>Type</strong></p><p>Array; read-only.</p><hr><h3 id="item-id\xB6" tabindex="-1"><a class="header-anchor" href="#item-id\xB6" aria-hidden="true">#</a> Item.id\xB6</h3><p><code>app.project.item(index).id</code></p><p><strong>Description</strong></p><p>A unique and persistent identification number used internally to identify anitem between sessions. The value of the ID remains the same when the projectis saved to a file and later reloaded. However, when you import this projectinto another project, new IDs are assigned to all items in the importedproject. The ID is not displayed anywhere in the user interface.</p><p><strong>Type</strong></p><p>Integer; read-only.</p><hr><h3 id="item-label\xB6" tabindex="-1"><a class="header-anchor" href="#item-label\xB6" aria-hidden="true">#</a> Item.label\xB6</h3><p><code>app.project.item(index).label</code></p><p><strong>Description</strong></p><p>The label color for the item. Colors are represented by their number (0 forNone, or 1 to 16 for one of the preset colors in the Labels preferences).</p><p>:::info Note</p><p>Custom label colors cannot be set programmatically. ::: <strong>Type</strong></p><p>Integer (0 to 16); read/write.</p><hr><h3 id="item-name\xB6" tabindex="-1"><a class="header-anchor" href="#item-name\xB6" aria-hidden="true">#</a> Item.name\xB6</h3><p><code>app.project.item(index).name</code></p><p><strong>Description</strong></p><p>The name of the item as displayed in the Project panel.</p><p><strong>Type</strong></p><p>String; read/write.</p><hr><h3 id="item-parentfolder\xB6" tabindex="-1"><a class="header-anchor" href="#item-parentfolder\xB6" aria-hidden="true">#</a> Item.parentFolder\xB6</h3><p><code>app.project.item(index).parentFolder</code></p><p><strong>Description</strong></p>`,52),b=e("code",null,"app.project.rootFolder",-1),y=o(`<p><strong>Type</strong></p><p>FolderItem object; read/write.</p><p><strong>Example</strong></p><p>This script creates a new FolderItem in the Project panel and moves compositions into it.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//create a new FolderItem in project, with name &quot;comps&quot; var</span>
compFolder <span class="token operator">=</span> app<span class="token punctuation">.</span>project<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">addFolder</span><span class="token punctuation">(</span><span class="token string">&quot;comps&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//move all compositionsinto new folder by setting //compItem&#39;s parentFolder to &quot;comps&quot; folder for(var i = 1; i &lt;= app.project.numItems; i++){ if (app.project.item(i)instanceof CompItem) { app.project.item(i).parentFolder = compFolder; } }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="item-selected\xB6" tabindex="-1"><a class="header-anchor" href="#item-selected\xB6" aria-hidden="true">#</a> Item.selected\xB6</h3><p><code>app.project.item(index).selected</code></p><p><strong>Description</strong></p><p>When true, this item is selected. Multiple items can be selected at the sametime. Set to true to select the item programmatically, or to false to deselect it.</p><p><strong>Type</strong></p><p>Boolean; read/write.</p><hr><h3 id="item-typename\xB6" tabindex="-1"><a class="header-anchor" href="#item-typename\xB6" aria-hidden="true">#</a> Item.typeName\xB6</h3><p><code>app.project.item(index).typeName</code></p><p><strong>Description</strong></p><p>A user-readable name for the item type; for example, \u201CFolder\u201D, \u201CFootage\u201D, or\u201CComposition\u201D. These names are application locale-dependent, meaning that theyare different depending on the application\u2019s interface language.</p><p><strong>Type</strong></p><p>String; read-only.</p><p><strong>Localized strings</strong></p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td><code>en_US</code></td><td><strong>Composition</strong></td></tr></tbody></table><p>|</p><p>| Property | Type | | ---------- | ----------- | --- | --- | | <strong>Folder</strong> | <strong>Footage</strong> | | --- | --- | --- | --- | | <code>de_DE</code> | Komposition |</p><p>|</p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td>Ordner</td><td>Footage</td></tr><tr><td><code>es_ES</code></td><td>Composici\xF3n</td></tr></tbody></table><p>|</p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td>Carpeta</td><td>Material de archivo</td></tr><tr><td><code>fr_FR</code></td><td>Composition</td></tr></tbody></table><p>|</p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td>Dossier</td><td>M\xE9trage</td></tr><tr><td><code>it_IT</code></td><td>Composizione</td></tr></tbody></table><p>|</p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td>Cartella</td><td>Metraggio</td></tr><tr><td><code>ja_JP</code></td><td>\u30B3\u30F3\u30DD\u30B8\u30B7\u30E7\u30F3</td></tr></tbody></table><p>|</p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td>\u30D5\u30A9\u30EB\u30C0\u30FC</td><td>\u30D5\u30C3\u30C6\u30FC\u30B8</td></tr><tr><td><code>ko_KR</code></td><td>\uCEF4\uD3EC\uC9C0\uC158</td></tr></tbody></table><p>|</p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td>\uD3F4\uB354</td><td>\uD478\uD2F0\uC9C0</td></tr><tr><td><code>pt_BR</code></td><td>Composi\xE7\xE3o</td></tr></tbody></table><p>|</p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td>Pasta</td><td>Grava\xE7\xE3o</td></tr><tr><td><code>ru_ru</code></td><td>\u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u044F</td></tr></tbody></table><p>|</p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td>\u041F\u0430\u043F\u043A\u0430</td><td>\u0412\u0438\u0434\u0435\u043E\u0440\u044F\u0434</td></tr><tr><td><code>zh_CN</code></td><td>\u5408\u6210</td></tr></tbody></table><p>|</p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td>\u6587\u4EF6\u5939</td><td>\u7D20\u6750</td></tr></tbody></table><p><strong>Example</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span>
<span class="token operator">|</span>Property<span class="token operator">|</span>Type<span class="token operator">|</span>
<span class="token operator">|</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">|</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">|</span>
<span class="token operator">|</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Composition|Komposition|Composici\xF3n|Composizione|\u30B3\u30F3\u30DD\u30B8\u30B7\u30E7\u30F3|\uCEF4\uD3EC\uC9C0\uC158|Composi\xE7\xE3o|\u041A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u044F|\u5408\u6210</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>project<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">.</span>typeName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">|</span>
<span class="token punctuation">{</span> <span class="token comment">// item is a composition } else if</span>
<span class="token operator">|</span>Property<span class="token operator">|</span>Type<span class="token operator">|</span>
<span class="token operator">|</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">|</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">|</span>
<span class="token operator">|</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Folder|Ordner|Carpeta|Dossier|Cartella|\u30D5\u30A9\u30EB\u30C0\u30FC|\uD3F4\uB354|Pasta|\u041F\u0430\u043F\u043A\u0430|\u6587\u4EF6\u5939</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>project<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">.</span>typeName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">|</span>
<span class="token punctuation">{</span> <span class="token comment">// item is a folder }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="methods\xB6" tabindex="-1"><a class="header-anchor" href="#methods\xB6" aria-hidden="true">#</a> Methods\xB6</h2><h3 id="item-addguide-\xB6" tabindex="-1"><a class="header-anchor" href="#item-addguide-\xB6" aria-hidden="true">#</a> Item.addGuide()\xB6</h3><p><code>app.project.item(index).addGuide(orientationType, position)</code></p><p>:::info Note</p><p>This functionality was added in After Effects 16.1 (CC 2019) ::: <strong>Description</strong></p><p>Creates a new guide and adds it to the <code>guides</code> object of the Item.</p><p><strong>Parameters</strong></p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td><code>orientationType</code></td><td>An integer; 0 for a horizontal guide, 1 for a vertical guide. Any other valuedefaults to horizontal.</td></tr><tr><td><code>position</code></td><td>An integer; the X or Y coordinate position of the guide in pixels, dependingon its <code>orientationType</code>.</td></tr></tbody></table><p><strong>Returns</strong></p><p>Integer; the index of the newly-created guide.</p><p><strong>Example</strong></p><p>Adds a vertical guide at 500 pixels on the X axis to the <code>activeItem</code> of a project.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>app<span class="token punctuation">.</span>project<span class="token punctuation">.</span>activeItem<span class="token punctuation">.</span><span class="token function">addGuide</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h3 id="item-remove-\xB6" tabindex="-1"><a class="header-anchor" href="#item-remove-\xB6" aria-hidden="true">#</a> Item.remove()\xB6</h3><p><code>app.project.item(index).remove()</code></p><p><strong>Description</strong></p><p>Deletes this item from the project and the Project panel. If the item is aFolderItem, all the items contained in the folder are also removed from theproject. No files or folders are removed from the disk.</p><p><strong>Parameters</strong></p><p>None.</p><p><strong>Returns</strong></p><p>Nothing.</p><hr><h3 id="item-removeguide-\xB6" tabindex="-1"><a class="header-anchor" href="#item-removeguide-\xB6" aria-hidden="true">#</a> Item.removeGuide()\xB6</h3><p><code>app.project.item(index).removeGuide(guideIndex)</code></p><p>:::info Note</p><p>This functionality was added in After Effects 16.1 (CC 2019) ::: <strong>Description</strong></p><p>Removes an existing guide. Choose the guide based on its index inside the <code>Item.guides</code> object.</p><p><strong>Parameters</strong></p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td><code>guideIndex</code></td><td>An integer; the index of the guide to be removed.</td></tr></tbody></table><p><strong>Returns</strong></p><p>Nothing.</p><p><strong>Example</strong></p><p>Removes the first guide in <code>activeItem</code>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>app<span class="token punctuation">.</span>project<span class="token punctuation">.</span>activeItem<span class="token punctuation">.</span><span class="token function">removeGuide</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Warning</p><p>Removing a guide will cause all higher guide indexes to shift downward.</p><hr><h3 id="item-setguide-\xB6" tabindex="-1"><a class="header-anchor" href="#item-setguide-\xB6" aria-hidden="true">#</a> Item.setGuide()\xB6</h3><p><code>app.project.item(index).setGuide(position,guideIndex)</code></p><p>:::info Note</p><p>This functionality was added in After Effects 16.1 (CC 2019) ::: <strong>Description</strong></p><p>Modifies the <code>position</code> of an existing guide. Choose the guide based on its<code>guideIndex</code> inside the <code>Item.guides</code> array.</p><p>A guide\u2019s <code>orientationType</code> may not be changed after it is created.</p><p><strong>Parameters</strong></p><table><thead><tr><th>Property</th><th>Type</th></tr></thead><tbody><tr><td><code>position</code></td><td>An integer; the new X or Y coordinate position of the guide in pixels,depending on its existing <code>orientationType</code>.</td></tr><tr><td><code>guideIndex</code></td><td>An integer; the index of the guide to be modified.</td></tr></tbody></table><p><strong>Returns</strong></p><p>Nothing.</p><p><strong>Example</strong></p><p>Changes the position of the first guide in <code>activeItem</code> to 1200 pixels.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>app<span class="token punctuation">.</span>project<span class="token punctuation">.</span>activeItem<span class="token punctuation">.</span><span class="token function">setGuide</span><span class="token punctuation">(</span><span class="token number">1200</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,95);function v(x,j){const n=d("RouterLink");return r(),i("div",null,[l,u,h,m,g,k,e("blockquote",null,[e("p",null,[t("Item is the base class for "),a(n,{to:"/en/ae/scripting/Item/avitem.html#avitem"},{default:s(()=>[t("AVItem object")]),_:1}),t(" and for "),a(n,{to:"/en/ae/scripting/Item/folderitem.html#folderitem"},{default:s(()=>[t("FolderItem object")]),_:1}),t(", which are in turn the base classes for various other item types, so Item attributes and methods are available when working with all of these item types.")])]),f,e("p",null,[t("The FolderItem object for the folder that contains this item. If this item isat the top level of the project, this is the project\u2019s root folder("),b,t("). You can use"),a(n,{to:"/en/ae/scripting/Item/itemcollection.html#itemcollection-addfolder"},{default:s(()=>[t("ItemCollection.addFolder()")]),_:1}),t(" toadd a new folder, and set this value to put items in the new folder.")]),y])}const _=p(c,[["render",v],["__file","Item.html.vue"]]);export{_ as default};