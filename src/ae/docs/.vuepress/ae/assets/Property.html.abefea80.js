import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,b as a,d as p,e,r as i}from"./app.75ca2a8e.js";const l={},u=e(`<h2 id="value" tabindex="-1"><a class="header-anchor" href="#value" aria-hidden="true">#</a> value</h2><p>\u7528\u6CD5\uFF1AXX.value</p><p>\u8BF4\u660E\uFF1A\u8FD4\u56DE\u67D0\u5C5E\u6027\u5728\u5F53\u524D\u65F6\u95F4\u7684\u503C</p><p>\u53C2\u6570\uFF1A\u65E0</p><p>\u7C7B\u578B\uFF1A\u6839\u636E\u5C5E\u6027</p><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>thisComp<span class="token punctuation">.</span><span class="token function">layer</span><span class="token punctuation">(</span><span class="token string">&quot;Solid 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>transform<span class="token punctuation">.</span>position<span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">//\u8FD4\u56DE\u4F4D\u7F6E\u503C[960,540]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="valueattime-t" tabindex="-1"><a class="header-anchor" href="#valueattime-t" aria-hidden="true">#</a> valueAtTime(t)</h2><p>\u7528\u6CD5\uFF1AvalueAtTime(t=time)</p><p>\u53C2\u6570\uFF1At \u662F\u6570\u503C\u3002</p><p>\u8BF4\u660E\uFF1A\u5C5E\u6027\u5728\u6307\u5B9A\u65F6\u95F4\uFF08\u4EE5\u79D2\u4E3A\u5355\u4F4D\uFF09\u7684\u503C\u3002</p><p>\u7C7B\u578B\uFF1A\u6570\u503C\u6216\u6570\u7EC4\u3002</p><p>\u4F8B\u5982\uFF0C\u8981\u4ECE\u4E00\u7EC4\uFF08\u56DB\u4E2A\uFF09\u503C\u4E2D\u968F\u673A\u9009\u62E9\u6BCF\u4E2A\u5E27\u7684\u5C5E\u6027\u503C\uFF0C\u8BF7\u5728 0\u30011\u30012 \u548C 3 \u79D2\u5C06\u60A8\u7684\u56DB\u4E2A\u503C\u8BBE\u4E3A\u5173\u952E\u5E27\uFF0C\u7136\u540E\u5C06\u4EE5\u4E0B\u8868\u8FBE\u5F0F\u5E94\u7528\u4E8E\u8BE5\u5C5E\u6027\uFF1A</p><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>thisComp<span class="token punctuation">.</span><span class="token function">layer</span><span class="token punctuation">(</span><span class="token string">&quot;Solid 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>transform<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">valueAtTime</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8FD4\u56DE\u4F4D\u7F6E\u7B2C2\u79D2\u7684\u4F4D\u7F6E\u503C</span>
thisComp<span class="token punctuation">.</span><span class="token function">layer</span><span class="token punctuation">(</span><span class="token string">&quot;Solid 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>transform<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">valueAtTime</span><span class="token punctuation">(</span>time <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u4F4D\u7F6E\u7684\u5EF6\u8FDF\u52A8\u753B</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="velocity" tabindex="-1"><a class="header-anchor" href="#velocity" aria-hidden="true">#</a> velocity</h2><p>\u8BF4\u660E\uFF1A\u67D0\u5C5E\u6027\u7684\u901F\u5EA6\u503C</p><p>\u7C7B\u578B\uFF1A\u6570\u503C\u6216\u6570\u7EC4\u3002\u8FD4\u56DE\u5F53\u524D\u65F6\u95F4\u7684\u4E34\u65F6\u901F\u5EA6\u503C\u3002\u5BF9\u4E8E\u7A7A\u95F4\u5C5E\u6027\uFF08\u4F8B\u5982\u4F4D\u7F6E\uFF09\uFF0C\u5B83\u8FD4\u56DE\u6B63\u5207\u77E2\u91CF\u503C\u3002\u7ED3\u679C\u4E0E\u5C5E\u6027\u7684\u7EF4\u5EA6\u76F8\u540C\u3002</p><p>\u793A\u4F8B\uFF1A\u65B9\u5757\u4ECE 0 \u79D2\u5230 2 \u79D2\uFF0C\u4F4D\u7F6E\u7531[1000,1000]\u79FB\u52A8\u5230[800,700]</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>thisComp<span class="token punctuation">.</span><span class="token function">layer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>transform<span class="token punctuation">.</span>position<span class="token punctuation">.</span>velocity<span class="token punctuation">;</span> <span class="token comment">//\u8FD4\u56DE[-100,-150]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="velocityattime-t" tabindex="-1"><a class="header-anchor" href="#velocityattime-t" aria-hidden="true">#</a> velocityAtTime(t)</h2><p>\u8BF4\u660E\uFF1A\u67D0\u5C5E\u6027\u7684\u901F\u5EA6\u503C</p><p>\u7C7B\u578B\uFF1A\u6570\u503C\u6216\u6570\u7EC4\u3002\u8FD4\u56DE\u6307\u5B9A\u65F6\u95F4\u7684\u4E34\u65F6\u901F\u5EA6\u503C\u3002</p><p>\u793A\u4F8B\uFF1A\u65B9\u5757\u4ECE 0 \u79D2\u5230 2 \u79D2\uFF0C\u4F4D\u7F6E\u7531[1000,1000]\u79FB\u52A8\u5230[800,700]</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>thisComp<span class="token punctuation">.</span><span class="token function">layer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>transform<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">velocityAtTime</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8FD4\u56DE[-100,-150]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="speed" tabindex="-1"><a class="header-anchor" href="#speed" aria-hidden="true">#</a> speed</h2><p>\u8BF4\u660E\uFF1A\u8FD4\u56DE 1 \u7EF4\u7684\u7684\u6B63\u901F\u5EA6\u503C\u3002\u5982\u679C\u5BF9\u4E00\u7EF4\u5C5E\u6027\u4F7F\u7528\uFF0C\u90A3\u901F\u5EA6\u53EF\u4E3A\u8D1F</p><p>\u7C7B\u578B\uFF1A1 \u7EF4\u6570\u503C\u3002</p><p>\u793A\u4F8B\uFF1A\u65B9\u5757\u4ECE 0 \u79D2\u5230 2 \u79D2\uFF0C\u4F4D\u7F6E\u7531[1000,1000]\u79FB\u52A8\u5230[700,600]</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>thisComp<span class="token punctuation">.</span><span class="token function">layer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>transform<span class="token punctuation">.</span>position<span class="token punctuation">.</span>speed<span class="token punctuation">;</span> <span class="token comment">//\u8FD4\u56DE250\u3002\u52FE\u80A1\u5B9A\u7406\u4F1A\u4E0D\u4F1A\uFF1Fx\u79FB\u52A8300\uFF0Cy\u79FB\u52A8400\uFF0C\u7A7A\u95F4\u79FB\u52A8500,2\u79D2 &gt;&gt;&gt; 250/s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="speedattime-t" tabindex="-1"><a class="header-anchor" href="#speedattime-t" aria-hidden="true">#</a> speedAtTime(t)</h2><p>\u8BF4\u660E\uFF1A\u8FD4\u56DE\u6307\u5B9A\u65F6\u95F4\u7684 1 \u7EF4\u7684\u6B63\u901F\u5EA6\u503C\u3002\u5982\u679C\u5BF9\u4E00\u7EF4\u5C5E\u6027\u4F7F\u7528\uFF0C\u90A3\u901F\u5EA6\u53EF\u4E3A\u8D1F</p><p>\u7C7B\u578B\uFF1A1 \u7EF4\u6570\u503C\u3002</p><p>\u793A\u4F8B\uFF1A\u65B9\u5757\u4ECE 0 \u79D2\u5230 2 \u79D2\uFF0C\u4F4D\u7F6E\u7531[1000,1000]\u79FB\u52A8\u5230[700,600]</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>thisComp<span class="token punctuation">.</span><span class="token function">layer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>transform<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">speedAtTime</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8FD4\u56DE250\u3002\u52FE\u80A1\u5B9A\u7406\u5566\uFF1Fx\u79FB\u52A8300\uFF0Cy\u79FB\u52A8400\uFF0C\u7A7A\u95F4\u79FB\u52A8500,2\u79D2 &gt;&gt;&gt; 250/s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="wiggle" tabindex="-1"><a class="header-anchor" href="#wiggle" aria-hidden="true">#</a> wiggle()</h2><p>\u7528\u6CD5\uFF1Awiggle(freq,amp,octaves=1,amp_mult=.5,t=time)</p><p>\u8BF4\u660E\uFF1A\u968F\u673A\u6447\u52A8\uFF08\u6446\u52A8\uFF09\u5C5E\u6027\u503C\u3002</p><p>\u7C7B\u578B\uFF1A\u6570\u503C\u6216\u6570\u7EC4\u3002Wiggle \u653E\u5165\u67D0\u4E2A\u5C5E\u6027\u4E2D\uFF0C\u5C06\u8FD4\u56DE\u4E0E\u5C5E\u6027\u5177\u6709\u76F8\u540C\u7C7B\u578B\u7684\u503C\u3002</p><ul><li>\u653E\u5165\u65CB\u8F6C\u5C5E\u6027\uFF0C\u5C06\u8FD4\u56DE\u6570\u503C\uFF1B</li><li>\u653E\u5165 2D \u5C5E\u6027\uFF0C\u5982 2D \u4F4D\u7F6E\uFF0C\u5C06\u8FD4\u56DE\u4E8C\u7EF4\u6570\u7EC4\u503C\uFF1B</li><li>\u653E\u5165 3D \u5C5E\u6027\uFF0C\u5982 3D \u4F4D\u7F6E\uFF0C\u8FD4\u56DE\u4E09\u7EF4\u6570\u7EC4\u503C\uFF0C</li><li>\u653E\u5165 4D \u5C5E\u6027\uFF0C\u5982\u989C\u8272\uFF0C\u8FD4\u56DE\u56DB\u7EF4\u6570\u7EC4\u503C\uFF0C</li><li>\u4EE5\u6B64\u7C7B\u63A8\u3002</li></ul><p>\u53C2\u6570\u7C7B\u578B\uFF1Afreq\u3001amp\u3001octaves\u3001amp_mult \u548C t \u662F\u6570\u503C\u3002</p><ul><li>Freq\uFF1A\u9891\u7387\u3002\u6BCF\u79D2\u968F\u673A\u53D8\u5316\u7684\u6B21\u6570\u3002\u6570\u503C\u8D8A\u9AD8\uFF0C\u53D8\u5316\u7684\u6B21\u6570\u5C31\u8D8A\u591A\u3002</li><li>amp: \u632F\u5E45\u3002 \u968F\u673A\u6CE2\u52A8\u7684\u5927\u5C0F\u3002\u4F8B\u5982\uFF0C\u65CB\u8F6C\u5C5E\u6027\u7684\u53C2\u6570\u503C\u4E3A 100\uFF0C\u632F\u5E45\u8F93\u5165 50\uFF0C\u5B83\u5C06\u5728 50 \u5230 150 \u4E4B\u95F4\u968F\u673A\u3002</li><li>octaves : \u516B\u5EA6\u97F3\u9636\uFF0C\u9ED8\u8BA4\u4E3A 1\u3002\u50CF\u5176\u4ED6\u968F\u673A\u65B9\u6CD5\u4E00\u6837\uFF0Cwiggle()\u57FA\u4E8E\u566A\u6CE2\u8FDB\u884C\u8BA1\u7B97\uFF0C\u5C31\u50CF\u5206\u5F62\u566A\u6CE2\u4E00\u6837\u3002\u5982\u679C\u8BE5\u53C2\u6570\u53D8\u5927\uFF0C\u5219\u566A\u6CE2\u66F4\u7EC6\u81F4\uFF0C\u4E5F\u5C31\u662F\u9891\u7387\u4E4B\u95F4\u4F1A\u66F4\u7EC6\u81F4\u3002</li><li>amp_mult\uFF1A\u9ED8\u8BA4\u4E3A 0.5\u3002\u6BCF\u4E2A\u516B\u5EA6\u7684\u632F\u5E45\u4E58\u4EE5 0 \u5230 1 \u7684\u6B21\u6570\u3002\u50CF\u516B\u5EA6\u97F3\u9636\u4E00\u6837\uFF0C\u8D8A\u63A5\u8FD1 0\uFF0C\u7EC6\u8282\u8D8A\u5C11\uFF1B\u8D8A\u63A5\u8FD1 1\uFF0C\u7EC6\u8282\u8D8A\u591A\u3002</li><li>t\uFF1A\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8FD9\u662F\u53E6\u4E00\u4E2A\u53C2\u6570\uFF0C\u5B9A\u4E49\u6B64\u65B9\u6CD5\u6839\u636E\u54EA\u4E2A\u65F6\u95F4\u70B9\u8FDB\u884C\u968F\u673A\u3002<br> \u5982\u679C\u4F7F\u7528 time\uFF0C\u5C06\u4F7F\u7528\u5F53\u524D\u65F6\u95F4\u8FDB\u884C\u968F\u673A\uFF1B\u5982\u679C\u8F93\u5165 5\uFF0C\u5219\u4F7F\u7528\u5C5E\u6027\u7684\u7B2C 5 \u79D2\u6765\u8FD4\u56DE\u968F\u673A\u503C\uFF0C\u6B64\u65F6\u76F8\u5F53\u4E8E\u4E00\u4E2A\u968F\u673A\u7684&quot;\u56FA\u5B9A&quot;\u503C\u3002\u53C2\u8003\u968F\u673A\u6570\u79CD\u5B50\u3002</li></ul><p><img src="https://cdn.yuelili.com/202121172246-O.png" alt="\u3010AE\u8868\u8FBE\u5F0F\u3011wiggle\u6784\u6210\u56DB\u6B65\u56FE\u89E3_\u6708\u79BB\u7684\u4E07\u4E8B\u5C4B"></p><p>\u793A\u4F8B 1\uFF1Aposition \u5C5E\u6027\u4E0A\u4F7F\u7528</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">wiggle</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6BCF\u79D2\u4EA7\u751F \u7EA65 \u6B21\u6446\u52A8\uFF0C\u5927\u5C0F\u7EA6 20 \u50CF\u7D20\u3002\u9664\u4E86\u4E3B\u8981\u6446\u52A8\u4E4B\u5916\uFF0C\u5176\u4ED6\u4E24\u4E2A\u7EA7\u522B\u7684\u8BE6\u7EC6\u6446\u52A8\u53D1\u751F\u7684\u9891\u7387\u4E3A\u6BCF\u79D2 10 \u6B21\u548C 20 \u6B21\u6446\u52A8\uFF0C\u5404\u81EA\u7684\u5927\u5C0F\u4E3A 10 \u548C 5 \u50CF\u7D20\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u793A\u4F8B 2\uFF1A\u5BF9\u4E8E\u4E8C\u7EF4\u5C5E\u6027\uFF08\u4F8B\u5982\u7F29\u653E\uFF09\uFF0C\u6309\u76F8\u540C\u503C\u6446\u52A8\u4E24\u4E2A\u7EF4\u5EA6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>v <span class="token operator">=</span> <span class="token function">wiggle</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span>v<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> v<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B 3\uFF1A\u4E8C\u7EF4\u5C5E\u6027\uFF0C\u53EA\u80FD\u5728 Y \u8F74\u4E0A\u6447\u6446\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>freq <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
amp <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
w <span class="token operator">=</span> <span class="token function">wiggle</span><span class="token punctuation">(</span>freq<span class="token punctuation">,</span> amp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span>value<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> w<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="temporalwiggle" tabindex="-1"><a class="header-anchor" href="#temporalwiggle" aria-hidden="true">#</a> temporalWiggle()</h2><p>\u7528\u6CD5\uFF1AtemporalWiggle(freq,amp,octaves=1,amp_mult=.5,t=time)</p><p>\u8BF4\u660E\uFF1A\u5728\u6446\u52A8\u7684\u65F6\u95F4\u5BF9\u5C5E\u6027\u8FDB\u884C\u91C7\u6837\u3002\u6B64\u51FD\u6570\u91C7\u6837\u7684\u662F\u65F6\u95F4\uFF0C\u800C wiggle \u6446\u52A8\u7684\u662F\u503C\u3002\u5176\u4ED6\u8DDF wiggle \u4E00\u6837</p><p>\u53C2\u6570\uFF1Afreq\u3001amp\u3001octaves\u3001amp_mult \u548C t \u662F\u6570\u503C\u3002\u8BE6\u89C1 wiggle()</p><p>\u7C7B\u578B\uFF1A\u6570\u503C\u6216\u6570\u7EC4\u3002</p><p>\u793A\u4F8B\uFF1A\u7ED9\u4F4D\u7F6E\u52A0\u4E2A\u5173\u952E\u5E27\uFF0C0 \u79D2[0,0] 4 \u79D2[200,200]</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">temporalWiggle</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1\u79D2\u6CE2\u52A8\u4E00\u6B21\uFF0C\u4E00\u6B21\u6CE2\u52A8\u8303\u56F4\u57282\u79D2\u4E4B\u5185\uFF0C\u57282\u79D2\u65F6\uFF0C\u6709\u53EF\u80FD\u6CE2\u52A82\u79D2\uFF0C\u4F4D\u7F6E\u76F4\u63A5\u6447\u6446\u5230[200,200]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="smooth" tabindex="-1"><a class="header-anchor" href="#smooth" aria-hidden="true">#</a> smooth()</h2><p>\u7528\u6CD5\uFF1Asmooth(width=.2,samples=5,t=time)</p><p>\u8BF4\u660E\uFF1A\u968F\u7740\u65F6\u95F4\u7684\u63A8\u79FB\u5E73\u6ED1\u5C5E\u6027\u503C\uFF0C\u5C06\u503C\u7684\u5927\u800C\u77ED\u7684\u504F\u5DEE\u8F6C\u6362\u4E3A\u66F4\u5C0F\u3001\u5206\u5E03\u66F4\u5747\u5300\u7684\u504F\u5DEE\u3002</p><p>\u53C2\u6570\uFF1Awidth\u3001samples \u548C t \u662F\u6570\u503C\u3002\u6B64\u5E73\u6ED1\u901A\u8FC7\u5728\u6307\u5B9A\u65F6\u95F4\u5411\u5C5E\u6027\u503C\u5E94\u7528\u6846\u6EE4\u955C\u6765\u5B8C\u6210\u3002</p><p>width \u3002\u6307\u5B9A\u4EE5\u79D2\u4E3A\u5355\u4F4D\u7684\u5F53\u524D\u5E27\u5728\u5E73\u6ED1\u8BA1\u7B97\u4E2D\u5E73\u5747\u7684\u65F6\u95F4\u91CF\u3002\u8FD9\u4E2A\u4E0D\u592A\u7406\u89E3</p><p>samples \u3002\u5747\u5300\u5206\u5E03\u7684\u5173\u952E\u5E27\u6570\u76EE\uFF1B\u60F3\u8981\u66F4\u5927\u7684\u5E73\u6ED1\u5EA6\u5E94\u4F7F\u7528\u66F4\u5927\u7684\u503C\uFF08\u6027\u80FD\u4F1A\u4E0B\u964D\uFF09\u3002\u9009\u62E9\u4E00\u4E2A\u5947\u6570\u4F1A\u628A\u5F53\u524D\u5E27\u4E5F\u5305\u62EC\u5728\u8BA1\u7B97\u4E2D</p><p>time \u4E3A\u91C7\u6837\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u4E3A\u5F53\u524D\u65F6\u95F4</p><p>\u7C7B\u578B\uFF1A\u6570\u503C\u6216\u6570\u7EC4\u3002</p><p>\u793A\u4F8B\uFF1A</p><p><img src="https://mir.yuelili.com/wp-content/uploads/user/AE/expression/a-z/smooth.png" alt=""></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">smooth</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u91C7\u6837\u5E73\u5747\u65F6\u95F4\u7EF40.5s\u3002\u7EA2\u70B9\u662F\u5F53\u524D\u5173\u952E\u5E27\uFF0C\u84DD\u8272\u4E3Asample\u4E2A\u6570\uFF0C\u5982\u679C\u662F\u5947\u6570\uFF0C\u5219\u7B97\u4E0A\u7EA2\u8272\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="loopin-\u548C-loopout" tabindex="-1"><a class="header-anchor" href="#loopin-\u548C-loopout" aria-hidden="true">#</a> loopIn()\u548C loopOut()</h2><p>\u7528\u6CD5\uFF1AloopIn(type=&quot;cycle&quot;,numKeyframes=0)</p><p>\u8FD4\u56DE\u7C7B\u578B\uFF1A\u6570\u503C\u6216\u6570\u7EC4\u3002</p><p>\u5FAA\u73AF\u7C7B\u578B</p><p>cycle\uFF08\u9ED8\u8BA4\uFF09\u91CD\u590D\u6307\u5B9A\u6BB5\u3002</p><p>pingpong \u91CD\u590D\u6307\u5B9A\u6BB5\uFF0C\u5411\u524D\u548C\u5411\u540E\u4EA4\u66FF\u3002</p><p>offset \u91CD\u590D\u6307\u5B9A\u6BB5\uFF0C\u4F46\u4F1A\u6309\u6BB5\u5F00\u59CB\u548C\u7ED3\u675F\u65F6\u5C5E\u6027\u503C\u7684\u5DEE\u5F02\u4E58\u4EE5\u6BB5\u5DF2\u5FAA\u73AF\u7684\u6B21\u6570\u504F\u79FB\u6BCF\u4E2A\u5468\u671F\u3002</p><p>continue \u4E0D\u91CD\u590D\u6307\u5B9A\u6BB5\uFF0C\u4F46\u7EE7\u7EED\u57FA\u4E8E\u7B2C\u4E00\u4E2A\u6216\u6700\u540E\u4E00\u4E2A\u5173\u952E\u5E27\u7684\u901F\u5EA6\u5BF9\u5C5E\u6027\u8FDB\u884C\u52A8\u753B\u5236\u4F5C\u3002\u6B64\u7C7B\u578B\u4E0D\u63A5\u53D7 keyframes \u6216 duration \u53C2\u6570\u3002</p><p>cycle</p><p>\u5FAA\u73AF</p><p><img src="https://cdn.yuelili.com/20220118130053.gif" alt=""></p><p>\u91CD\u590D K1~K3 \u7684\u52A8\u753B</p><p>pingpong</p><p>\u4E52\u4E53</p><p><img src="https://cdn.yuelili.com/20220118130059.gif" alt=""></p><p>K1 \u5230 K3 \u540E\uFF0C\u518D\u4ECE K3 \u56DE\u5230 K1\uFF0C\u5982\u6B64\u5F80\u590D</p><p>offset</p><p>\u504F\u79FB</p><p><img src="https://cdn.yuelili.com/20220118130105.gif" alt=""></p><p>K1 \u5230 K3 \u540E\uFF0C\u4EE5 K3 \u4F5C\u4E3A\u65B0\u7684\u201CK1\u201D\u70B9\uFF08\u8D77\u59CB\u70B9\uFF09\uFF0C\u91CD\u590D\u8FD9\u6BB5\u52A8\u753B</p><p>continue</p><p>\u6301\u7EED</p><p><img src="https://cdn.yuelili.com/20220118130112.gif" alt=""></p><p>K1 \u5230 K3 \u540E\uFF0C\u6839\u636E K3 \u7684\u65B9\u5411\u4E0E\u901F\u5EA6\u3002\u76F4\u63A5\u6309\u76F4\u7EBF\u8DD1\u4E86</p>`,91),r={href:"https://www.yuelili.com/?p=10578",target:"_blank",rel:"noopener noreferrer"},d=n("h2",{id:"loopinduration-\u548C-loopoutduration",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#loopinduration-\u548C-loopoutduration","aria-hidden":"true"},"#"),a(" loopInDuration()\u548C loopOutDuration()")],-1),m=n("p",null,'\u7528\u6CD5\uFF1AloopInDuration(type="cycle",duration=0) \u548C loopOutDuration(type="cycle",duration=0)',-1),k=n("p",null,"\u8BF4\u660E\uFF1A\u8DDF loopIn \u4E00\u6837\uFF0C\u53EA\u4E0D\u8FC7\u4E0D\u662F\u6309\u5173\u952E\u5E27\u8BA1\u7B97\uFF0C\u800C\u662F\u4EE5\u79D2\u6765\u8BA1\u7B97\u5FAA\u73AF",-1),v={href:"https://www.yuelili.com/?p=10578",target:"_blank",rel:"noopener noreferrer"},h=e(`<h2 id="key" tabindex="-1"><a class="header-anchor" href="#key" aria-hidden="true">#</a> key()</h2><p>\u7528\u6CD5\uFF1Akey(index)\u6216 key(markerName)</p><p>\u8BF4\u660E\uFF1A\u524D\u8005\u7528\u4E8E\u8C03\u7528\u5173\u952E\u5E27\u6216\u6807\u8BB0\uFF0C\u540E\u8005\u53EA\u80FD\u7528\u4E8E\u6807\u8BB0\u3002\u4E00\u822C\u8981\u4E0E\u5176\u4ED6\u5C5E\u6027\u4E00\u8D77\u4F7F\u7528</p><p>\u53C2\u6570\uFF1Aindex \u4E3A\u6570\u503C\uFF0CmarkerName \u4E3A\u5B57\u7B26\u4E32\u3002\u6CE8\u610F\uFF0C\u6807\u8BB0\u540D\u53EF\u4EE5\u5728\u6807\u8BB0\u8BBE\u7F6E-\u8BC4\u8BBA\uFF0C\u8FDB\u884C\u6539\u53D8\u3002\u4E0D\u8FC7 AE2020 \u6700\u65B0\u7248\u672C\u597D\u50CF\u4E0D\u53EF\u4EE5\u7528\u6807\u8BB0\u540D\u8C03\u7528\u4E86</p><p>\u7C7B\u578B\uFF1A\u65E0</p><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>thisLayer<span class="token punctuation">.</span>marker<span class="token punctuation">.</span><span class="token function">key</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>time<span class="token punctuation">;</span> <span class="token comment">//\u8FD4\u56DE\u56FE\u5C42\u7B2C1\u4E2A\u6807\u8BB0\u7684\u65F6\u95F4</span>
transform<span class="token punctuation">.</span><span class="token function">key</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">//\u5982\u8FD4\u56DE[960,540]\uFF0C\u4F4D\u7F6E\u5C5E\u6027\u7B2C2\u4E2A\u7684\u5173\u952E\u5E27\u503C(\u5982\u679C\u6CA1\u6709\u5173\u952E\u5E27\u4F1A\u62A5\u9519)</span>
marker<span class="token punctuation">.</span><span class="token function">key</span><span class="token punctuation">(</span><span class="token string">&quot;\u6807\u8BB01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>time<span class="token punctuation">;</span> <span class="token comment">//\u5982\u8FD4\u56DE15\uFF0C\u8FD4\u56DE\u56FE\u5C42\u6807\u8BB01\u7684\u65F6\u95F4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nearestkey-t" tabindex="-1"><a class="header-anchor" href="#nearestkey-t" aria-hidden="true">#</a> nearestKey(t)</h2><p>\u7C7B\u578B\uFF1AKey \u6216 MarkerKey\u3002\u4E00\u822C\u8981\u914D\u5408\u5176\u4ED6\u5C5E\u6027\u4F7F\u7528</p><p>\u8BF4\u660E\uFF1A\u8FD4\u56DE\u6700\u63A5\u8FD1\u6307\u5B9A\u65F6\u95F4\u7684 Key \u6216 MarkerKey \u5BF9\u8C61\u3002</p><p>\u793A\u4F8B\uFF1A\u5982\u679C 3 \u79D2 5 \u79D2\u90FD\u6709\u4E00\u4E2A\u5173\u952E\u5E27</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">nearestKey</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span>time<span class="token punctuation">;</span> <span class="token comment">//\u8FD4\u56DE\u6700\u63A5\u8FD1\u7684\u5173\u952E\u5E27\u7684\u65F6\u95F4\uFF0C\u4E5F\u5C31\u662F3\u79D2</span>
<span class="token function">nearestKey</span><span class="token punctuation">(</span><span class="token number">4.1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>time<span class="token punctuation">;</span> <span class="token comment">//\u8FD4\u56DE\u6700\u63A5\u8FD1\u7684\u5173\u952E\u5E27\u7684\u65F6\u95F4\uFF0C\u4E5F\u5C31\u662F5\u79D2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="numkeys" tabindex="-1"><a class="header-anchor" href="#numkeys" aria-hidden="true">#</a> numKeys</h2><p>\u7528\u6CD5\uFF1AXX \u5173\u952E\u5E27.numKeys</p><p>\u8BF4\u660E\uFF1A\u5173\u952E\u5E27\u6570\u76EE\uFF0C\u6216\u8005\u6807\u8BB0\u6570\u76EE\u3002</p><p>\u7C7B\u578B\uFF1A\u6570\u503C\u3002</p><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>transform<span class="token punctuation">.</span>position<span class="token punctuation">.</span>numKeys<span class="token punctuation">;</span> <span class="token comment">//\u8FD4\u56DE\u672C\u56FE\u5C42\u4F4D\u7F6E\u5C5E\u6027\u7684\u5173\u952E\u5E27\u4E2A\u6570</span>
thisLayer<span class="token punctuation">.</span>marker<span class="token punctuation">.</span>numKeys<span class="token punctuation">;</span> <span class="token comment">//\u8FD4\u56DE\u672C\u56FE\u5C42\u6807\u8BB0\u4E2A\u6570</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="active" tabindex="-1"><a class="header-anchor" href="#active" aria-hidden="true">#</a> active</h2><p>\u8BF4\u660E\uFF1A\u662F\u5426\u6FC0\u6D3B\u5C5E\u6027</p><p>\u7C7B\u578B\uFF1A\u5E03\u5C14\u503C</p><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">effect</span><span class="token punctuation">(</span><span class="token string">&quot;Threshold&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>active<span class="token punctuation">;</span> <span class="token comment">//\u5982\u679C\u6548\u679C\u524D\u7684FX\u6253\u5F00\uFF0C\u4E14\u5F53\u524D\u6548\u679C\u4F5C\u7528\u4E8E\u65F6\u95F4\u8F74\u4E0A\uFF0C\u5219\u8FD4\u56DEtrue</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="enabled" tabindex="-1"><a class="header-anchor" href="#enabled" aria-hidden="true">#</a> enabled</h2><p>\u8BF4\u660E\uFF1A\u662F\u5426\u5F00\u542F\u5C5E\u6027</p><p>\u7C7B\u578B\uFF1A\u5E03\u5C14\u503C</p><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">effect</span><span class="token punctuation">(</span><span class="token string">&quot;Threshold&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>enabled<span class="token punctuation">;</span> <span class="token comment">//\u5982\u679C\u6548\u679C\u524D\u7684FX\u6253\u5F00\uFF0C\u5219\u8FD4\u56DEtrue</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="propertygroup" tabindex="-1"><a class="header-anchor" href="#propertygroup" aria-hidden="true">#</a> propertyGroup()</h2><p>\u7528\u6CD5\uFF1ApropertyGroup(countUp=1)</p><p>\u8BF4\u660E\uFF1A\u5411\u4E0A\u7EA7\u8FDB\u884C\u7D22\u5F15\uFF0C\u8FD4\u56DE\u5305\u542B\u8BE5\u5C5E\u6027\u7684\u4E0A\u4E00\u7EA7</p><p>\u53C2\u6570\uFF1AcountUp \u4E3A\u6570\u503C\uFF0C\u9ED8\u8BA4\u4E3A 1</p><p>\u7C7B\u578B\uFF1A\u7EC4\u3002</p><p>\u793A\u4F8B\uFF1A</p><p><img src="https://mir.yuelili.com/wp-content/uploads/user/AE/expression/a-z/propertyGroup.png" alt=""></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>r <span class="token operator">=</span> thisComp<span class="token punctuation">.</span><span class="token function">layer</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F62\u72B6\u56FE\u5C42 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">content</span><span class="token punctuation">(</span><span class="token string">&quot;\u692D\u5706 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>transform<span class="token punctuation">.</span>rotation<span class="token punctuation">;</span> <span class="token comment">//\u5B9A\u4E49\u53D8\u91CFr\uFF0C\u4E3A\u692D\u5706\u7684\u4E00\u4E2A\u65CB\u8F6C\u5C5E\u6027</span>

r<span class="token punctuation">.</span><span class="token function">propertyGroup</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">//\u8FD4\u56DE \u53D8\u6362\u3002\u65CB\u8F6C\u7684\u4E0A1\u7EA7\u662F\u53D8\u6362</span>
r<span class="token punctuation">.</span><span class="token function">propertyGroup</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">//\u8FD4\u56DE \u692D\u57061\u3002\u65CB\u8F6C\u7684\u4E0A2\u7EA7\u662F\u692D\u57061</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="propertyindex" tabindex="-1"><a class="header-anchor" href="#propertyindex" aria-hidden="true">#</a> propertyIndex</h2><p>\u7528\u6CD5\uFF1AXX \u5C5E\u6027.propertyIndex</p><p>\u8BF4\u660E\uFF1A\u5C5E\u6027\u5728\u5C5E\u6027\u7EC4\u7684\u7D22\u5F15\uFF0C\u5C5E\u6027\u7EC4\u4E00\u822C\u5728\u8499\u7248\u3001\u6548\u679C\u3001\u6587\u672C\u52A8\u753B\u3001\u9009\u62E9\u5668\u3001\u5F62\u72B6\u3001\u8DDF\u8E2A\u5668\u4EE5\u53CA\u8DDF\u8E2A\u70B9\u3002</p><p>\u7C7B\u578B\uFF1A\u6570\u503C\u3002</p><p>\u793A\u4F8B\uFF1A</p><p><img src="https://mir.yuelili.com/wp-content/uploads/user/AE/effects/AE-Effects-Transition-Radial_Wipe.png" alt=""></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">effect</span><span class="token punctuation">(</span><span class="token string">&quot;Radial Wipe&quot;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&quot;Start Angle&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>propertyIndex<span class="token punctuation">;</span> <span class="token comment">//starAngle\u5728Radial Wipe\u6548\u679C\u7684\u7B2C2\u4E2A\uFF0C\u6545\u8FD4\u56DE2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h2><p>\u8BF4\u660E\uFF1A\u5C5E\u6027\u6216\u5C5E\u6027\u7EC4\u7684\u540D\u79F0\u3002</p><p>\u7C7B\u578B\uFF1A\u5B57\u7B26\u4E32\u3002</p><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">effect</span><span class="token punctuation">(</span><span class="token string">&quot;Threshold&quot;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&quot;Level&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">//\u8FD4\u56DELevel</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,48);function g(b,f){const s=i("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[a("\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605 \xA0"),n("a",r,[a("loop \u8868\u8FBE\u5F0F\u8BE6\u89E3"),p(s)]),a("\u3002")]),d,m,k,n("p",null,[a("\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605 \xA0"),n("a",v,[a("loop \u8868\u8FBE\u5F0F\u8BE6\u89E3"),p(s)]),a("\u3002")]),h])}const x=t(l,[["render",g],["__file","Property.html.vue"]]);export{x as default};