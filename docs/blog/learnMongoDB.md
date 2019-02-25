---
title: Express+MongoDB建站
date: '2019-02-25 17:23:58'
tag: 
  - node
meta:
  -
    name: Express
    content: Recorded the process of express build
  -
    name: Express
    content: 记录使用express建站的过程
---
本篇记录使用express+MongoDB建站的过程
<!-- more -->

## Node.js
### Node 版本管理
可以使用 n 或 nvm 来管理

nrm 是一个管理 npm 源的工具

### require
主要用途是加载代码
- require 可加载 .js、.json 和 .node 后缀的文件
- require 的过程是同步的，所以这样是错误的:
```
setTimeout(() => {
  module.exports = { a: 'hello' };
}, 0);
```
在使用 require 时要避免循环引用

### exports 和 module.exports
exports 和 module.exports 用来导出代码
exports 和 module.exports 的区别
- module.exports 初始值为一个空对象 {}
- exports 是指向的 module.exports 的引用
- require() 返回的是 module.exports 而不是 exports

> 建议直接使用 module.exports


## MongoDB

见 MongoDB  安装记录 Markdown

## 模板引擎
### ejs
`<% code %>：运行 JavaScript 代码，不输出`

`<%= code %>：显示转义后的 HTML内容`

`<%- code %>：显示原始 HTML 内容`

> 注意：<%= code %> 和 <%- code %> 都可以是 JavaScript 表达式生成的字符串，当变量 code 为普通字符串时，两者没有区别。当 code 比如为 <h1>hello</h1> 这种字符串时，<%= code %> 会原样输出 <h1>hello</h1>，而 <%- code %> 则会显示 H1 大的 hello 字符串。

### includes
```
<%- include('header') %>
  <h1><%= name.toUpperCase() %></h1>
  <p>hello, <%= name %></p>
<%- include('footer') %>
```

我们将原来的 users.ejs 拆成出了 header.ejs 和 footer.ejs，并在 users.ejs 通过 ejs 内置的 include 方法引入，从而实现了跟以前一个模板文件相同的功能。

**小提示：拆分模板组件通常有两个好处：**
1. 模板可复用，减少重复代码
1. 主模板结构清晰
> 注意：要用 <%- include('header') %> 而不是 <%= include('header') %>

## 中间件

通过 app.use 加载中间件，在中间件中通过 next 将请求传递到下一个中间件，next 可接受一个参数接收错误信息，如果使用了 next(error)，则会返回错误而不会传递到下一个中间件

## 目录结构

models: 存放操作数据库的文件
public: 存放静态文件，如样式、图片等
routes: 存放路由文件
views: 存放模板文件
index.js: 程序主文件
package.json: 存储项目名、描述、作者、依赖等等信息

> 小提示：不知读者发现了没有，我们遵循了 MVC（模型(model)－视图(view)－控制器(controller/route)） 的开发模式。


## 模块

1. express: web 框架
1. express-session: session 中间件
1. connect-mongo: 将 session 存储于 mongodb，结合 express-session 使用
1. connect-flash: 页面通知提示的中间件，基于 session 实现
1. ejs: 模板
1. express-formidable: 接收表单及文件的上传中间件
1. config-lite: 读取配置文件
1. marked: markdown 解析
1. moment: 时间格式化
1. mongolass: mongodb 驱动
1. objectid-to-timestamp: 根据 ObjectId 生成时间戳
1. sha1: sha1 加密，用于密码加密
1. winston: 日志
1. express-winston: 基于 winston 的用于 express 的日志中间件


## app.locals 和 res.locals

在调用 res.render 的时候，express 合并（merge）了 3 处的结果后传入要渲染的模板，优先级：res.render 传入的对象> res.locals 对象 > app.locals 对象，所以 app.locals 和 res.locals 几乎没有区别，都用来渲染模板，使用上的区别在于：**app.locals 上通常挂载常量信息（如博客名、描述、作者信息），res.locals 上通常挂载变量信息，即每次请求可能的值都不一样（如请求者信息，res.locals.user = req.session.user）。**

## 错误处理

我们使用 `winston` 和 `express-winston` 记录日志

> 需要注意的是：记录正常请求日志的中间件要放到 routes(app) 之前，记录错误请求日志的中间件要放到 routes(app) 之后。