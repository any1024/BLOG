---
title: Node配置跨域
date: '2019-01-15 08:02:33'
tag: 
  - node
meta:
  -
    name: Node
    content: Node configuring cross-domain
  -
    name: Node
    content: Node配置跨域
---
本篇讲述了Node配置跨域配置
<!-- more -->

1. cors为配置node跨域的一个中间件
2. 首先在文件夹中使用 以下命令下载cors包到本地「需安照[Node.js](http://nodejs.cn/)」 
3. npm install cors 
```javascript
var cors = require('cors')

router.use(cors({
            credentials: true, 
            origin: 'http://www.zhysama.xyz', // web前端服务器地址
        }))
