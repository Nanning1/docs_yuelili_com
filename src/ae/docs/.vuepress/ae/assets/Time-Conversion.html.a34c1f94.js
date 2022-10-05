import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,a as s,b as n,d as e,e as t,r as l}from"./app.75ca2a8e.js";const c={},r=t(`<p>::: danger</p><p>\u5982\u679C\u60A8\u9700\u8981\u5BF9\u7D20\u6750\u4E2D\u7684\u65F6\u95F4\u7801\u5916\u89C2\u8FDB\u884C\u66F4\u591A\u63A7\u5236\uFF0C\u8BF7\u4F7F\u7528 timeToCurrentFormat \u65B9\u6CD5\u6216\u5176\u4ED6 timeTo \u65B9\u6CD5\u751F\u6210\u65F6\u95F4\u7801\uFF0C\u800C\u975E\u4F7F\u7528\u65F6\u95F4\u7801\u6216\u7F16\u53F7\u6548\u679C\u3002\u521B\u5EFA\u6587\u672C\u56FE\u5C42\uFF0C\u5411\u6E90\u6587\u672C\u5C5E\u6027\u6DFB\u52A0\u8868\u8FBE\u5F0F\uFF0C\u5E76\u5728\u8868\u8FBE\u5F0F\u5B57\u6BB5\u4E2D\u8F93\u5165 timeToCurrentFormat()\u3002<br> \u4F7F\u7528\u6B64\u65B9\u6CD5\uFF0C\u60A8\u53EF\u4EE5\u5BF9\u65F6\u95F4\u7801\u6587\u672C\u8FDB\u884C\u683C\u5F0F\u8BBE\u7F6E\u4EE5\u53CA\u52A8\u753B\u5236\u4F5C\u3002\u6B64\u5916\uFF0C\u65F6\u95F4\u7801\u4F7F\u7528\u5F53\u524D\u7684\u9879\u76EE\u8BBE\u7F6E\u5B9A\u4E49\u7684\u540C\u4E00\u663E\u793A\u6837\u5F0F\u3002 :::</p><h2 id="isduration-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#isduration-\u53C2\u6570" aria-hidden="true">#</a> isDuration \u53C2\u6570</h2><p>\u5982\u679C\u4E3A true\uFF0C\u5219\u65F6\u95F4\u4E3A\u7EDD\u5BF9\u65F6\u95F4\uFF08\u4ECE\u7B2C 0 \u5E27\u5F00\u59CB\u8BA1\u7B97\uFF09\u3002\u5982\u679C\u4E3A false\uFF08\u9ED8\u8BA4\u503C\uFF09\uFF0C\u5219\u4ECE\u9879\u76EE\u5F00\u59CB\u5E27\u5F00\u59CB\u8BA1\u7B97\u65F6\u95F4\uFF08\u9879\u76EE\u5F00\u59CB\u5E27\u53EF\u4EE5\u5728\u9879\u76EE\u8BBE\u7F6E-Frame Count \u5904\u8FDB\u884C\u8BBE\u7F6E\uFF09\u3002\u4E8E\u6B64\u540C\u65F6\uFF0C\u65F6\u95F4\u7684\u7EDD\u5BF9\u503C\u4F1A\u5411\u5C0F\u4E8E 0 \u7684\u65B9\u5411\u53D6\u503C</p><p>\u793A\u4F8B 1\uFF1A\u65F6\u95F4\u4E3A\u6B63\uFF0C\u8D77\u59CB\u5E27\u4E3A 0 \u5E27</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">timeToFrames</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">29.97</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>isDuration <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8FD4\u56DE30\uFF0C\u56E0\u4E3AtimeToFrames\u53D6\u6574\u6570\uFF0C29.97\u7B9730</span>
<span class="token function">timeToFrames</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">29.97</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>isDuration <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8FD4\u56DE29\uFF0C\u56E0\u4E3AtimeToFrames\u53D6\u6574\u6570\uFF0C29.97 &gt; 0\uFF0C\u9700\u8981\u5411\u63A5\u8FD10\u7684\u65B9\u5411\u53D6\u6574\uFF0C\u6240\u4EE5\u4E3A29</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B 2\uFF1A\u65F6\u95F4\u4E3A\u8D1F\uFF0C\u8D77\u59CB\u5E27\u4E3A 1 \u5E27</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">timeToFrames</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">29.97</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>isDuration <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8FD4\u56DE-30\uFF0C\u56E0\u4E3AtimeToFrames\u53D6\u6574\u6570\uFF0C-29.97\u7B97-30</span>
<span class="token function">timeToFrames</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">29.97</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>isDuration <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8FD4\u56DE-29\uFF0C\u56E0\u4E3AtimeToFrames\u53D6\u6574\u6570\uFF0C29.97 &lt; 0\uFF0C\u9700\u8981\u5411\u63A5\u8FD10\u7684\u65B9\u5411\u53D6\u6574\uFF0C\u6240\u4EE5\u4E3A-29</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://mir.yuelili.com/wp-content/uploads/user/AE/expression/a-z/isDuration1.png" alt=""></p><p><img src="https://mir.yuelili.com/wp-content/uploads/user/AE/expression/a-z/isDuration2.png" alt=""></p><h2 id="timetoframes" tabindex="-1"><a class="header-anchor" href="#timetoframes" aria-hidden="true">#</a> timeToFrames()</h2><p>\u7528\u6CD5\uFF1AtimeToFrames(t= time + thisComp.displayStartTime, fps = 1.0 / thisComp.frameDuration,isDuration = false)</p><p>\u8BF4\u660E\uFF1A\u5C06\u9ED8\u8BA4\u4E3A\u5F53\u524D\u5408\u6210\u65F6\u95F4\u7684 t \u8F6C\u6362\u4E3A<strong>\u6574\u6570</strong>\u5E27\u6570\u3002\u5F97\u51FA\u7684\u503C\u4E3A\u62EC\u53F7\u91CC\u9762\u7684\u4E24\u4E2A\u6570(t \u548C fps)\u76F8\u4E58\u3010\u65F6\u95F4*\u5E27\u901F\u7387=\u5E27\u6570\u3011</p><p>\u53C2\u6570\uFF1A</p><ul><li>t \uFF0C\u6570\u503C\uFF0C\u9ED8\u8BA4\u503C\u4E3A time + thisComp.displayStartTime\uFF0C\u8868\u793A\u5F53\u524D\u65F6\u95F4+\u5408\u6210\u8D77\u59CB\u65F6\u95F4</li><li>fps\uFF1A\u6BCF\u79D2\u7684\u5E27\u6570\uFF0C\u4E5F\u5C31\u662F\u5408\u6210\u7684\u5E27\u901F\u7387(\u4E5F\u5C31\u662F 1 \u79D2\u9664\u4EE5\u5F53\u524D\u5408\u6210\u5355\u5E27\u6301\u7EED\u65F6\u95F4)</li><li>frameDuration: \u5355\u5E27\u6301\u7EED\u65F6\u95F4</li><li>isDuration \uFF0Cfalse \u5219\u91C7\u53D6\u4E22\u5E27\u65B9\u6848\uFF0Ctrue \u5219\u4F7F\u7528\u6B63\u5E38\u5E27\u3002</li></ul><p>\u7C7B\u578B\uFF1A\u6570\u503C</p><p>\u793A\u4F8B\uFF1A\u4E0B\u56FE\u8868\u793A\u5728 3s \u65F6\u95F4\u70B9\uFF0C\u8FD4\u56DE\u672C\u5408\u6210\uFF0829.97fps\uFF09\u4F4D\u4E8E 3s \u7684\u5E27\u6570\uFF1A90 \u5E27</p><p><img src="https://mir.yuelili.com/wp-content/uploads/user/AE/expression/exp-global3.png?imageView2/1/w/2332/h/526#" alt=""></p><h2 id="framestotime" tabindex="-1"><a class="header-anchor" href="#framestotime" aria-hidden="true">#</a> framesToTime()</h2><p>\u7528\u6CD5\uFF1AframesToTime(frames, fps = 1.0 /thisComp.frameDuration)</p><p>\u8BF4\u660E\uFF1A\u628A\u5E27\u6570\u8F6C\u4E3A\u65F6\u95F4</p><p>\u53C2\u6570\uFF1A</p><ul><li>frames \u4E3A\u8981\u8F6C\u6362\u7684\u5E27\u6570\u3002</li><li>fps \u4E3A\u6BCF\u79D2\u7684\u5E27\u6570\uFF0C\u9ED8\u8BA4\u4E3A\u5F53\u524D\u5408\u6210\u7684\u5E27\u901F\u7387\u30101 \u79D2/\u5355\u5E27\u6301\u7EED\u65F6\u95F4=\u5E27\u901F\u7387\u3011</li></ul><p>\u7C7B\u578B\uFF1A\u4E0E frames \u53C2\u6570\u5BF9\u5E94\u7684\u65F6\u95F4\u503C\u3002\u4E0D\u4E00\u5B9A\u662F\u6574\u6570\u3002\u3010\u5E27\u6570/\u5E27\u901F\u7387=\u65F6\u95F4\u3011</p><p>\u793A\u4F8B\uFF1A\u672C\u5408\u6210\uFF0830fps\uFF09\u5728 90 \u5E27\uFF08frames=90\uFF09\u8FD4\u56DE\u7684\u79D2\u6570\uFF0C\u5373 3s</p><p><img src="https://mir.yuelili.com/wp-content/uploads/user/AE/expression/exp-global4.png?imageView2/1/w/1926/h/284#" alt=""></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">framesToTime</span><span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="timetotimecode" tabindex="-1"><a class="header-anchor" href="#timetotimecode" aria-hidden="true">#</a> timeToTimecode()</h2><p>\u7528\u6CD5\uFF1AtimeToTimecode(t= time + thisComp.displayStartTime, timecodeBase = 30, isDuration =false)</p><p>\u8BF4\u660E\uFF1A\u5C06 t \u7684\u503C\u8F6C\u6362\u4E3A\u8868\u793A\u65F6\u95F4\u7801\u7684\u5B57\u7B26\u4E32\u3002</p><p>\u53C2\u6570\uFF1A</p>`,31),u=s("li",null,[s("p",null,"t \u7528\u4E8E\u8F6C\u6362\u7684\u503C\uFF08\u65F6\u95F4\uFF09")],-1),m=s("li",null,[s("p",null,"displayStartTime: \u5408\u6210\u8D77\u59CB\u65F6\u95F4")],-1),d=s("li",null,[s("p",null,"timecodeBase\uFF1A \u7528\u4E8E\u8BBE\u7F6E\u6BEB\u79D2\u7684\u663E\u793A\u65B9\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A 30\uFF0C\u4EE3\u8868 1 \u79D2\u663E\u793A 30 \u5E27\u3002\u6700\u5927\u4E3A 999\u3002\u5EFA\u8BAE\u8FD8\u662F\u6839\u636E\u5408\u6210\u7684\u5E27\u7387\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u5373 1.0 /thisComp.frameDuration")],-1),k={href:"https://mir.yuelili.com/docs/expression_ae/expression-global#isduration%e5%8f%82%e6%95%b0",target:"_blank",rel:"noopener noreferrer"},h=t(`<p>\u7C7B\u578B\uFF1A\u5B57\u7B26\u4E32</p><p>\u793A\u4F8B 1\uFF1AtimecodeBase \u53C2\u6570\u8BF4\u660E</p><p><img src="https://mir.yuelili.com/wp-content/uploads/user/AE/expression/a-z/timecodeBase.png" alt=""></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">timeToTimecode</span><span class="token punctuation">(</span>t<span class="token operator">=</span> time <span class="token operator">+</span> thisComp<span class="token punctuation">.</span>displayStartTime<span class="token punctuation">,</span> timecodeBase <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span> isDuration <span class="token operator">=</span><span class="token boolean">false</span>
<span class="token number">20</span>\u5E27\u7684<span class="token number">3</span><span class="token operator">:</span><span class="token number">01</span>\u5728\u6B64\u523B\u663E\u793A\u4E3A<span class="token number">3</span><span class="token operator">:</span><span class="token number">05</span>\uFF0C\u4E0D\u96BE\u7406\u89E3\uFF0CtimecodeBase\u4E3A<span class="token number">100</span>\u65F6\uFF0C\u539F\u5148\u4E00\u79D2\u663E\u793A<span class="token number">20</span>\u5E27\uFF0C\u73B0\u5728\u663E\u793A<span class="token number">100</span>\u5E27\u3002\u539F\u5148<span class="token number">01</span>\u5E27\uFF0C\u73B0\u5728\u5C31\u663E\u793A<span class="token number">05</span>\u5E27\u54AF\u3002
\u518D\u4E3E\u4E2A\u4F8B\u5B50\uFF1A<span class="token number">1</span>\u5206\u949F<span class="token operator">=</span><span class="token number">60</span>\u79D2\uFF0C\u76F8\u5F53\u4E8E<span class="token number">60</span>\u7684\u5E27\u7387\uFF0C\u5982\u679C\u5B89\u5230\u767E\u8FDB\u5236\u4E0A\uFF08<span class="token number">100</span>\u5E27\u7387\uFF09\uFF0C\u90A3\u539F\u6765\u7684<span class="token number">30</span>\u79D2\uFF0C\u76F8\u5F53\u4E8E\u767E\u8FDB\u5236\u7684<span class="token number">50</span>\u79D2\u54AF\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B 2\uFF1A\u4E0B\u56FE\u8868\u793A\u5408\u6210\u4E3A 30fps \u7684 3:18 \u5206\u7684\u65F6\u95F4\u7801</p><p><img src="https://mir.yuelili.com/wp-content/uploads/user/AE/expression/exp-global5.png?imageView2/1/w/2026/h/434#" alt=""></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">timeToTimecode</span><span class="token punctuation">(</span><span class="token punctuation">(</span>t <span class="token operator">=</span> time <span class="token operator">+</span> thisComp<span class="token punctuation">.</span>displayStartTime<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>timecodeBase <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>isDuration <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u89C1\u4E0A</span>
<span class="token function">timeToTimecode</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7B80\u7565\u5199\u6CD5\uFF1A\u8FD4\u56DE00:00:03:00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="timetontsctimecode" tabindex="-1"><a class="header-anchor" href="#timetontsctimecode" aria-hidden="true">#</a> timeToNTSCTimecode()</h2><p>\u7528\u6CD5\uFF1AtimeToNTSCTimecode(t= time + thisComp.displayStartTime, ntscDropFrame = false, isDuration =false)</p><p>\u8BF4\u660E\uFF1A\u5C06 t \u8F6C\u6362\u4E3A\u8868\u793A NTSC \u65F6\u95F4\u7801\u7684\u5B57\u7B26\u4E32</p><p>\u53C2\u6570\uFF1A</p>`,11),b=s("li",null,[s("p",null,"1\uFF1A t \uFF0C\u6570\u503C\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u503C time + thisComp.displayStartTime \u4E3A\u5F53\u524D\u65F6\u95F4")],-1),f=s("li",null,[s("p",null,"2\uFF1AntscDropFrame \u4E3A False\uFF08\u9ED8\u8BA4\u503C\uFF09\uFF0C\u7528\u4E8E\u4E22\u5E27\u4E0E\u5426\u3002")],-1),_={href:"https://mir.yuelili.com/docs/expression_ae/expression-global#isduration%e5%8f%82%e6%95%b0",target:"_blank",rel:"noopener noreferrer"},v=s("li",null,[s("p",null,"4\uFF1A\u6709\u5173 NTSC \u5236\u8BF7\u81EA\u884C\u767E\u5EA6")],-1),g=t(`<p>\u7C7B\u578B\uFF1A\u5B57\u7B26\u4E32</p><p>\u793A\u4F8B\uFF1A\u4E0B\u56FE\u8868\u793A 30fps \u7684 3:18 \u5206\u7684\u65F6\u95F4\u7801\uFF0C\u7531\u4E8E\u9009\u62E9\u672A\u4E22\u5E27\uFF0C\u6240\u4EE5\u8FD4\u56DE 00:00:03:17</p><p><img src="https://mir.yuelili.com/wp-content/uploads/user/AE/expression/exp-global6.png?imageView2/1/w/2050/h/452#" alt=""></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">timeToNTSCTimecode</span><span class="token punctuation">(</span><span class="token punctuation">(</span>t <span class="token operator">=</span> time <span class="token operator">+</span> thisComp<span class="token punctuation">.</span>displayStartTime<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ntscDropFrame <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>isDuration <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u89C1\u4E0A</span>
<span class="token function">timeToNTSCTimecode</span><span class="token punctuation">(</span><span class="token number">3.6</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ntscDropFrame <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>isDuration <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u53EF\u4EE5\u76F4\u63A5\u75283.6\u8868\u793A3:18 (30\u5E27/s*0.6\u79D2=18\u5E27)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="timetofeetandframes" tabindex="-1"><a class="header-anchor" href="#timetofeetandframes" aria-hidden="true">#</a> timeToFeetAndFrames()</h2><p>\u7528\u6CD5\uFF1AtimeToFeetAndFrames(t= time + thisComp.displayStartTime, fps = 1.0 / thisComp.frameDuration,framesPerFoot = 16, isDuration = false)</p><p>\u8BF4\u660E\uFF1A\u5C06 t \u7684\u503C\u8F6C\u6362\u4E3A\u8868\u793A\u80F6\u7247\u548C\u5E27\u82F1\u5C3A\u6570\u7684\u5B57\u7B26\u4E32\u3002</p><p>\u53C2\u6570\uFF1A</p>`,8),T=s("li",null,[s("p",null,"t \uFF0C\u6570\u503C\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u503C time + thisComp.displayStartTime \u4E3A\u5F53\u524D\u65F6\u95F4")],-1),x=s("li",null,[s("p",null,"displayStartTime: \u5408\u6210\u8D77\u59CB\u65F6\u95F4")],-1),D=s("li",null,[s("p",null,"fps\uFF1A\u8BBE\u5B9A\u6BCF\u79D2\u7684\u5E27\u6570\uFF0C\u9ED8\u8BA4\u4E3A\u5F53\u524D\u5408\u6210\u7684\u5E27\u901F\u7387(\u4E5F\u5C31\u662F 1.0/thisComp.frameDuration)")],-1),C=s("li",null,[s("p",null,"frameDuration: \u5355\u5E27\u6301\u7EED\u65F6\u95F4")],-1),F=s("li",null,[s("p",null,"framesPerFoot \u53C2\u6570\u6307\u5B9A\u4E00\u82F1\u5C3A\u80F6\u7247\u4E2D\u7684\u5E27\u6570\u3002\u5B83\u9ED8\u8BA4\u4E3A 16\uFF0C\u662F 35 \u6BEB\u7C73\u7D20\u6750\u7684\u6700\u5E38\u89C1\u901F\u7387\u3002")],-1),y={href:"https://mir.yuelili.com/docs/expression_ae/expression-global#isduration%e5%8f%82%e6%95%b0",target:"_blank",rel:"noopener noreferrer"},w=t(`<p>\u7C7B\u578B\uFF1A\u5B57\u7B26\u4E32</p><p>\u793A\u4F8B\uFF1A\u4E0B\u56FE\u8868\u793A 30fps \u7684 3:18 \u5206\u7684\u80F6\u7247\u548C\u5E27\u82F1\u5C3A\u6570</p><p><img src="https://mir.yuelili.com/wp-content/uploads/user/AE/expression/exp-global7.png?imageView2/1/w/1964/h/432#" alt=""></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">timeToFeetAndFrames</span><span class="token punctuation">(</span><span class="token punctuation">(</span>t <span class="token operator">=</span> time <span class="token operator">+</span> thisComp<span class="token punctuation">.</span>displayStartTime<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>fps <span class="token operator">=</span> <span class="token number">1.0</span> <span class="token operator">/</span> thisComp<span class="token punctuation">.</span>frameDuration<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>framesPerFoot <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>isDuration <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5168\u90FD\u7528\u8868\u8FBE\u5F0F\u8868\u793A</span>
<span class="token function">timeToFeetAndFrames</span><span class="token punctuation">(</span><span class="token number">3.6</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7528\u5177\u4F53\u6570\u503C\u8868\u793A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="timetocurrentformat" tabindex="-1"><a class="header-anchor" href="#timetocurrentformat" aria-hidden="true">#</a> timeToCurrentFormat()</h2><p>\u7528\u6CD5\uFF1AtimeToCurrentFormat(t= time + thisComp.displayStartTime, fps = 1.0 / thisComp.frameDuration,isDuration = false, ntscDropFrame =thisComp.ntscDropFrame)</p><p>\u8BF4\u660E\uFF1A\u5C06 t \u7684\u503C\u8F6C\u6362\u4E3A\u8868\u793A\u91C7\u7528\u5F53\u524D\u9879\u76EE\u8BBE\u7F6E\u663E\u793A\u683C\u5F0F\u7684\u65F6\u95F4\u7684\u5B57\u7B26\u4E32\u3002\u9879\u76EE\u8BBE\u7F6E\u663E\u793A\u683C\u5F0F\uFF1A\u5C31\u662F\u5DE6\u4E0A\u89D2\u90A3\u4E2A\u65F6\u95F4\u7801\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u5E27\u6570\u663E\u793A,\u6216\u8005\u65F6\u95F4\u7801\u663E\u793A\uFF08\u6309\u4F4F ctrl \u9F20\u6807\u5355\u51FB\u5207\u6362\uFF09</p><p>\u53C2\u6570</p>`,8),S=s("li",null,[s("p",null,"t \uFF0C\u6570\u503C\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u503C time + thisComp.displayStartTime \u4E3A\u5F53\u524D\u65F6\u95F4")],-1),j=s("li",null,[s("p",null,"displayStartTime: \u5408\u6210\u8D77\u59CB\u65F6\u95F4")],-1),A=s("li",null,[s("p",null,"fps\uFF1A\u8BBE\u5B9A\u6BCF\u79D2\u7684\u5E27\u6570\uFF0C\u9ED8\u8BA4\u4E3A\u5F53\u524D\u5408\u6210\u7684\u5E27\u901F\u7387(\u4E5F\u5C31\u662F 1.0/thisComp.frameDuration)")],-1),E=s("li",null,[s("p",null,"frameDuration: \u5355\u5E27\u6301\u7EED\u65F6\u95F4")],-1),V={href:"https://mir.yuelili.com/docs/expression_ae/expression-global#isduration%e5%8f%82%e6%95%b0",target:"_blank",rel:"noopener noreferrer"},B=s("li",null,[s("p",null,"\u9ED8\u8BA4\u503C\uFF1AntscDropFrame = thisComp.ntscDropFrame(\u5F53\u524D\u5408\u6210\u6709\u65E0\u4E22\u5E27,\u6BD4\u5982 29.97)")],-1),N=s("p",null,"\u7C7B\u578B\uFF1A\u5B57\u7B26\u4E32",-1),z=s("p",null,"\u793A\u4F8B 1\uFF1A\u4E0B\u56FE\u8868\u793A\u5F53\u524D\u65F6\u95F4\u683C\u5F0F\uFF08\u65F6\u95F4\u7801\u663E\u793A\uFF09",-1),P=s("p",null,[s("img",{src:"https://mir.yuelili.com/wp-content/uploads/user/AE/expression/exp-global8.png?imageView2/1/w/2024/h/380#",alt:""})],-1),I=s("p",null,"\u793A\u4F8B 2\uFF1A\u4E0B\u56FE\u8868\u793A\u5F53\u524D\u65F6\u95F4\u683C\u5F0F\uFF08\u5E27\u663E\u793A\uFF09",-1),L=s("p",null,[s("img",{src:"https://mir.yuelili.com/wp-content/uploads/user/AE/expression/exp-global12.bmp?imageView2/1/w/2364/h/438#",alt:""})],-1);function q(G,H){const a=l("ExternalLinkIcon");return o(),i("div",null,[r,s("ul",null,[u,m,d,s("li",null,[s("p",null,[n("isDuration \uFF0Cfalse \u5219\u91C7\u53D6\u4E22\u5E27\u65B9\u6848\uFF0Ctrue \u5219\u4F7F\u7528\u6B63\u5E38\u5E27\u3002"),s("a",k,[n("\u6233\u6211\u67E5\u770B\u8BE6\u7EC6\u539F\u7406"),e(a)])])])]),h,s("ul",null,[b,f,s("li",null,[s("p",null,[n("3\uFF1AisDuration \uFF0Cfalse \u5219\u91C7\u53D6\u4E22\u5E27\u65B9\u6848\uFF0Ctrue \u5219\u4F7F\u7528\u6B63\u5E38\u5E27\u3002"),s("a",_,[n("\u6233\u6211\u67E5\u770B\u8BE6\u7EC6\u539F\u7406"),e(a)])])]),v]),g,s("ul",null,[T,x,D,C,F,s("li",null,[s("p",null,[n("isDuration \uFF0Cfalse \u5219\u91C7\u53D6\u4E22\u5E27\u65B9\u6848\uFF0Ctrue \u5219\u4F7F\u7528\u6B63\u5E38\u5E27\u3002"),s("a",y,[n("\u6233\u6211\u67E5\u770B\u8BE6\u7EC6\u539F\u7406"),e(a)]),n("\u3002")])])]),w,s("ul",null,[S,j,A,E,s("li",null,[s("p",null,[n("isDuration \uFF0Cfalse \u5219\u91C7\u53D6\u4E22\u5E27\u65B9\u6848\uFF0Ctrue \u5219\u4F7F\u7528\u6B63\u5E38\u5E27\u3002"),s("a",V,[n("\u6233\u6211\u67E5\u770B\u8BE6\u7EC6\u539F\u7406"),e(a)])])]),B]),N,z,P,I,L])}const M=p(c,[["render",q],["__file","Time-Conversion.html.vue"]]);export{M as default};