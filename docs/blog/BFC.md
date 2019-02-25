---
title: BFC
date: '2019-01-29 17:23:58'
tag: 
  - css
meta:
  -
    name: css
    content: BFC principle
  -
    name: css
    content: BFC 实现原理
---
本篇讲述了BFC的原理与形成
<!-- more -->

### 块格式化上下文（Block Formatting Context）及其工作原理。
块格式上下文（BFC）是 Web 页面的可视化 CSS 渲染的部分，是块级盒布局发生的区域，也是浮动元素与其他元素交互的区域。
1. 渲染规则
  1. 解决重叠问题
  2. 不与浮动元素的box重叠
  3. BFC是一个独立的元素 外面的元素不会影响里面的，里面的同样也是
  4. 计算BFC高度 浮动元素也参与计算
2. 创建BFC
  1. float的值不是none.
  2. position的值不是static或relative.
  3. display的值是table-cell、table-caption、inline-block、flex、或inline-flex。
  4. overflow的值不是visible。



