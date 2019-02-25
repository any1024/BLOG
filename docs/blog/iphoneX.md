---
title: iphone Medio query
date: '2018-10-25 17:23:58'
tag: 
  - Css
meta:
  -
    name: medio query
    content: Css Medio query for iphone
  -
    name: medio query
    content: Css iphone 媒体查询
---

本篇讲述了css对iphone使用媒体查询
<!-- more -->
```css
// iPhone X
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  .wrap {
    .main {
      padding-top: 490px;
    }
  }
}
// iPhone 6
@media only screen and (min-device-width: 375px) and (max-device-width: 667px)  and (width: 667px) and (height: 375px)  and (orientation: landscape) and (color: 8) and (device-aspect-ratio: 375/667) and (aspect-ratio: 667/375) and (device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 2) {
  .wrap {
    .main {
      padding-top: 300px;
    }
  }
}
```