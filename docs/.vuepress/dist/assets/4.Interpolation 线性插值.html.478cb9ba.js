import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as o,a,b as t,f as s,d as n,r as i}from"./app.3f77d9f1.js";const c={},u=s(`<h2 id="linear" tabindex="-1"><a class="header-anchor" href="#linear" aria-hidden="true">#</a> linear()</h2><p>\u5168\u540D\uFF1Alinear(t, value1, value2)\u6216linear(t,tMin,tMax,value1, value2)</p><p>\u7C7B\u578B\uFF1A\u51FD\u6570</p><p>\u8BF4\u660E1\uFF1Alinear(t, value1, value2)</p><p>\u5F53 t &lt;= 0 \u65F6\uFF0C\u8FD4\u56DE value1\u3002<br> \u5F53 t \u4ECB\u4E8E 0 \u5230 1 \u65F6\uFF0C\u8FD4\u56DE\u4ECE value1 \u5230 value2 \u7684\u7EBF\u6027\u63D2\u503C\u3002<br> \u5F53 t &gt;= 1 \u65F6\uFF0C\u8FD4\u56DE value2\u3002</p><p>\u8BF4\u660E2\uFF1Alinear(t,tMin,tMax,value1, value2)</p><p>\u5F53 t &lt;= tMin \u65F6\uFF0C\u8FD4\u56DE value1\u3002<br> \u5F53 t \u4ECB\u4E8E tMin\u5230 tMax \u65F6\uFF0C\u8FD4\u56DE\u4ECE value1 \u5230 value2 \u7684\u7EBF\u6027\u63D2\u503C\u3002<br> \u5F53 t &gt;= tMax \u65F6\uFF0C\u8FD4\u56DE value2\u3002</p><p>\u53C2\u6570\uFF1At \u662F\u6570\u503C\uFF0Cvalue1 \u548C value2 \u662F\u6570\u503C\u6216\u6570\u7EC4</p><p>\u8FD4\u56DE\uFF1A\u6570\u503C\u6216\u6570\u7EC4</p><p>\u56FE\u793A\uFF1A\u5F53t\u53D6time\u65F6(\u4EE5\u79D2\u8BB0)</p><p><img src="https://mir.yuelili.com/wp-content/uploads/user/docs/exp-a-z/exp-linear.png" alt=""></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">linear</span><span class="token punctuation">(</span><span class="token number">0.33</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token comment">//\u8FD4\u56DE16.6 \u6570\u5B66\u89E3\u91CA(\u7EBF\u6027\u63D2\u503C): 10*0.33 + (30-10)*(1-0.33) = 16.6\u3002\u56FE\u5F62\u89E3\u91CA:\u628Avalue1=10,value2=30,t=10\u5E27\u5E26\u5165\u4E0A\u56FE\uFF0C\u8FD4\u56DE10f\u7684value\u503C</span>
<span class="token function">linear</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token comment">//\u8FD4\u56DE30 </span>
<span class="token function">linear</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//\u8FD4\u56DE[55,115] \u5404\u4E2A\u5143\u7D20\u5355\u72EC\u8BA1\u7B97\u63D2\u503C,55=100\u3002</span>
<span class="token function">linear</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span> <span class="token comment">//\u8FD4\u56DE150\u300220\u5904\u4E8E10\u548C30\u4E2D\u95F4\uFF0C\u6240\u4EE5\u7ED3\u679C\u4E3A100\u548C200\u4E2D\u95F4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ease" tabindex="-1"><a class="header-anchor" href="#ease" aria-hidden="true">#</a> ease()</h2><p>\u5168\u540D\uFF1Aease(t, value1, value2)\u6216ease(t, tMin, tMax, value1, value2)</p><p>\u7C7B\u578B\uFF1A\u51FD\u6570</p>`,15),r=n("\u8BF4\u660E\uFF1A\u4E0E"),d={href:"https://expression.yuelili.fun/interpolation.html#linear()",target:"_blank",rel:"noopener noreferrer"},v=n("linear()\u51FD\u6570"),k=n("\u4E00\u6837\uFF0C\u53EA\u4E0D\u8FC7\u5728tMin\u548CtMax\u70B9\u5904\uFF0C\u8FDB\u884C\u7F13\u5165\u7F13\u51FA\uFF0C\u4F7F\u6570\u636E\u66F4\u52A0\u5E73\u6ED1"),m=s(`<p>\u53C2\u6570\uFF1At\u3001tMin \u548C tMax \u662F\u6570\u503C\uFF0Cvalue1 \u548C value2\u662F\u6570\u503C\u6216\u6570\u7EC4</p><p>\u8FD4\u56DE\uFF1A\u65B0\u7684\u6570\u5B57\u6216\u6570\u7EC4</p><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">\u8BE6\u89C1linear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\u51FD\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="easein" tabindex="-1"><a class="header-anchor" href="#easein" aria-hidden="true">#</a> easeIn()</h2><p>\u5168\u540D\uFF1AeaseIn(t, value1, value2)\u6216easeIn(t, tMin, tMax, value1, value2)</p><p>\u7C7B\u578B\uFF1A\u51FD\u6570</p>`,7),h=n("\u8BF4\u660E\uFF1A\u4E0E"),_={href:"https://expression.yuelili.fun/interpolation.html#linear()",target:"_blank",rel:"noopener noreferrer"},b=n("linear()\u51FD\u6570"),x=n("\u4E00\u6837\uFF0C\u53EA\u4E0D\u8FC7\u5728tMin\u5904\uFF0C\u8FDB\u884C\u7F13\u5165\uFF0C\u4F7F\u6570\u636E\u66F4\u52A0\u5E73\u6ED1"),f=s(`<p>\u53C2\u6570\uFF1At\u3001tMin \u548C tMax \u662F\u6570\u503C\uFF0Cvalue1 \u548C value2\u662F\u6570\u503C\u6216\u6570\u7EC4</p><p>\u8FD4\u56DE\uFF1A\u65B0\u7684\u6570\u5B57\u6216\u6570\u7EC4</p><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">\u8BE6\u89C1linear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\u51FD\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="easeout" tabindex="-1"><a class="header-anchor" href="#easeout" aria-hidden="true">#</a> easeOut()</h2><p>\u5168\u540D\uFF1AeaseOut(t, value1, value2)\u6216easeOut(t, tMin, tMax, value1, value2)</p><p>\u7C7B\u578B\uFF1A\u51FD\u6570</p>`,7),M=n("\u8BF4\u660E\uFF1A\u4E0E"),g={href:"https://expression.yuelili.fun/interpolation.html#linear()",target:"_blank",rel:"noopener noreferrer"},j=n("linear()\u51FD\u6570"),I=n("\u4E00\u6837\uFF0C\u53EA\u4E0D\u8FC7\u5728tMax\u70B9\u5904\uFF0C\u8FDB\u884C\u7F13\u51FA\uFF0C\u4F7F\u6570\u636E\u66F4\u52A0\u5E73\u6ED1"),y=s(`<p>\u53C2\u6570\uFF1At\u3001tMin \u548C tMax \u662F\u6570\u503C\uFF0Cvalue1 \u548C value2\u662F\u6570\u503C\u6216\u6570\u7EC4</p><p>\u8FD4\u56DE\uFF1A\u65B0\u7684\u6570\u5B57\u6216\u6570\u7EC4</p><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">\u8BE6\u89C1linear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\u51FD\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4);function N(V,B){const e=i("ExternalLinkIcon");return l(),o("div",null,[u,a("p",null,[r,a("a",d,[v,t(e)]),k]),m,a("p",null,[h,a("a",_,[b,t(e)]),x]),f,a("p",null,[M,a("a",g,[j,t(e)]),I]),y])}const L=p(c,[["render",N],["__file","4.Interpolation \u7EBF\u6027\u63D2\u503C.html.vue"]]);export{L as default};
