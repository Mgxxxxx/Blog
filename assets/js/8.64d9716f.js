(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{380:function(t,s,n){"use strict";n.r(s);var a=n(24),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("ul",[n("li",[t._v("使用"),n("code",[t._v("WebWorkers")]),t._v("执行耗时任务")]),t._v(" "),n("li",[t._v("内存方面：\n"),n("ul",[n("li",[t._v("使用"),n("code",[t._v("delete")]),t._v("关键字从内存中移除不需要的JavaScript对象")]),t._v(" "),n("li",[t._v("从DMO树上移除不是必需的节点")])])]),t._v(" "),n("li",[t._v("无阻塞加载外部脚本："),n("code",[t._v("script")]),t._v("标签使用"),n("code",[t._v("defer")]),t._v("属性")]),t._v(" "),n("li",[t._v("布置行内脚本：\n"),n("ul",[n("li",[t._v("把行内脚本移至底部")]),t._v(" "),n("li",[t._v("异步启动执行脚本：使用"),n("code",[t._v("setTimeout")]),t._v("延迟执行")]),t._v(" "),n("li",[t._v("使用"),n("code",[t._v("defer")]),t._v("属性，"),n("code",[t._v("defer")]),t._v("属性也适用于行内脚本")]),t._v(" "),n("li",[t._v("调整行内脚本的位置，使其不出现在样式表和任何其他资源之间，以免样式表加载完了，脚本会执行，就会阻塞其他资源加载")])])])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[n("code",[t._v("script")]),t._v("标签除了"),n("code",[t._v("defer")]),t._v("属性之外，还有一个属性"),n("code",[t._v("async")]),t._v("。它的作用是异步加载，但是加载完成后就会执行（会阻塞文档解析）。")])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("编写高效的JavaScript：")]),t._v(" "),n("ul",[n("li",[t._v("任何非局部变量在函数中的使用次数超过一次时，都应该将其存储为局部变量。例如：")])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createChildFor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("elId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" el "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        newEl "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newEl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//以上代码可优化为")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" doc "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        el "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" doc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElemtntById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        newEl "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" doc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newEl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("p",[t._v("优化后的代码由于把"),n("code",[t._v("document")]),t._v("存储到了名为"),n("code",[t._v("doc")]),t._v("的局部变量中，故不用在跑到其他作用与寻找"),n("code",[t._v("document")]),t._v("表示符了。")]),t._v(" "),n("ul",[n("li",[t._v("减少使用"),n("code",[t._v("with")]),t._v("。"),n("code",[t._v("with")]),t._v("语句会把函数中的局部变量变为作用域链的第二个对象，作用域第一个对象则是紧跟"),n("code",[t._v("with")]),t._v("括号中的那个对象")]),t._v(" "),n("li",[t._v("减少和DOM的交互")])])]),t._v(" "),n("li",[n("p",[t._v("编写高效的CSS选择符")])]),t._v(" "),n("li",[n("p",[t._v("降低请求量：合并资源、gzip压缩、减少http请求、懒加载")])]),t._v(" "),n("li",[n("p",[t._v("加快请求速度：")]),t._v(" "),n("ul",[n("li",[t._v("CDN分发：基本思路是尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定。CDN系统能够实时地根据网络流量和各节点的连接、负载状况以及到用户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上。")]),t._v(" "),n("li",[t._v("DNS预解析")]),t._v(" "),n("li",[t._v("并行加载")])])])]),t._v(" "),n("p",[t._v("更详细性能优化可参考"),n("a",{attrs:{href:"https://segmentfault.com/a/1190000022205291",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://segmentfault.com/a/1190000022205291"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);