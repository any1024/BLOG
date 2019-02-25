---
title: 页面性能类
date: '2019-02-20 17:23:58'
tag: 
  - javascript
meta:
  -
    name: JavaScript
    content: This article describe performance optimization
  -
    name: JavaScript
    content: 前端性能优化
---
本篇讲述了基本的前端性能优化
<!-- more -->

1. 资源压缩合并，减少http请求
2. 非核心代码异步加载 -> 异步加载的方式 -> 异步加载的区别
  1. 动态脚本加载 creatElement
  2. defer  异步加载脚本
    1. html 解析完才会执行，按顺序执行
  3. async 异步加载脚本
    1. 加载完后立即执行，不按顺序执行，谁先下载好谁先来
3. 利用浏览器缓存 -> 缓存的分类 -> 缓存的原理
  1. 强缓存
    1. 发现缓存直接使用
    2. Expires  过期时间  服务器下发的绝对时间
    3. Cache-Control 相对时间  客户端的相对时间为缓存过期标准
  2. 协商缓存
    1. Last-Modified If-Modified-Since
    2. Etag 哈希值
4. 利用CDN
5. 预解析CDN
```javaScript
1. 用meta信息来告知浏览器, 当前页面要做DNS预解析:<meta http-equiv="x-dns-prefetch-control" content="on" />
2. 在页面header中使用link标签来强制对DNS预解析: <link rel="dns-prefetch" href="http://bdimg.share.baidu.com" />
```
* a标签默认是预解析的
* 使用https默认是关闭预解析

