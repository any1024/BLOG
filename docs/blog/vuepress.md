---
title: 使用vuepress从0开始搭建博客
date: '2018-11-06 11:02:33'
tag: 
  - vuepress
meta:
  -
    name: vuepress
    content: about vuepress build MyBlog
  -
    name: vuepress
    content: 关于vuepress搭建博客
---

在前端折腾的这条路上，我们总是使用了许多奇奇怪怪(非常好用)的工具，还有了解到了许多新的技术，但是在初次的尝试之后，经过一段时间不去使用可能就会忘记，所以你就应该搭建一个个人博客，记录自己每一次崭新的尝试，本篇将教你如何搭建属于自己的博客。
<!-- more -->




# 📚<span data-type="color" style="color:rgb(65, 70, 75)">前言</span>


---


本篇用来分享本人在使用VuePress从零开始搭建个人博客时，踩过一些坑以及自己的一些心得，希望能帮助你顺利的避开这些坑。因为本篇使用的管理器是yarn,所以你得先安装一个yarn，并具备基础使用yarn的一些命令。


# 🚩目标


---


使用VuePress搭建个人博客，并将之部署到线上。


# 📖开发流程


---


1.安装VuePress
2.使用主题搭建个人博客
3.使用自动化脚步部署
6.将博客部署到GitPages上
7.将博客部署到Coding上


# 🏙️项目结构


---


```powershell
│  .gitignore
│  delay.sh
│  package.json
│  yarn.lock
│
└─docs
    │  README.md
    │
    ├─.vuepress
    │  │  config.js
    │  │
    │  ├─dist
    │  │  │  404.html
    │  │  │  CNAME
    │  │  │  index.html
    │  │  │  logo.png
    │  │  │  service-worker.js
    │  │  │
    │  │  ├─assets
    │  │  │  ├─css
    │  │  │  │      1.styles.23daee9f.css
    │  │  │  │      2.styles.50882dc4.css
    │  │  │  │      styles.94f2108d.css
    │  │  │  │
    │  │  │  ├─img
    │  │  │  │      search.83621669.svg
    │  │  │  │
    │  │  │  └─js
    │  │  │          1.23daee9f.js
    │  │  │          2.50882dc4.js
    │  │  │          3.9e4928b6.js
    │  │  │          4.9d5c184f.js
    │  │  │          5.005ea06b.js
    │  │  │          app.94f2108d.js
    │  │  │
    │  │  └─blog
    │  │          js.html
    │  │          vuepress.html
    │  │
    │  └─public
    │          logo.png
    │
    └─blog
            vuepress.md
```


# 🛠️初始化项目结构


---


```powershell
# 打开命令行 

#如果没有安装yarn请先安装
#npm i yarn -g

# 新建文件夹
cd ~/Desktop && mkdir myblog

# 进入新建的文件夹
cd myblog

# 安装vuepess  下面安装的是0.*版本  因为1.*版本的api可能  
yarn add vuepress # 或者：npm install vuepress

# 初始化README
mkdir docs && echo '# Hello MyBlog' > docs/README.md

cd docs

# 新建.vuepress 和 .vuepress下得全局配置 config.js
mkdir .vuepress && echo '' > .vuepress/config.js
```

现在你的项目目录应该是这样


![image.png | left | 166x176](https://cdn.nlark.com/yuque/0/2018/png/167889/1541401957164-b5fa3e18-9fc8-4134-a169-b5054a8d3902.png "")

<div data-type="alignment" data-value="right" style="text-align:right">
  <div data-type="p"></div>
</div>


# ⏱️ 开发过程


---

1.修改基本配置

```javascript
// 打开根目录下的package.json
// 其他不动--对scripts下的内容进行修改

修改前
{
  "dependencies": {
    "vuepress": "^0.14.4"
  }
}


修改后
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
  "dependencies": {
    "vuepress": "^0.14.4"
  }
}

```

2.因为我使用的是[yubisakit主题](https://wuwaki.me/yubisaki/usage.html)

```powershell
# 进入根目录安装
yarn add vuepress-theme-yubisakit -S

# 因为使用的主题中用到了插件
yarn add markdown-it-task-lists markdown-it-imsize -S
```

3.修改配置  更多配置请看[官网](https://v0.vuepress.vuejs.org/zh/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE)
```javascript
// 打开 /docs/.vuepress/config.js


// 修改内容为 

module.exports = {
  title: '标题',
  description: '描述',
  theme: 'yubisaki',
  port: 8080,
  // 如果部署的地址为https://foo.github.io/bar/
  base: "/bar/", 
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  // 开启serverWorker
  serviceWorker: true,
  // 不支持ie  只支持主流浏览器
  evergreen: true,
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: true },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    config: md => {
      md.use(require('markdown-it-task-lists')) // 一个 checkbox 的 TODO List 插件
        .use(require('markdown-it-imsize'), { autofill: true }) // 支持自定义 md 图片大小 ![](http://test.png =200x200)
    }
  },
  themeConfig: {
    tags: true,
    // 博客背景图片
    // background: `/bg.jpeg`,
    // github card
    github: 'Overcase',
    // 博客的 logo
    logo: '/logo.png',
    // 定制文章标题颜色
    accentColor: '#ac3e40',
    // 每页显示的文章数量
    per_page: 5,
    // 创建文章的时间格式, 不设则不显示 可选 [yyyy-MM-dd HH:mm:ss]
    date_format: 'yyyy-MM-dd',
    nav: [
      { text: 'Home', link: '/blog/', root: true },
      { text: 'TAGS', link: '/tags/', tags: true },
      { text: '关于我', link: '/about/' },
      { text: 'github', link: 'https://github.com/Overcase' },
    ],
    serviceWorker: {
       updatePopup: { 
          message: "New content is available.", 
          buttonText: "Refresh" 
       }
     }
  }
}
```

4.修改主页
```powershell
// 打开docs下的README.md
---
heroText: 懒人 # title
activity: true # 使用自定义的 activity layout, 会收起右边的卡片栏
hidden: true # 设置是否在文章列表中显示
tagline: 解决问题能获得巨大的满足感和成就感 # 描述
# 在.vuepress中新建一个目录 public 在里面放入你的logo
heroImage: /logo.png # logo
# 参考官方默认主题的配置
actionText: 了解一下 →  
actionLink: /blog/ # action 链接
# 你也可以再此添加多个 action, 参考下面的配置
# actions:
#   - text: action1
#     link: /yubisaki/usage1.html
#   - text: action2
#     link: /yubisaki/usage2.html
features:
  - title: 这是什么
    details: 一个基于 vuepress 的博客主题, 它基于 vuepress 提供的默认主题
  - title: 有哪些特点
    details: 提供文章列表, 文章分页, 文章详情, github card, 自定义活动页 layout 等等功能
  - title: TODO
    details: 标签云, TAG ARCHIVE, 一些脚本, 一些 开箱即用的layout
---
```

5.启动项目
然后在根目录下yarn run docs:dev
如果正常的话你就应该看到大概应该是下面这个样子的



![image.png | left | 827x556](https://cdn.nlark.com/yuque/0/2018/png/167889/1541472419124-f1b31f1d-bf7a-4930-8927-965a147ecfb3.png "")



如果显示 <span data-type="color" style="color:rgb(153, 153, 153)">How did we get here?   </span>
那也不用担心，有可能是以下两种情况
1. <span data-type="color" style="color:#262626">可能是/docs下的README.md 文件出错了  可以删了重新创建</span>
2. 或者又是安装了全局vuepress  又在文件夹中安装了vuepress导致了   可以选择删除一个
```plain
// 删除全局vuepress
npm uninsatll -g vuepress

// 或者进行npm根目录删除 查看npm根目录命令如下
npm root -g

// 删除文件夹中的vuepress  直接在根目录下运行如下命令
npm uninstal vuepress
```

5.发表一篇博文
首先现在docs下创建一个目录blog， 在blog中放入一篇自己的mackdown格式的博文
现在项目的目录应该是下面这样的


![image.png | left | 352x322](https://cdn.nlark.com/yuque/0/2018/png/167889/1541473117357-bd1fd78f-bcce-4752-a959-a2fb8f0850b1.png "")


打开新建的md文件 在里面添加这些. 
```makedown
---
title: 使用vuepress从0开始搭建博客
date: '2018-11-6 11:02:33'
tag: 
  - vuepress
meta:
  -
    name: vuepress
    content: about vuepress build MyBlog
  -
    name: vuepress
    content: 关于vuepress搭建博客
---

在前端折腾的这条路上，我们总是使用了许多奇奇怪怪(非常好用)的工具，还有了解到了许多新的技术，但是在初次的尝试之后，经过一段时间不去使用可能就会忘记，所以你就应该搭建一个个人博客，记录自己每一次崭新的尝试，本篇将教你如何搭建属于自己的博客。
<!-- more -->

# test
正文
```

正常情况下你能看到home标签下多出了一篇文章
如果没有的话 可以回到根目录重新yarn run docs:dev 一次


![image.png | left | 400x179.7752808988764](https://cdn.nlark.com/yuque/0/2018/png/167889/1541474126062-fa5a6fdd-57b9-4465-8cc7-fe3effb85484.png "")


👍到这一步恭喜你，你的博客已经搭建完毕了。
关于更多主题请[参考](https://github.com/search?q=vuepress-theme)
# 🔫项目部署


---


1.部署到github上并映射到自己的域名下

首先你需要了解一下githubPages 是什么

[Github Pages](http://pages.github.com/)是面向用户、组织和项目开放的公共静态页面搭建托管服 务，站点可以被免费托管在 Github 上，你可以选择使用 Github Pages 默认提供的域名 [github.io](https://jekyllcn.com/docs/github-pages/)或者自定义域名来发布站点

首先在GitHub上创建一个仓库

<span data-type="color" style="color:#F5222D">不使用脚步部署</span>（推荐第一次先用这个，直接用脚本部署可能会跳坑里出不来）

```powershell
# 在根目录下执行一下命令

npm run docs:build

# 等待打包完成后进入disc文件夹呢
# 使用git命令
git init
git remote add origin <你的远程地址>
git add -A
git commit -m 'feat: init blog'
# 将本地master上传到github的gh-pages分支上
# 因为github默认将gh-pages开启
git push origin master:gh-pages
```


---

<span data-type="color" style="color:#F5222D">使用脚本部署</span>
首先在根目录下的创建一个delay.sh（不使用可以跳过此步骤）

```powershell
# 在windows操作系统中请在根目录打开Git Bash Here 使用下面命令生成一个sh文件
touch delay.sh
```

delay.sh 是一个打包上传dist文件到git上的自动化脚本（可双击执行）
下面的代码需要有一点点git命令的基础

```powershell
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名 请取消下面的注释并修改成自己的网址
# echo 'blog.linhuifeng.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  使用ssh
# 请修改成自己仓库的地址  可以将ssh传输改成 https
git push -f git@github.com:Overcase/BLOG.git master:gh-pages

```

使用ssh可以会报以下错误



![image.png | left | 448x82](https://cdn.nlark.com/yuque/0/2018/png/167889/1540622576869-c3244fa3-3a4c-4306-bce3-d728138aeb36.png "")


那么你就需要配置一下github的密钥
[配置密钥](https://www.jianshu.com/p/f22d02c7d943)

配置完成后双击这个脚本 他就会自动将文件上传到github上

---

无论使用哪种方式在长传成功以后

在新建仓库的setting中


![image.png | left | 747x130](https://cdn.nlark.com/yuque/0/2018/png/167889/1540623026023-77ac4f1e-121d-48b0-acbe-95f968337286.png "")


下拉找到GitHub Pages


![image.png | left | 747x374](https://cdn.nlark.com/yuque/0/2018/png/167889/1540623299241-dbbef745-f791-4ee1-bed1-b0d217fac70b.png "")


👍 如果使用git默认的域名，那么恭喜你，你的项目已经部署完成了，没错就是这么的简单。

如果要使用自己的域名需要做如下配置（以阿里云为例子）

先进入阿里云的域名控制台（省略如何进入）
如果没有域名，[购买域名]（[https://wanwang.aliyun.com/?spm=5176.8142029.selected.4.5cec6d3eILwRBm](https://wanwang.aliyun.com/?spm=5176.8142029.selected.4.5cec6d3eILwRBm)）

点击解析



![image.png | left | 747x95](https://cdn.nlark.com/yuque/0/2018/png/167889/1540624786637-aeaf2369-1d8d-4281-b06b-a18fee615da2.png "")


点击添加记录



![image.png | left | 747x131](https://cdn.nlark.com/yuque/0/2018/png/167889/1540624961849-5ccba178-229f-4cd4-b686-a082e6000c67.png "")



选择CNAME

配置二级域名

修改记录值为gitpages原本的地址
注意原来的地址可能是这么长长的  记得在域名记录值中要去掉https:// 和/BLOG/   也就是把头和尾巴去掉

![image.png | left | 229x32](https://cdn.nlark.com/yuque/0/2018/png/167889/1540625432124-c0e04891-88d1-4383-933b-6c46a0ebe312.png "")





![image.png | left | 663x471](https://cdn.nlark.com/yuque/0/2018/png/167889/1540625197743-35310d83-224b-489b-beb8-3a3a39a1c6eb.png "")


修改完成后点击确定  稍微等个两分钟你在访问你自己定义的域名
👍 完成以上步骤 恭喜你配置完成了

2.部署到coding上并映射到自己的域名下

我相信大家肯定在想，既然都githubPages都可以用了，为什么还要用coding？
因为git的服务器部署在国外，除了不太稳定以外(有被墙的风险)，也无法在国内SEO(听说)
而coding因为是中国的产品，使用的是中文，在语言上对许多不太懂英文的同学就友好太多了，而且还具备一些一键部署等功能，个人感觉来说，用起来还是比较简单的。

先注册一个coding账号（腾讯云和原生的都可以）  
[注册地址](https://coding.net/)

点击头像  进入控制台  创建一个项目（以下演示使用腾讯云账号）


![image.png | left | 300x60.9340252038547](https://cdn.nlark.com/yuque/0/2018/png/167889/1540626899131-d44bc7eb-3e7b-4850-bd87-155e66b13f77.png "")




![image.png | left | 300x36.456808199121525](https://cdn.nlark.com/yuque/0/2018/png/167889/1540627130413-11815193-39c6-4a48-863e-a00f88bf2f04.png "")





![image.png | left | 300x212.46575342465755](https://cdn.nlark.com/yuque/0/2018/png/167889/1540626857214-954ad238-5087-4a34-a125-aca09ea17a47.png "")


然后将自己dist中的代码上传到coding上

```plain
# 在根目录下执行一下命令

npm run docs:build

# 等待打包完成后进入disc文件夹呢
# 使用git命令
git init
git remote add origin <你的远程地址>
git add -A
git commit -m 'feat: init blog'
# 将本地master上传到coding 的master分支
git push origin master:master
```

然后进入pages修改配置


![image.png | left | 100x206.640625](https://cdn.nlark.com/yuque/0/2018/png/167889/1540627189384-b3faa245-5218-477e-9d25-2011f9606af6.png "")




![image.png | left | 400x43.74453193350831](https://cdn.nlark.com/yuque/0/2018/png/167889/1540627247061-22722025-68a0-45e6-a9ec-45c346bdb260.png "")




![image.png | left | 400x131.40794223826714](https://cdn.nlark.com/yuque/0/2018/png/167889/1540627325265-2bace1f7-975e-4fe5-be5e-64f58bfec706.png "")


使用自定义域名  请参考上面githubpages部署自定义域名

只要将记录值改成


![image.png | left | 400x80.21978021978022](https://cdn.nlark.com/yuque/0/2018/png/167889/1540627520112-ccd7b673-0d5a-4c24-8794-c12f3c013015.png "")


👍 相信不用我多说，你现在已经使用coding部署好自己的个人博客拉，这个很简单把。


# 💬结语


---


希望本篇教学能帮助你使用[vuepress0.\*](https://v0.vuepress.vuejs.org/zh/guide/)搭建好一个初始化博客并部署上线，让你避开中间的一些坑。
