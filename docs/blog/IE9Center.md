---
title: 兼容IE9垂直居中方案
date: '2018-07-23 17:23:58'
tag: 
  - css
meta:
  -
    name: Css
    content: one demo
  -
    name: Css
    content: 一个demo
---

一个demo
<!-- more -->

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    #test {
      height: 180px;
      text-align: center;
      background: yellow;
    }

    #sumup {
      background-color: #123456;
    }

    #test:before {
      content: '';
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }

    #sumup {
      display: inline-block;
      vertical-align: middle;
    }
  </style>
</head>

<body>
  <div id="test">
    <div id="sumup">

      <h1 class="titre">Title</h1>
      <div id="date">hello guys</div>
    </div>
  </div>
</body>

</html>
```