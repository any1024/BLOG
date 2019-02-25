---
title: js运行机制
date: '2019-01-15 08:02:33'
tag: 
  - javascript
meta:
  -
    name: js
    content: js operating mechanism
  -
    name: js
    content: js 运行机制
---
本篇讲述了基本的js运行机制
<!-- more -->

1. 默认单线程 同一时间只能做一件事 （Web Worker）
2. 任务队列  同步任务 异步任务  等同步任务执行完毕 在将异步任务加入到运行栈里去
3. Event Loop 事件循环
  1. 同步任务放在运行栈里面
  2. 异步任务完成后放入异步队列中
  3. 运行栈发现同步队列中没有东西执行了就执行异步队列里的东西
  4. 如此循环

