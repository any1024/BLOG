---
title: js渲染机制
date: '2018-10-25 17:23:58'
tag: 
  - javascript
meta:
  -
    name: JavaScript
    content: JavaScript render mechanism
  -
    name: JavaScript
    content: JavaScript渲染机制
---
本篇讲述了前端基础之JavaScript渲染机制
<!-- more -->

1. 什么是DOCTYPE及作用
  1. DTD（document type definition， 文档类型定义）是一系列的语法规则，用来定义XML或X（HTML）的文件类型。浏览器会使用它来判断文档类型，决定使用何种协议来解析，以及切换浏览器模式
  2. DOCTYPE是用来声明文档类型和DTD规范的，一个主要的用途便是文件的合法性验证。如果代码不合法，那么浏览器解析便会出一些差错
  3. HTML5 <!DOCTYPE html>
  4. HTML 4.0有严格模式和宽松模式
  5. 严格模式包括所有html元素和属性，但是不包括展示性和启用的元素（比如font）
  6. 而普通模式都包括
2. 浏览器渲染过程
  1. 先是将html和css解析生成了DomTree和CssomTree，然后将二者合并生成RenderTree，在进行laoyout，painting画出来，最后显示在浏览器上 
3. 重排Reflow
  1. DOM结构中的各个元素都有自己的盒子（模型），这些都需要浏览器根据各种样式来计算并根据计算结果将元素放到它该出现的位置，这个过程称为reflow
  2. 触发reflow
    1. 增加，删除，修改DOM节点时，会触发reflow
    2. 移动dom，比如动画
    3. 修改css样式
    4. 当你Resize窗口（移动端没有）的时候，或者滚动
    5. 当你修改网页的默认字体
4. 重绘Repaint
  1. 页面上各种盒子的样式，大小确定好以后，浏览器将它画在页面上就叫Repaint
  2. 触发Repaint
    1. Dom改动
    2. Css改动
    3. 总结：就是页面内容发送变化
5. 布局Layout

