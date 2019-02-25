---
title: 预加载图片函数
date: '2019-02-20 17:23:58'
tag: 
  - JavaScript
meta:
  -
    name: JavaScript
    content: This simple preload picture function
  -
    name: JavaScript
    content: 一个简单的预加载图片函数
---
本篇为一个简单的预加载图片函数demo
<!-- more -->

### 加载图片函数

```javascript
export default function (imgList = [], fn = function () {}) {
  const imgNode = new Image()
  const len = imgList.length
  let i = 0
  let _width = ''

  imgNode.src = imgList[i]

  imgNode.addEventListener('load', () => {
    if (i < len) {
      imgNode.src = imgList[++i]
      fn(true)
      _width = Math.floor(i / len * 100) + '%'
      fn(null, _width)
    }
    i === len && fn(true)
  })

  imgNode.addEventListener('error', () => {
    if (i < len) {
      imgNode.src = imgList[++i]
      _width = Math.floor(i / len * 100) + '%'
      fn(null, _width)
    }
    i === len && fn(true)
  })
}

```