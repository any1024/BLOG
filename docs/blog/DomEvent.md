---
title: DOM事件类型
date: '2019-01-29 17:23:58'
tag: 
  - javascript
meta:
  -
    name: Dom
    content: Dom event type
  -
    name: Dom
    content: DOM事件类型
---
本篇讲述了基础的DOM事件类型
<!-- more -->
1. 基本概念： DOM事件级别
  1. DOM0 element.onclick=function(){}
  2. DOM2 element.addEventListener('click',function(){},false)
  3. DOM3 element.addEventListener('keyup',function(){},false)
2. DOM事件模型
  1. 捕获和冒泡
3. DOM事件流
  1. 事件通过捕获 到达目标阶段 然后进入冒泡阶段
4. 描述DOM事件捕获的具体流程
  1. window - document -html
5. Event对象的常见应用
  1. event.preventDefault()  阻止默认事件
  2. event.stopPropagation() 阻止冒泡行为
  3. event.stoplmmediatePropagation() 阻止同一个对象的同一个事件多次执行
    1. 一个按钮绑定了两个click事件  在第一个click事件执行时的方法中加入上面的方法，即可阻止第二个事件触发
  4. event.currentTarget
    1. 当前所绑定的事件
  5. event.target
    1. 比如触发了click事件，那么event.target就是真正触发事件的元素
6. 自定义事件
```javaScript
var eve = new Event('custome'); //注册自定义事件 
// ev 为dom节点
ev.addEventListener('custome', function() {
    console.log('custome');
})
ev.dispatchEvent(eve)

// CustomEvent
var cusEve = new CustomEvent('userLogin', {
  detail: {
    name: 'xl'
  },
  bubbles: true,
  cancelable: true
})
// bubbles：如果为 true，事件将冒泡到触发事件的元素的祖先。
```
// cancelable：如果为 true，可以使用事件对象的 stopPropagation() 方法取消事件传播。


