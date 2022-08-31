import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as p}from"./app.3f77d9f1.js";const t={},e=p(`<h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD\uFF1A</h2><p>\u77E2\u91CF\u6570\u5B66\u51FD\u6570\u662F\u5BF9\u6570\u7EC4\u8FDB\u884C\u8FD0\u7B97\u7684\u5168\u5C40\u65B9\u6CD5\u3002\u4E0E\u5185\u7F6E\u7684 JavaScript \u65B9\u6CD5\uFF08\u4F8B\u5982 Math.sin\uFF09\u4E0D\u540C\uFF0C\u8FD9\u4E9B\u65B9\u6CD5\u4E0D\u7528 Math \u524D\u7F00\u3002</p><p>\u9664\u975E\u53E6\u6709\u8BF4\u660E\uFF0C\u77E2\u91CF\u6570\u5B66\u65B9\u6CD5\u5BF9\u7EF4\u5EA6\u7684\u8981\u6C42\u5F88\u5BBD\u677E\uFF0C\u8FD4\u56DE\u8F93\u5165\u6570\u7EC4\u5BF9\u8C61\u6700\u5927\u7EF4\u5EA6\u7684\u503C\uFF0C\u7528\u96F6\u586B\u5145\u7F3A\u5931\u7684\u7EF4\u5EA6\u5143\u7D20\u3002</p><p>\u4F8B\u5982\uFF0C\u8868\u8FBE\u5F0F add([10, 20], [1, 2, 3]) \u8FD4\u56DE [11, 22, 3]\u3002</p><p>\u4E66\u5199\u89C4\u683C\uFF1A[111,222,333] \u4E2D\u62EC\u53F7\u91CC\u51E0\u4E2A\u7EF4\u5EA6\u5C31\u5199\u51E0\u4E2A\u6570\u5B57</p><p>\u8BF4\u660E: \u6848\u4F8B\u5747\u5728AE\u6587\u5B57\u56FE\u5C42\u7684\u6E90\u6587\u672C\u4E2D\u7528\u8868\u8FBE\u5F0F\u4E66\u5199,\u6848\u4F8B\u4E2D\u8FD4\u56DE\u7684\u610F\u601D\u662F\u5728\u5C4F\u5E55\u4E2D\u663E\u793A\u5185\u5BB9</p><h2 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> add()</h2><p>\u5168\u540D\uFF1Aadd(vec1, vec2 )</p><p>\u7C7B\u578B\uFF1A\u51FD\u6570</p><p>\u8BF4\u660E\uFF1A\u4E24\u4E2A\u77E2\u91CF\u76F8\u52A0\u3002vec\u662F\u6570\u7EC4\u7684\u610F\u601D, \u5982\u679C2\u7EF4\u6570\u7EC4add3\u7EF4\u6570\u7EC4\uFF0C\u52192\u7EF4\u6570\u7EC4\u4F1A\u8865\u4E00\u4F4D0\uFF0C\u89C1\u793A\u4F8B2</p><p>\u53C2\u6570\uFF1A\u4E24\u4E2A\u77E2\u91CF</p><p>\u8FD4\u56DE\uFF1A\u6570\u7EC4</p><p>\u793A\u4F8B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//\u8FD4\u56DE[11,22,33]</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//\u8FD4\u56DE[11,22,30] \u7B49\u540C\u4E8Eadd([1,2,0],[10,20,30])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5168\u9009\u4EE3\u7801</p><p>\u590D\u5236</p><h2 id="sub" tabindex="-1"><a class="header-anchor" href="#sub" aria-hidden="true">#</a> sub()</h2><p>\u5168\u540D\uFF1Asub(vec1,vec2)</p><p>\u7C7B\u578B\uFF1A\u51FD\u6570</p><p>\u8BF4\u660E\uFF1A\u4E24\u4E2A\u77E2\u91CF\u76F8\u51CF\u3002</p><p>\u53C2\u6570\uFF1Avec1 \u548C vec2 \u662F\u6570\u7EC4\u3002</p><p>\u8FD4\u56DE\uFF1A\u6570\u7EC4</p><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">111</span><span class="token punctuation">,</span><span class="token number">222</span><span class="token punctuation">,</span><span class="token number">333</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">300</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u8FD4\u56DE[11,22,33] \u5355\u7EAF\u5404\u4E2A\u5143\u7D20\u76F8\u51CF</span>
<span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">111</span><span class="token punctuation">,</span><span class="token number">222</span><span class="token punctuation">,</span><span class="token number">333</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u8FD4\u56DE[11,22,333] \u7F3A\u5C11\u7684\u5143\u7D20\u63090\u8BA1\u7B97</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5168\u9009\u4EE3\u7801</p><p>\u590D\u5236</p><h2 id="mul" tabindex="-1"><a class="header-anchor" href="#mul" aria-hidden="true">#</a> mul()</h2><p>\u5168\u540D\uFF1Amul(vec,amount)</p><p>\u7C7B\u578B\uFF1A\u51FD\u6570</p><p>\u8BF4\u660E\uFF1A\u5C06\u77E2\u91CF\u7684\u6BCF\u4E2A\u5143\u7D20\u4E0E\u6570\u91CF\u76F8\u4E58</p><p>\u53C2\u6570\uFF1Avec \u662F\u6570\u7EC4\uFF0Camount \u662F\u6570\u503C</p><p>\u8FD4\u56DE\uFF1A\u6570\u7EC4</p><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">mul</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">111</span><span class="token punctuation">,</span><span class="token number">222</span><span class="token punctuation">,</span><span class="token number">333</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// \u8FD4\u56DE[222,444,666] \u5355\u7EAF\u5730\u5404\u4E2A\u5143\u7D20\u4E58\u4EE5\u540E\u9762\u6570\u5B57</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5168\u9009\u4EE3\u7801</p><p>\u590D\u5236</p><h2 id="div" tabindex="-1"><a class="header-anchor" href="#div" aria-hidden="true">#</a> div()</h2><p>\u5168\u540D\uFF1Adiv(vec,amount)</p><p>\u7C7B\u578B\uFF1A\u51FD\u6570</p><p>\u8BF4\u660E\uFF1A\u7528\u77E2\u91CF\u7684\u6BCF\u4E2A\u5143\u7D20\u9664\u4EE5\u6570\u91CF</p><p>\u53C2\u6570\uFF1Avec \u662F\u6570\u7EC4\uFF0Camount \u662F\u6570\u503C</p><p>\u8FD4\u56DE\uFF1A\u6570\u7EC4</p><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">div</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">300</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">//\u8FD4\u56DE[10,20,30] \u5355\u7EAF\u5730\u7528\u6570\u7EC4\u5143\u7D20\u9664\u4EE5\u6570\u91CF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5168\u9009\u4EE3\u7801</p><p>\u590D\u5236</p><h2 id="clamp" tabindex="-1"><a class="header-anchor" href="#clamp" aria-hidden="true">#</a> clamp()</h2><p>\u5168\u540D\uFF1Aclamp(value,limit1,limit2)</p><p>\u7C7B\u578B\uFF1A\u51FD\u6570</p><p>\u8BF4\u660E\uFF1A\u628Avalue \u6BCF\u4E2A\u5143\u7D20\u7684\u503C\u90FD\u9650\u5B9A\u5728limit1 \u548C limit2\u4E4B\u95F4</p><p>\u53C2\u6570\uFF1Avalue\u3001limit1 \u548C limit2 \u662F\u6570\u503C\u6216\u6570\u7EC4</p><p>\u8FD4\u56DE\uFF1A\u6570\u503C\u6216\u6570\u7EC4</p><p><img src="https://mir.yuelili.com/wp-content/uploads/user/docs/exp-a-z/exp-clamp.png" alt=""></p><p>\u793A\u4F8B\uFF1Avalue\u4E3A\u6570\u503C</p><p><img src="https://mir.yuelili.com/wp-content/uploads/user/AE/expression/clamp.bmp" alt=""></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">clamp</span><span class="token punctuation">(</span>time<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">//\u57283\u79D2\u65F6\u8FD4\u56DE3,10\u79D2\u65F6\u8FD4\u56DE3\u3002</span>
<span class="token comment">//time\u672C\u8EAB\u4E3A\u7EBF\u6027\u51FD\u6570\u3002\u53D7\u51FD\u6570\u5F71\u54CD\uFF0C\u5927\u4E8E1\u4E14\u4F4E\u4E8E3\u7684\u503C\u8FD4\u56DEtime\u672C\u8EAB\uFF0C\u8D85\u8FC73\u7684\u503C\u8FD4\u56DE3\uFF0C\u88AB\u9650\u5236\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5168\u9009\u4EE3\u7801</p><p>\u590D\u5236</p><p>\u793A\u4F8B\uFF1Avalue\u4E3A\u6570\u7EC4\u65F6</p><p><img src="https://mir.yuelili.com/wp-content/uploads/user/AE/expression/exp-global13.bmp" alt=""></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token function">clamp</span><span class="token punctuation">(</span><span class="token punctuation">[</span>time<span class="token punctuation">,</span>time<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u572812\u79D2\u65F6\u8FD4\u56DE[12,30]; \u572818\u79D2\u65F6\u8FD4\u56DE[18,36]</span>
<span class="token comment">//\u6570\u7EC4\u540C\u7406 \u76F8\u5F53\u4E8E\u72EC\u7ACB\u8BA1\u7B97\u6BCF\u4E2A\u5143\u7D20\u7684clamp \u7136\u540E\u628A\u7ED3\u679C\u5408\u4E00\u8D77</span>
<span class="token comment">//\u6CE8\uFF1Aclamp\u5904\u7406time\u65F6,time\u4EE5\u79D2\u4E3A\u5355\u4F4D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5168\u9009\u4EE3\u7801</p><p>\u590D\u5236</p><h2 id="dot" tabindex="-1"><a class="header-anchor" href="#dot" aria-hidden="true">#</a> dot()</h2><p>\u5168\u540D\uFF1Adot(vec1,vec2)</p><p>\u7C7B\u578B\uFF1A\u51FD\u6570</p><p>\u8BF4\u660E\uFF1A\u8FD4\u56DE\u77E2\u91CF\u53C2\u6570\u7684\u70B9\uFF08\u5185\uFF09\u79EF\u3002(\u540C\u7EF4\u76F8\u4E58\u518D\u76F8\u52A0\uFF09</p><p>\u53C2\u6570\uFF1Avec1 \u548C vec2 \u662F\u6570\u7EC4</p><p>\u8FD4\u56DE\uFF1A\u6570\u503C</p><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">dot</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u8FD4\u56DE51 = 7*3 + 5*6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5168\u9009\u4EE3\u7801</p><p>\u590D\u5236</p><h2 id="cross" tabindex="-1"><a class="header-anchor" href="#cross" aria-hidden="true">#</a> cross()</h2><p>\u5168\u540D\uFF1Across(vec1, vec2)</p><p>\u7C7B\u578B\uFF1A\u51FD\u6570</p><p>\u8BF4\u660E\uFF1A\u8FD4\u56DE vec1 \u548C vec2 \u7684\u5411\u91CF\u53C9\u79EF\u3002\u540C\u65F6\u4E0E vec1 \u548C vec2 \u5782\u76F4\u7684\u4E00\u4E2A\u77E2\u91CFC</p><p>\u53C2\u6570\uFF1Avec\u4E3A\u4E00\u4E2A\u77E2\u91CF\uFF08\u4E8C\u7EF4\u6216\u4E09\u7EF4\uFF09\u3002</p><p>\u8FD4\u56DE\uFF1A\u77E2\u91CF\u3002</p><p>\u793A\u4F8B\uFF1A</p><p>A = [4 -2 1]; B = [1 -1 3]; C = cross(A,B) //[-5,-11,-2]</p><p>//\u4F7F\u7528\u70B9\u79EF\u9A8C\u8BC1C\u662F\u5426\u4E0EA\u548CB\u5782\u76F4\u3002 dot(C,A)==0 &amp; dot(C,B)==0</p><p><img src="https://mir.yuelili.com/wp-content/uploads/user/AE/expression/exp-global14.bmp" alt=""><br> \u5177\u4F53\u53C9\u79EF\u8BF7\u767E\u5EA6</p><h2 id="normalize" tabindex="-1"><a class="header-anchor" href="#normalize" aria-hidden="true">#</a> normalize()</h2><p>\u5168\u540D\uFF1Anormalize(vec)</p><p>\u7C7B\u578B\uFF1A\u51FD\u6570</p><p>\u8BF4\u660E\uFF1A\u6807\u51C6\u5316\u77E2\u91CF\u4F7F\u5176\u957F\u5EA6\u4E3A 1\uFF0C\u52FE\u80A1\u5B9A\u7406\u4F1A\u7B97\u5427\u3002\u7B49\u4EF7\u4E8E div(vec, length(vec))</p><p>\u53C2\u6570\uFF1Avec \u662F\u6570\u7EC4</p><p>\u8FD4\u56DE\uFF1A\u6570\u7EC4</p><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token function">normalize</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//\u8FD4\u56DE[0.6,0.8] \u957F\u5EA6\u8BA1\u7B97 1\xB2=0.6\xB2+0.8\xB2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5168\u9009\u4EE3\u7801</p><p>\u590D\u5236</p><p><img src="https://mir.yuelili.com/wp-content/uploads/user/AE/expression/exp-global15.bmp?imageView2/1/w/778/h/754#" alt=""></p><h2 id="length" tabindex="-1"><a class="header-anchor" href="#length" aria-hidden="true">#</a> length()</h2><p>\u5168\u540D1\uFF1Alength(vec)</p><p>\u7C7B\u578B\uFF1A\u51FD\u6570</p><p>\u8BF4\u660E\uFF1A\u8FD4\u56DE\u77E2\u91CF vec\u7684\u957F\u5EA6</p><p>\u53C2\u6570\uFF1Avec \u662F\u6570\u7EC4</p><p>\u8FD4\u56DE\uFF1A\u6570\u503C</p><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//\u8FD4\u56DE5 \u52FE\u80A1\u5B9A\u7406</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5168\u9009\u4EE3\u7801</p><p>\u590D\u5236</p><p>\u5168\u540D2\uFF1Alength(point1,point2)</p><p>\u7C7B\u578B\uFF1A\u51FD\u6570</p><p>\u8BF4\u660E\uFF1A\u8FD4\u56DE\u4E24\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB\u3002\u7B49\u540C\u4E8E length(sub(point1, point2)</p><p>\u53C2\u6570\uFF1Apoint1 \u548C point2 \u662F\u6570\u7EC4\u3002point2 \u53C2\u6570\u53EF\u9009</p><p>\u8FD4\u56DE\uFF1A\u6570\u503C</p><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token function">length</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> pointOfInterest<span class="token punctuation">)</span> <span class="token comment">// \u5C06\u6B64\u8868\u8FBE\u5F0F\u6DFB\u52A0\u5230\u6444\u50CF\u673A\u7684\u7126\u8DDD\u5C5E\u6027\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7126\u5E73\u9762\u9501\u5B9A\u5230\u6444\u50CF\u673A\u7684\u76EE\u6807\u70B9\uFF0C\u4EE5\u4FBF\u76EE\u6807\u70B9\u5BF9\u51C6\u7126\u70B9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lookat" tabindex="-1"><a class="header-anchor" href="#lookat" aria-hidden="true">#</a> lookAt()</h2><p>\u5168\u540D\uFF1AlookAt(fromPoint,atPoint)</p><p>\u7C7B\u578B\uFF1A\u51FD\u6570</p><p>\u8BF4\u660E\uFF1A\u5982\u679C\u5BF9\u6444\u50CF\u673A\u4F7F\u7528\u6B64\u8868\u8FBE\u5F0F\uFF0C\u8BF7\u5173\u95ED\u81EA\u52A8\u65B9\u5411\u3002</p><p>\u53C2\u6570 fromPoint \u4E3A\u6570\u7EC4 [3]\u3002\u8981\u5B9A\u5411\u7684\u56FE\u5C42\u7684\u4E16\u754C\u7A7A\u95F4\u4E2D\u7684\u4F4D\u7F6E\u3002</p><p>\u53C2\u6570 atPoint \u4E3A\u6570\u7EC4 [3]\u3002\u8981\u5C06\u56FE\u5C42\u6307\u5411\u7684\u4E16\u754C\u7A7A\u95F4\u4E2D\u7684\u70B9\u3002</p><p>\u8FD4\u56DE\uFF1A\u6570\u7EC4 [3]\u3002\u8FD4\u56DE\u503C\u53EF\u7528\u4F5C&quot;\u65B9\u5411&quot;\u5C5E\u6027\u7684\u8868\u8FBE\u5F0F\uFF0C\u4F7F\u56FE\u5C42\u70B9\u7684 z \u8F74\u6307\u5411 atPoint\u3002\u6B64\u65B9\u6CD5\u5BF9\u6444\u50CF\u673A\u548C\u5149\u7167\u7279\u522B\u6709\u7528\u3002</p><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">lookAt</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> thisComp<span class="token punctuation">.</span><span class="token function">layer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>position<span class="token punctuation">)</span> <span class="token comment">// \u805A\u5149\u706F\u7684\u65B9\u5411\u5C5E\u6027\u7684\u4EE5\u4E0B\u8868\u8FBE\u5F0F\u4F1A\u5C06\u5149\u70B9\u6307\u5411\u540C\u4E00\u5408\u6210\u4E2D\u7684 1 \u53F7\u56FE\u5C42\u7684\u951A\u70B9</span>
<span class="token function">lookAt</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span>thisComp<span class="token punctuation">.</span><span class="token function">layer</span><span class="token punctuation">(</span><span class="token string">&quot;Light 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>transform<span class="token punctuation">.</span>position<span class="token punctuation">)</span> <span class="token comment">//\u7ED93D\u7EAF\u8272\u56FE\u5C42\u7684orientation\u5C5E\u6027\u6DFB\u52A0\u8868\u8FBE\u5F0F\u540E\uFF0C\u56FE\u5C42\u548C\u706F\u5149\u7684z\u8F74\u671D\u5411\u4E00\u81F4\u3002\u79FB\u52A8\u706F\u5149\uFF0C\u56FE\u5C42\u4E5F\u4E00\u76F4\u9762\u671D\u5411\u706F\u5149</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5173\u4E8E\u4E16\u754C\u7A7A\u95F4\u3001\u56FE\u5C42\u7A7A\u95F4\u8BE6\u89C1tocomp</p>`,121),c=[e];function o(i,u){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","2.Vector \u77E2\u91CF\u6570\u5B66.html.vue"]]);export{d as default};
