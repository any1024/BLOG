---
title: Vue过渡动画
date: '2019-02-20 17:23:58'
tag: 
  - Vue
meta:
  -
    name: Vue
    content: This article describe vue animatevue
  -
    name: Vue
    content: vue基础的过渡动画
---
本篇讲述了vue基础的过渡动画
<!-- more -->

### html
```html
<transition name="fade">
      <router-view></router-view>
</transition>   
```
本篇讲了前端基础的错误监控
<!-- more -->

### css
```css
.fade-enter-active, .fade-leave-active {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  opacity: 0;
  z-index: 10;
  transition: opacity 1500ms;
}

.fade-leave-active {
  z-index: 100;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}

```