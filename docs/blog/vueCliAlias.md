---
title: Vue.Cli 3.0 配置别名
date: '2018-08-15 19:02:18'
tag: 
  - Vue
meta:
  -
    name: Vue
    content: This article configuration alias coding for vue cli  3.0
  -
    name: Vue
    content: 本篇给出了vue3.0脚手架下配置文件别名代码
---
本篇给出了vue3.0脚手架下配置文件别名代码
<!-- more -->

1. 在根目录中新建vue.config.js 配置文件
```javascript
'use strict'

const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    entry: '@/main.js',
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        // '@': resolve('src'),
        'img': resolve('src/assets/images'),
        'style': resolve('src/assets/style'),
      }
    },
  }
}
```

