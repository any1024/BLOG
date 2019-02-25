---
title: 前端通信之基础篇
date: '2019-01-25 17:23:58'
tag: 
  - javascript
meta:
  -
    name: javascript
    content: browser signal communication
  -
    name: javascript
    content: 前后端通信的几种机制
---
本篇介绍了前后端通信的几种机制
<!-- more -->

1. 同源策略
  1. 若地址里面的协议、域名和端口号均相同则属于同源。
  2. 限制从一个源与另一个源的资源进行交互
  3. 隔离潜在恶意文件的关键机制
  4. 限制了cookie 、localStorage、IndexDb读取
  5. 无法获得另一个资源的DOM
  6. 跨域时，ajax请求无法发送
2. 前后端如何通信
  1. Ajax
    1. 同源策略
  2. WebSocket
    1. 不受同源策略的限制
  3. CORS
    1. 支持跨域，支持同源策略
3. 如何创建ajax
4. 跨域通信的几种方式
  1. jsonP
  2. Hash
  3. [postMessage](https://www.w3cschool.cn/fetch_api/fetch_api-lx142x8t.html)
  4. WebSocket
  5. [CORS](http://www.ruanyifeng.com/blog/2016/04/cors.html)

```JavaScript
/* 封装ajax函数
 * @param {string}opt.type http连接的方式，包括POST和GET两种方式
 * @param {string}opt.url 发送请求的url
 * @param {boolean}opt.async 是否为异步请求，true为异步的，false为同步的
 * @param {object}opt.data 发送的参数，格式为对象类型
 * @param {function}opt.success ajax发送并接收成功调用的回调函数
 */
    function ajax(opt) {
        opt = opt || {};
        opt.method = opt.method.toUpperCase() || 'POST';
        opt.url = opt.url || '';
        opt.async = opt.async || true;
        opt.data = opt.data || null;
        opt.success = opt.success || function () {};
        var xmlHttp = null;
        if (XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest();
        }
        else {
            xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
        }var params = [];
        for (var key in opt.data){
            params.push(key + '=' + opt.data[key]);
        }
        var postData = params.join('&');
        if (opt.method.toUpperCase() === 'POST') {
            xmlHttp.open(opt.method, opt.url, opt.async);
            xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            xmlHttp.send(postData);
        }
        else if (opt.method.toUpperCase() === 'GET') {
            xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
            xmlHttp.send(null);
        } 
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                opt.success(xmlHttp.responseText);
            }
        };
    }
```

