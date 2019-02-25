---
title: npm -dev 区别
date: '2018-06-10 12:00:13'
tag: 
  - npm
meta:
  -
    name: Npm
    content: Npm use -dev effect
  -
    name: Npm
    content: Npm-dev
---
本篇讲了Npm中使用-dev的作用
<!-- more -->

在使用 `npm install` 安装 `npm` 包时，有两种命令参数可以把它们的信息写入 `package.json` 文件：

1. `--save`
2. `--save-dev`

`--save` 会把依赖包名称添加到 `package.json` 的 `dependencies` 下

而 `--save-dev` 则会添加到 `devDependencies` 下

## 区别：

`devDependencies` 下列出的模块，是我们开发时用的，不会被部署到生产环境，比如`css-loader`

`dependencies` 下的模块，则是我们生产环境中需要的依赖。