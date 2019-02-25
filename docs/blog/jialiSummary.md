---
title: 杭州嘉里中心项目总结
date: '2018-07-25 17:23:58'
tag: 
  - summary
meta:
  -
    name: Summary
    content: jializhongxing Summary
  -
    name: Summary
    content: 嘉里中心项目
---
本篇介绍了嘉里中心项目中遇到的问题以及解决方案
<!-- more -->

### 杭州嘉里中心项目总结
- 苹果手机媒体查询
- [http://stephen.io/mediaqueries/](http://stephen.io/mediaqueries/)
- 消消乐游戏

  - 逻辑判断

    - 每次点击传入这张图片的索引和图片名
    - 每次将所有索引和图片名存下来在两个数组中
    - 当点击第二次根据图片判断是否同一张
    - 第三次的时候统一将前两张图片翻回去 （如果前一次消除过图片 则跳过这次操作）
    - 记录每一次消除图片的次数 等于 传入的图片次数则进入下一关

  - 消除动画
    - ```css
      .rotateOut {
        animation: rotateOutAni .8s  1 ease-in-out;
        opacity: 0;
      }
      @keyframes rotateOutAni {
        0% {
          transform: rotate3d(0,0,1,0) scale(1);
          opacity: 1;
        }
      
        100% {
            transform: rotate3d(0,0,1,-360deg) scale(.2);
            opacity: 0;
        }
      }
      ```

    - 

  - 消除音效

    - 遇到的问题是如果 用户快速消除两组图片 会导致第二次没有声音   因为第一次没有播放完
    - 一开始使用的方法是每次先将音效关闭在开始播放 （结果失败了)
    - 因为使用的是`pause`  暂停    第二次又是接着上次的音乐尾巴继续播放的

    ```javascript
      playerM () {
            let mEle = document.querySelector('#removemusic')
            mEle.pause = 0
            mEle.play()
      }
    ```

    - 成功代码   `重置时间的秒数`

    ```javascript
      playerM () {
            let mEle = document.querySelector('#removemusic')
            mEle.currentTime = 0
            mEle.play()
          }
    ```

    - 

  - 游戏进入动画

    - 用了一个小技巧就是`倒计时`的`时间`和`动画`的`时间`相同实现每个数字都是重新开始动画的感觉

    ```html
      <div class="countDown">
      	写入倒计时间    
      </div>
    ```



```
```javascript
   	  // data
  	  countDown = 3
        //function
        countDownFn () {
              let timer = setInterval(() => {
                this.countDown -= 1
                if (this.countDown === 0) {
                  this.countOver = true
                  clearInterval(timer)
                }
              }, 800)
            }
  ```


  ```css
  .countDown {
      position: fixed;
      left: 50%;
      top: 50%;
      font-size: 100px;
      transform: translate3d(-50%,-50%, 0);
      color: #666;
      animation: shrink .85s  infinite ease-in-out;
      @keyframes shrink {
        0% {
          transform: translate3d(-50%,-50%, 0) scale(3);
        }
        100% {
          transform: translate3d(-50%,-50%, 0) scale(1);
        }
      }
    }
  ```

### 性能问题
  - 消消乐这个游戏 因为自己的思维不清晰和逻辑不太好一共做了三版本
  - 第二版的话实际上是有添加了一些新的功能，但也同时添加了很多的判断和一些比较吃性能的操作(因为懒就使用了简单粗暴的操作)
    - 导致后来整个游戏的旋转操作在安卓手机上非常的卡
    - 用户体验非常的差
  - 第三版减少了大量的判断（游戏性能稍微好了一点）
  - 后来听学长说有可能是图片大小的问题
    - 结果一试发现导致翻转卡顿的罪魁祸首还真的是图片
    - 压缩了下图片发现没那么卡了..
### 安全处理
  - 加了一些字段  还有每一关完成的判断 以及记录每次点击的下标和时间戳
  - 但是感觉并没什么用
  - 暂时没有很好的方法
### 路径问题
  - static    使用`/static`/ 有情况下会报错   /对应根路径
  - 最好使用`./statis/`  或者直接使用`static/`
### 苹果手机开启无痕模式无法使用默认微信授权
  - 解决办法使用cookies 代替localstorage
  - 页面加载时使用一个使用需要`auth`字段的才能请求成功的接口去请求一下，根据请求成功或者失败来判断是否当前用户是否已经使用了微信授权。




