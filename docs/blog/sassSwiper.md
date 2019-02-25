
Swiper---
title: vue下库使用
date: '2019-02-25 10:02:33'
tag: 
  - Library
meta:
  -
    name: Library
    content: vue surroundings add Swiper + Animate + Sass
  -
    name: Library
    content: vue Cli2 安装 Swiper + Animate + Sass
---
本篇讲了如何在vue Cli2 安装 Swiper + Animate + Sass
<!-- more -->

### Swiper滑动插件使用

> 官方地址 [https://www.swiper.com.cn](https://www.swiper.com.cn)

##### 主要学习了 Swiper Animate使用方法
> 地址[https://www.swiper.com.cn/usage/animate/index.html](https://www.swiper.com.cn/usage/animate/index.html)
> Swiper Animate是Swiper中文网提供的用于在Swiper内快速制作CSS3动画效果的小插件，适用于Swiper2.x、Swiper3.x和Swiper4.x 。
#### 安装默认CSS样式
npm install --save normalize.css
##### 学习路线
>  + 安装vue脚手架
>
>   ```powershell
>  $ npm init webpack test
>   ```
>
>  + 配置scss
>  ```powershell
>  $ npm install --save-dev sass-loader
>  //sass-loader依赖于node-sass
>  $ npm install --save-dev node-sass
>  ```
>  +  修改配置文件
>  ```JavaScript
>  {
>     test: /\.scss$/,
>     loaders: ['style', 'css', 'sass']
>  }
>  ```
>  + 安装swiper
>  ```powershell
>  $ npm install swiper
>  ```
>  + 按Swiper官方Api引入
>
>    ```html
>    <link rel="stylesheet" href="./static/animate.min.css">
>    ...
>    <script src="./static/swiper.animate.min.js"></script>
>    ```
>
>    ```javascript
>    //App.vue
>    import Swiper from "swiper"; //在app.vue引入
>    
>    new Swiper(".swiper-container", {});//实例化
>    ```
>    注:实例化后对象查看官方API [https://www.swiper.com.cn/api/index.html](https://www.swiper.com.cn/api/index.html)
>

##### 使用总结

> 1	实例化需要在dom渲染完成后执行,	vue mounted (){} ;钩子函数中使用
>
> 2     注意需要包裹两个壳![pic](C:\Users\WuXiaohong\Desktop\demo_delete\test\pic.png)	

> - **红色框** 表示最外层,他需要添加css overflow: hidden; 注意不需要设置高度.
>
> - **绿色框** 表示显示内容, 这里我设置高度为可视区高度 height:100vh;
>
> - **粉色框** 表示子项内容 可以在里面任意撸html代码
>
>   **注:** 上面的框分别是 app.vue 未最外层, 设置index.vue 包裹所有子项



##### 添加动画

> - 根据官方手册 我们需要引入 `swiper.animate.min.js ` 和 `animate.min.css` 
>
> - 最后在item子项添加样式就好了
>
> - 注意 需要添加class样式
>
>   ```html
>   <h1 class="ani animated" swiper-animate-effect="rotateIn" swiper-animate-duration="1s" swiper-animate-delay="0s">Swiper</h1>
>   ```
>
>   + 特别需要注意 class="ani animated" 是一定要加的 缺一不可
>   + 动画使用  [https://daneden.github.io/animate.css/]( https://daneden.github.io/animate.css/)
>   + **swiper-animate-effect** 表示执行的动画名称;
>   + **swiper-animate-duration** 表示动画执行时间
>   + **swiper-animate-delay** 动画延时执行 (以单个页面计算,就不需要去计算上一个页面的动画时间)
>   + 另外需要注意的是执行动画的元素不能是行内元素