---
title: 杭工学堂项目总结
date: '2018-07-25 17:23:58'
tag: 
  - Summary
meta:
  -
    name: Summary
    content: hanggongxuetang Summary
  -
    name: Summary
    content: 杭工学堂项目总结hanggong
---
本篇记录了杭工学堂项目总结
<!-- more -->

杭工学堂项目经验

项目难点

- 项目难点主要有以下两点
  - H5移动端的适配
  - 微信端苹果和安卓的音乐无法自动播放问题

难点解决

- h5移动端适配解决方案（学长提供）[原文链接](https://note.youdao.com/share/?id=6f9313965411c2da5c5e60016dc7e158&type=note#/)
  - 本项目中采用的是PostCss插件 输入px自动转换为vw适应
        // 安装插件

        npm i postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-cssnext postcss-viewport-units cssnano --S
        
        //找到根目录中.postcssrc.js，对PostCSS插件进行配置
        module.exports = {
          "plugins": {
            "postcss-import": {},
            "postcss-url": {},
            // to edit target browsers: use "browserslist" field in package.json
            "postcss-write-svg": {
              uft8: false
            },
            "postcss-cssnext": {},
            "postcss-px-to-viewport": {
              viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
              viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
              unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
              viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
              selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
              minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
              mediaQuery: false // 允许在媒体查询中转换`px`
            },
            "postcss-viewport-units": {},
            "cssnano": {
              preset: "advanced",
              autoprefixer: false, // 和cssnext同样具有autoprefixer，保留一个
              "postcss-zindex": false
            }
          }
        }
        //引入viewport-units-buggyfill解决兼容问题在 index.html 中引入js
        
        <script src="//g.alicdn.com/fdilab/lib3rd/viewport-units-buggyfill/0.6.2/??viewport-units-buggyfill.hacks.min.js,viewport-units-buggyfill.min.js"></script>
        <script>
          window.onload = function () { 
            window.viewportUnitsBuggyfill.init({ hacks: window.viewportUnitsBuggyfillHacks });
          }
        </script>
        
        // 如果img图片不显示
        // 全局引入CSS样式
        
        img { content: normal !important; }
    
- 微信端苹果和安卓的音乐无法自动播放解决方案
  - 本项目中采用的是监听touchstart事件加载并开启音乐(学长提供)有道云链接

zeptoFullPage使用

- 下载地址[zeptoFullPage](https://github.com/yanhaijing/zepto.fullpage)下载地址 
- 推荐使用[swiper](https://www.swiper.com.cn/usage/animate/index.html)，因为swiper能够直接配合animate使用
- 
          //把下载文件放在static目录下 在index页面导入下载好的文件
          <link rel="stylesheet" href="./static/zepto.fullpage.css">
          <script src="./static/zepto.js"></script>
          <script src="./static/zepto.fullpage.js"></script>
      	
      	//vue文件中
      	//template
      	<div class="main">
              <div class="con wp-inner">
                <index class="page page0" />
                <one class="page page1" :animat = "1 == this.index"/>
                <two class="page page2" :animat = "2 == this.index"/>    
                <three class="page page3"/>
                <four class="page page4"/>
              </div>
        	</div>
      	//js
      	methods: {
              createFullPage() {
                $('.wp-inner').fullpage({
                  page: '.page',
                    start: 0,
                    duration: 500,
                    dir: 'v',
                    change: () => {
                      this.index = $.fn.fullpage.getCurIndex()
                    }
                });
              }
          }
           mounted() {
              this.createFullPage();
           }

项目小经验

- H5开发不能以浏览器上的样子为准，得多拿几个手机调试，页面内容要尽量靠中间
- 文件命名和图片命名一定要易懂，不然文件多了自己都找不到了
