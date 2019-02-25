---
title: Radio样式问题解决
date: '2018-11-25 8:00:33'
tag: 
  - Css
meta:
  -
    name: Radio
    content: use lable resolve inputRadio style
  -
    name: Radio
    content: 使用Lable解决inputRadio样式问题
---
使用Lable解决inputRadio样式问题的一个小demo
<!-- more -->

## html
 ```html
    <input :id="`radioButton1`" type="radio" name="item">
    <label :for="`radioButton1`"></label>
 ```
## css
```css
    input[type=radio] {
          width: 40px;
          height: 40px;
          margin-right: 5px;
          opacity: 0;
    }
    input[type=radio]:checked+label {
      background-clip: content-box;
      background-color: #a42929;
      box-shadow: 3px 2px 2px #888888;
    }
```