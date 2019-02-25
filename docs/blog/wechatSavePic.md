---
title: 微信H5长按保存图片
date: '2017-11-25 16:00:38'
tag: 
  - Vue
meta:
  -
    name: weChat
    content: This article show VueX core composition
  -
    name: weChat
    content: 微信H5长按保存图片demo
---
本篇给出了长按保存图片的demo
<!-- more -->

## 长按保存图片实例
 - 采用canvas画布画出页面中的元素
 - 获取页面中的图片加载到canvas中（把原本页面中的图片隐藏[display:none]）隐藏原本的元素也是可以获取到在画布上绘画的
 - 将canvas的高度设置为手机高度（`document.body.clientHeight`） * 设备像素比(`window.devicePixelRatio`)
 - 在将canvas的style高度设置为手机高度（`document.body.clientHeight`）
 - canvas中绘画的背景也要设置为canvas的高度和宽度（不是style的）
 - canvas中添加图片也可以用`new Image()` 然后用新创建的图片
 ```javascript
    <!--封装了写字（可忽略）-->
    fillText (cxt, desc, width, height) {
      cxt.textBaseline = 'top'
      cxt.font = '16px Arial'
      cxt.fillStyle = '#000'
      cxt.fillText(desc, width, height)
    },
    <!--封装了图片加载和加载结束事件（可忽略）-->
    drawImg (img, fn) {
      return new Promise(function (resolve, reject) {
        img.onload = function () {
          fn()
          resolve(true)
        }

        img.onerror = function () {
          /* eslint-disable */
          reject(false)
        }
      })
    },
    <!--ios检测-->
    isIOS () {
      var u = navigator.userAgent;
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      return isiOS
    },
    async  readCavasImg() {

      const {clientHeight, clientWidth} = document.body; 
        
      <!--图片加载方式之新建-->
      let img1 = new Image();

      let canvas = document.createElement('canvas');
      canvas.width =  clientWidth * window.devicePixelRatio
      canvas.height = clientHeight * window.devicePixelRatio
      canvas.style.width = clientWidth + 'px'
      canvas.style.height = clientHeight + 'px'

      let cxt = canvas.getContext('2d');
      img1.src = `static/answers/${this.imgUrl}`;
      // cross && img1.setAttribute("crossOrigin",'Anonymous')

      const f1 = await this.drawImg(img1, () => {
        // 画背景
        cxt.drawImage(img1,0,0,canvas.width,canvas.height);        
      })
     
      // // 画月亮
      let moonDraw = this.$refs.moonDraw
      let computedWidth = canvas.width
      cxt.drawImage(moonDraw, computedWidth - (computedWidth / 3.5) , 10, computedWidth / 3.5, computedWidth / 3.5); 
      
      // 画字
      cxt.font = "bold 45px Arial";
      if(this.isIOS()) {
        if(clientHeight < 650 ) {   
          cxt.fillText(this.$root.userName, computedWidth / 2 - 73, clientHeight / 2.5)
        } else {
          cxt.font = "bold 60px Arial";
          cxt.fillText(this.$root.userName, computedWidth / 2 - 50, clientHeight / 2)
        }
        
      } else {
        cxt.fillText(this.$root.userName, computedWidth / 2 - 60, clientHeight / 2)
      }
        
      cxt.textBaseline = 'middle'; //设置文本的垂直对齐方式
      cxt.textAlign = 'center';//设置文本的水平对齐方式
      

      let img3 = new Image();
      img3.width = clientWidth;
      img3.height = clientHeight;      
      // 获取url
      let img3Url = canvas.toDataURL('image/png');
      img3.src = img3Url;

      const f2 = await this.drawImg(img3, () => {
        this.$refs.printMe.appendChild(img3);
      })
    }
 ```