---
title: Node常用库
date: '2018-10-15 08:02:33'
tag: 
  - Node
meta:
  -
    name: Node
    content: Node package notes
  -
    name: Node
    content: Node常用库
---
本篇为Node常用库笔记
<!-- more -->

1. [ejs模板引擎](https://github.com/tj/ejs)
  * 适合前端原生文件使用
2. [pug模板引擎](https://github.com/pugjs/pug)
  * 适合后端书写使用
  * 可以用koa-views中间件调用
3. [视频播放器Dplayer](https://github.com/MoePlayer/DPlayer)

4. [puppeteer](https://github.com/GoogleChrome/puppeteer)
  * chrome无头浏览器 爬虫工具

```
// 配置pug为模版引擎

const Koa = require('koa')

const app = new Koa()

const views = require('koa-views')

const { resolve } = require("path")

app.use(views(resolve(__dirname, './views'), {

extension: 'pug' //后缀名称

}))

app.use(async (ctx, next) => {

  await ctx.render('index', {
  
  you: 'luck',
  
  me: 'Scott'
  
  })
})

app.listen(3000)
```

```
// node 请求包 --  npm i request-promise-native request

const rp = require('request-promise-native')

async function fetchMovie (item) {

const url = `https://api.douban.com/v2/movie/subject/${item.doubanId}`

const res = await rp(url) {

  return res

}
```


