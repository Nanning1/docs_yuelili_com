const e=JSON.parse('{"key":"v-01fdaee0","path":"/zh/ae/scripting/Item/AVItem.html","title":"AVItem \u5BF9\u8C61","lang":"zh-CN","frontmatter":{"title":"AVItem \u5BF9\u8C61","order":4,"category":["AE"],"summary":"AVItem object app.project.item(index) \u63CF\u8FF0\uFF1AAVItem \u5BF9\u8C61\uFF0C\u7528\u4E8E\u8BBF\u95EE AE \u4E2D\u7684\u5E26\u6709\u97F3\u9891/\u89C6\u9891\u6587\u4EF6\u3002A\uFF1AAudio\uFF08\u97F3\u9891\uFF09 V\uFF1AVideo\uFF08\u89C6\u9891\uFF09 \u7236\u7EA7\u5173\u7CFB\uFF1AAVItem \u662F Item \u7684\u5B50\u7C7B\u3002\u4F7F\u7528 AVItem \u65F6\uFF0CItem \u7684\u65B9\u6CD5\u548C\u5C5E\u6027\u5747\u53EF\u7528\u3002 \u5B50\u7EA7\u5173\u7CFB\uFF1AAVItem \u662F\u5408\u6210\uFF08CompItem\uFF09\u548C\u7D20\u6750\uFF08foota","head":[["meta",{"property":"og:url","content":"https://docs.yuelili.com/zh/ae/scripting/Item/AVItem.html"}],["meta",{"property":"og:site_name","content":"\u6708\u79BB\u6587\u6863\u7AD9"}],["meta",{"property":"og:title","content":"AVItem \u5BF9\u8C61"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://docs.yuelili.com/en/ae/scripting/Item/AVItem.html"}]]},"excerpt":"","headers":[{"level":2,"title":"AVItem object","slug":"avitem-object","link":"#avitem-object","children":[]},{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027","link":"#\u5C5E\u6027","children":[{"level":3,"title":"duration \u6301\u7EED\u65F6\u95F4","slug":"duration-\u6301\u7EED\u65F6\u95F4","link":"#duration-\u6301\u7EED\u65F6\u95F4","children":[]},{"level":3,"title":"footageMissing \u7D20\u6750\u7F3A\u5931\u5224\u65AD","slug":"footagemissing-\u7D20\u6750\u7F3A\u5931\u5224\u65AD","link":"#footagemissing-\u7D20\u6750\u7F3A\u5931\u5224\u65AD","children":[]},{"level":3,"title":"frameDuration \u5355\u5E27\u957F\u5EA6","slug":"frameduration-\u5355\u5E27\u957F\u5EA6","link":"#frameduration-\u5355\u5E27\u957F\u5EA6","children":[]},{"level":3,"title":"frameRate \u5E27\u901F\u7387","slug":"framerate-\u5E27\u901F\u7387","link":"#framerate-\u5E27\u901F\u7387","children":[]},{"level":3,"title":"hasAudio \u97F3\u9891\u5224\u65AD","slug":"hasaudio-\u97F3\u9891\u5224\u65AD","link":"#hasaudio-\u97F3\u9891\u5224\u65AD","children":[]},{"level":3,"title":"hasVideo \u89C6\u9891\u5224\u65AD","slug":"hasvideo-\u89C6\u9891\u5224\u65AD","link":"#hasvideo-\u89C6\u9891\u5224\u65AD","children":[]},{"level":3,"title":"height \u9AD8\u5EA6","slug":"height-\u9AD8\u5EA6","link":"#height-\u9AD8\u5EA6","children":[]},{"level":3,"title":"isMediaReplacementCompatible !\u4E0D\u61C2","slug":"ismediareplacementcompatible-\u4E0D\u61C2","link":"#ismediareplacementcompatible-\u4E0D\u61C2","children":[]},{"level":3,"title":"name \u540D\u79F0","slug":"name-\u540D\u79F0","link":"#name-\u540D\u79F0","children":[]},{"level":3,"title":"pixelAspect \u50CF\u7D20\u957F\u5BBD\u6BD4","slug":"pixelaspect-\u50CF\u7D20\u957F\u5BBD\u6BD4","link":"#pixelaspect-\u50CF\u7D20\u957F\u5BBD\u6BD4","children":[]},{"level":3,"title":"proxySource \u4EE3\u7406\u6E90","slug":"proxysource-\u4EE3\u7406\u6E90","link":"#proxysource-\u4EE3\u7406\u6E90","children":[]},{"level":3,"title":"time \u9879\u76EE\u9884\u89C8\u65F6\u95F4","slug":"time-\u9879\u76EE\u9884\u89C8\u65F6\u95F4","link":"#time-\u9879\u76EE\u9884\u89C8\u65F6\u95F4","children":[]},{"level":3,"title":"usedIn \u8BE5\u5408\u6210\u7684\u7236\u7EA7","slug":"usedin-\u8BE5\u5408\u6210\u7684\u7236\u7EA7","link":"#usedin-\u8BE5\u5408\u6210\u7684\u7236\u7EA7","children":[]},{"level":3,"title":"useProxy \u662F\u5426\u4F7F\u7528\u4EE3\u7406","slug":"useproxy-\u662F\u5426\u4F7F\u7528\u4EE3\u7406","link":"#useproxy-\u662F\u5426\u4F7F\u7528\u4EE3\u7406","children":[]},{"level":3,"title":"width \u9879\u76EE\u5BBD\u5EA6","slug":"width-\u9879\u76EE\u5BBD\u5EA6","link":"#width-\u9879\u76EE\u5BBD\u5EA6","children":[]}]},{"level":2,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5","link":"#\u65B9\u6CD5","children":[{"level":3,"title":"setProxy() \u8BBE\u7F6E\u4EE3\u7406","slug":"setproxy-\u8BBE\u7F6E\u4EE3\u7406","link":"#setproxy-\u8BBE\u7F6E\u4EE3\u7406","children":[]},{"level":3,"title":"setProxyToNone() \u5220\u9664\u4EE3\u7406","slug":"setproxytonone-\u5220\u9664\u4EE3\u7406","link":"#setproxytonone-\u5220\u9664\u4EE3\u7406","children":[]},{"level":3,"title":"setProxyWithPlaceholder() \u4F7F\u7528\u5360\u4F4D\u7B26\u8BBE\u7F6E\u4EE3\u7406","slug":"setproxywithplaceholder-\u4F7F\u7528\u5360\u4F4D\u7B26\u8BBE\u7F6E\u4EE3\u7406","link":"#setproxywithplaceholder-\u4F7F\u7528\u5360\u4F4D\u7B26\u8BBE\u7F6E\u4EE3\u7406","children":[]},{"level":3,"title":"setProxyWithSequence() \u4F7F\u7528\u5E8F\u5217\u8BBE\u7F6E\u4EE3\u7406","slug":"setproxywithsequence-\u4F7F\u7528\u5E8F\u5217\u8BBE\u7F6E\u4EE3\u7406","link":"#setproxywithsequence-\u4F7F\u7528\u5E8F\u5217\u8BBE\u7F6E\u4EE3\u7406","children":[]},{"level":3,"title":"setProxyWithSolid() \u4F7F\u7528\u7EAF\u8272\u56FE\u5C42\u8BBE\u7F6E\u4EE3\u7406","slug":"setproxywithsolid-\u4F7F\u7528\u7EAF\u8272\u56FE\u5C42\u8BBE\u7F6E\u4EE3\u7406","link":"#setproxywithsolid-\u4F7F\u7528\u7EAF\u8272\u56FE\u5C42\u8BBE\u7F6E\u4EE3\u7406","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":7.02,"words":2106},"filePathRelative":"zh/ae/scripting/Item/AVItem.md"}');export{e as data};