---
title: Travis初探 -- 转载
date: '2019-3-24 17:23:58'
tag: 
  - test
meta:
  -
    name: test
    content: getting Started Travis CI
  -
    name: test
    content: Travis 入门教程
---
本篇为转载文章[http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html](http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html)
<!-- more -->

## 一、什么是Travis？
Travis CI 提供的是持续集成服务（Continuous Integration，简称 CI）。它绑定 Github 上面的项目，只要有新的代码，就会自动抓取。然后，提供一个运行环境，执行测试，完成构建，还能部署到服务器。
持续集成指的是只要代码有变更，就自动运行构建和测试，反馈运行结果。确保符合预期以后，再将新代码"集成"到主干。
持续集成的好处在于，每次代码的小幅变更，就能看到运行结果，从而不断累积小的变更，而不是在开发周期结束时，一下子合并一大块代码。

## 二、使用准备
```
拥有 GitHub 帐号
该帐号下面有一个项目
该项目里面有可运行的代码
该项目还包含构建或测试脚本
```

如果这些条件都没问题，就可以开始使用 Travis CI 了。
首先，访问官方网站 [travis-ci.org](https://travis-ci.org/)，点击右上角的个人头像，使用 Github 账户登入 Travis CI。
Travis 会列出 Github 上面你的所有仓库，以及你所属于的组织。此时，选择你需要 Travis 帮你构建的仓库，打开仓库旁边的开关。一旦激活了一个仓库，Travis 会监听这个仓库的所有变化。
![图片](http://www.ruanyifeng.com/blogimg/asset/2017/bg2017121902.png)

## 三、.travis.yml
Travis 要求项目的根目录下面，必须有一个.travis.yml文件。这是配置文件，指定了 Travis 的行为。该文件必须保存在 Github 仓库里面，一旦代码仓库有新的 Commit，Travis 就会去找这个文件，执行里面的命令。
这个文件采用 [YAML](http://www.ruanyifeng.com/blog/2016/07/yaml.html) 格式。下面是一个最简单的 Python 项目的.travis.yml文件。

language: python
>script: true

上面代码中，设置了两个字段。language字段指定了默认运行环境，这里设定使用 Python 环境。script字段指定要运行的脚本，script: true表示不执行任何脚本，状态直接设为成功。
Travis 默认提供的运行环境，请参考[官方文档](https://docs.travis-ci.com/user/languages) 。目前一共支持31种语言，以后还会不断增加。
下面是一个稍微复杂一点的.travis.yml。

language: python
sudo: required
before_install: sudo pip install foo
>script: py.test

上面代码中，设置了四个字段：运行环境是 Python，需要sudo权限，在安装依赖之前需要安装foo模块，然后执行脚本py.test。
## 四、运行流程
Travis 的运行流程很简单，任何项目都会经过两个阶段。
>install 阶段：安装依赖
>script 阶段：运行脚本
### 4.1 install 字段
install字段用来指定安装脚本。

>install: ./install-dependencies.sh

如果有多个脚本，可以写成下面的形式。

install:
  - command1
>  - command2

上面代码中，如果command1失败了，整个构建就会停下来，不再往下进行。
如果不需要安装，即跳过安装阶段，就直接设为true。

>install: true
### 4.2、script 字段
script字段用来指定构建或测试脚本。

>script: bundle exec thor build

如果有多个脚本，可以写成下面的形式。

script:
  - command1
>  - command2

注意，script与install不一样，如果command1失败，command2会继续执行。但是，整个构建阶段的状态是失败。
如果command2只有在command1成功后才能执行，就要写成下面这样。

>script: command1 && command2
### 4.3 实例：Node 项目
Node 项目的环境需要写成下面这样。

language: node_js
node_js:
>  - "8"

上面代码中，node_js字段用来指定 Node 版本。
Node 项目的install和script阶段都有默认脚本，可以省略。
>install默认值：npm install
>script默认值：npm test

更多设置请看[官方文档](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/)。
### 4.4 部署
script阶段结束以后，还可以设置[通知步骤](https://docs.travis-ci.com/user/notifications/)（notification）和[部署步骤](https://docs.travis-ci.com/user/deployment/)（deployment），它们不是必须的。
部署的脚本可以在script阶段执行，也可以使用 Travis 为几十种常见服务提供的快捷部署功能。比如，要部署到 [Github Pages](https://docs.travis-ci.com/user/deployment/pages/)，可以写成下面这样。

deploy:
  provider: pages
  skip_cleanup: true
  github_token: $GITHUB_TOKEN # Set in trasvis-ci.org dashboard
  on:
>    branch: master

其他部署方式，请看[官方文档](https://docs.travis-ci.com/user/deployment/)。
Thanks



