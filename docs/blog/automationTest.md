---
title: 前端测试篇
date: '2019-01-25 17:23:58'
tag: 
  - test
meta:
  -
    name: test
    content: Test preliminary understanding
  -
    name: test
    content: 初步认识前端测试
---
本篇例举了前端测试的一些工具
<!-- more -->


1. [PhantomCSS](https://github.com/Huddle/PhantomCSS)

像素对比比较出名的工具是[PhantomCSS](https://github.com/Huddle/PhantomCSS)。 PhantomCSS结合了 [Casperjs](http://casperjs.readthedocs.org/)截图和[ResembleJs](http://huddle.github.io/Resemble.js/) 图像对比分析。单纯从易用性和对比效果来说还是不错的。

1. **如何测试多浏览器**

如果想测试多浏览器下的兼容性情况，只需要拿到多个浏览器下的截图即可。多浏览器测试最出名的当属[selenium](http://www.seleniumhq.org/) , selenium可以自动化的获取多个浏览器下的截图，前端工程师来说还可以借助Node的[webdriver](http://webdriver.io/) 来轻松开发测试脚本。
但selenium的安装和上手成本要稍大些，而且对于多浏览器来说，各个浏览器之间的兼容性对比容易出错。不同浏览器截图可能一像素的偏差就导致截屏对比失败，多浏览器可能**更适用回归性测试**。
1. **响应式页面测试**

国外有人将像素对比应用到了响应式页面上，如果您针对PC和移动设备使用同一个网页，响应式测试可以很快的回归你的页面在不同尺寸上的页面是否正常。与单纯针对移动端开发的响应式不同，同时支持PC移动的页面更容易发生错乱。
例如[BackstopJS](http://garris.github.io/BackstopJS) 项目，便是通过PhantomJS、capserJS等工具在不同尺寸下截图然后根据resemberJS进行像素比对判断是否正常:
1. dom结构对比

像素对比虽然直观，但动态元素居多且无法保证测试页面与线上页面同步时有所局限。[@云龙](https://github.com/fouber)大牛针对这个问题提供了新的解决方案[page-monitor](https://github.com/fouber/page-monitor)，根据dom结构与样式的对比来对比整个页面的变动部分。 

![图片](http://fex.baidu.com/img/front-end-test/pagemonitor.png)
通过page-monitor你可以很快的搭建一个监控系统，监控页面的文字、样式等变动情况。
像素对比和dom结构对比各有优势，但也无法解决全部问题。何不综合利用呢？FEX部门QA同事就结合了两种方式提供了pagediff平台，正在对外公测中！有兴趣可以体验一把吧~ [http://pagediff.baidu.com](http://pagediff.baidu.com)
QA同学开发的平台都这么炫，作为前端怎么能不了解一点测试知识呢？
1. 用户操作测试

上面提到界面回归测试**无法取代功能测试**。即便是界面正常，功能正常也是必须关注的部分。最直接的功能测试就是模拟用户操作，通过模拟正常的操作流程来判断页面展现是否符合预期。
[Phantomjs](http://phantomjs.org/)**、**[CasperJS](http://casperjs.readthedocs.org/en/latest/)
大名鼎鼎的PhantomJS当然要隆重介绍啦！前面界面对比测试基本都是基于PhantomJS开发的， Phantom JS是一个服务器端的 JavaScript API 的 WebKit。其支持各种Web标准： DOM 处理, CSS 选择器, JSON, Canvas, 和 SVG。对于web测试、界面、网络捕获、页面自动化访问等等方面可以说是信手拈来。



