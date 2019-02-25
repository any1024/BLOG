---
title: Node常用库
date: '2018-10-15 08:02:33'
tag: 
  - Node
meta:
  -
    name: Node
    content: Node open child process to crawl data
  -
    name: Node
    content: puppeteer
---
本篇讲述了Node开启子进程使用puppeteer爬取数据
<!-- more -->

1. 开启子进程页面
```javascript
const cp = require('child_process')

const { resolve } = require('path')

;(async () => {

//子进程运行路径

const script = resolve(__dirname, '../crawler/trailer-list')

// 开启子进程

const child = cp.fork(script, [])

let invoked = false

child.on('error', err => {

  if (invoked) return
  
  invoked = true
  
  console.log(err)

})

child.on('exit', code => {

  if (invoked) return
  
  invoked = false
  
  let err = code === 0 ? null: new Error('ExitCode: ' + code)
  
  console.log(err)

})
  
child.on('message', data => {

  let { result } = data
  
  console.log(result)

})

})()
```

1. 爬取数据页面
```javascript
const url = `https://movie.douban.com/tag/#/?sort=R&range=6,10&tags=`

const puppeteer = require('puppeteer')

const sleep = time => new Promise( resolve => {

setTimeout(resolve, time);

})

;(async () => {

console.log('Start visit the target page')

// 创建一个浏览器 设置非沙箱模式

const browser = await puppeteer.launch({

args: ['--no-sandbox'],

dumpio: false

})

// 创建一个页面

const page = await browser.newPage()

// 给页面接上网址

await page.goto(url, {

waitUntil: 'networkidle2'

})

// 等待3秒页面加载

await sleep(3000)

// 找到页面中.more这个元素

await page.waitForSelector('.more')

for (let i = 0; i < 1; i++) {

await sleep(3000)

// 等待3秒后点击

await page.click('.more')

}

// 根据dom节点爬取数据

const result = await page.evaluate( () => {

var $ = window.$

var items = $('.list-wp a')

var links = []

if(items.length >= 1) {

  items.each((index, item) => {
  
  let it = $(item)
  
  let doubanId = it.find('div').data('id')
  
  let title = it.find('.title').text()
  
  let rate = it.find('.rate').text()
  
  let poster = it.find('img').attr('src').replace('s_ratio', 'l_ratio')
  
    links.push({
      doubanId,
      title,
      rate,  
      poster
    })
  
  })

}

  return links

})

// 关闭浏览器

await browser.close()

// 传输数据

process.send({result})

// 退出子进程

process.exit(0)

})()
```

