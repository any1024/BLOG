(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{221:function(t,a,s){"use strict";s.r(a);var o=s(0),r=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("p",[t._v("本篇贴出了slot新语法 官法demo\n")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("有时我们需要多个插槽。例如对于一个带有如下模板的 "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("base"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("layout"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" 组件：\n\n"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"container"')]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("header"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("!")]),s("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" 我们希望把页头放这里 "),s("span",{attrs:{class:"token operator"}},[t._v("--")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("header"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("main"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("!")]),s("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" 我们希望把主要内容放这里 "),s("span",{attrs:{class:"token operator"}},[t._v("--")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("main"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("footer"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("!")]),s("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" 我们希望把页脚放这里 "),s("span",{attrs:{class:"token operator"}},[t._v("--")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("footer"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n对于这样的情况，"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("slot"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" 元素有一个特殊的特性：name。这个特性可以用来定义额外的插槽：\n\n"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"container"')]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("header"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("slot name"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"header"')]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("slot"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("header"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("main"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("slot"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("slot"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("main"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("footer"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("slot name"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"footer"')]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("slot"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("footer"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n一个不带 name 的 "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("slot"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" 出口会带有隐含的名字“"),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v("”。\n\n在向具名插槽提供内容的时候，我们可以在一个 "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" 元素上使用 v"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("slot 指令，并以 v"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("slot 的参数的形式提供其名称：\n\n"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("base"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("layout"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("template v"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("slot"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("header"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("Here might be a page title"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token constant"}},[t._v("A")]),t._v(" paragraph "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the main content"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("And another one"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("template v"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("slot"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("footer"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("Here's some contact info"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("base"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("layout"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])])])}],!1,null,null,null);r.options.__file="VueSlot.md";a.default=r.exports}}]);