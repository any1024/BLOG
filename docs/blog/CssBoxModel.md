---
title: Css盒模型
date: '2019-01-29 17:23:58'
tag: 
  - Css
meta:
  -
    name: Css
    content: Css box model
  -
    name: Css
    content: Css 盒模型
---
本篇讲述了Css两种盒模型之间的差异
<!-- more -->
1. 标准模型和IE模型的区别
  1. 标准模型的宽高等于content区域的宽高 (box-sizing: content-box)
  2. IE模型的宽高包括border和padding (box-sizing: border-box)
  3. 由上得出 IE 模型 宽高计算  等于标准模型使用  box-sizing: border-box
2. JS设置获取盒模型的几种方式
  1. dom.style.width/height (缺陷：只可以获取内联)
  2. dom.currentStyle.width/height (获取渲染之后的宽高）（缺陷：只有IE支持）
  3. window.getComputedStyle(dom).width/height
  4. dom.getBoundingClientRect().width/height

