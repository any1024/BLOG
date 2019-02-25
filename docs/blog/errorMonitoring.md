---
title: 前端错误监控模式
date: '2019-01-29 17:23:58'
tag: 
  - JavaScript
meta:
  -
    name: JavaScript
    content: front-end error monitoring
  -
    name: JavaScript
    content: 前端基础的错误监控
---
本篇讲了前端基础的错误监控
<!-- more -->

1. 前端报错的分类
  1. 即时运行错误：代码错误
  2. 资源加载错误
2. 错误的捕获方式
  1. 即时运行错误的捕获方式
    1. try..catch
    2. windo.onerror
  2. 资源加载错误的捕获方式   error事件不冒泡
    1. object.onerror
    2. performance.getEntries()  返回已加载资源的一个数组
    3. Error事件捕获
  3. 跨域的JS脚本错误捕获
    1. 在script标签中增加crossorigin属性
    2. 设置js资源响应头Access-Control-Origin:*
3. 上报错误的基本原理
  1. 采用Ajax通信的方式上报
  2. 利用Image对象上报
```
（new Image()）.src = 'http://baidu.com/tesjk?r=test'
```

