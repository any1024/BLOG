---
title: JWT使用 -- 转载
date: '2019-02-25 16:00:38'
tag: 
  - JavaScript
meta:
  -
    name: JavaScript
    content: This article show example for official demo
  -
    name: JavaScript
    content: JWT机制
---

个人认为比较不错的JWT描述 -- 来自学长分享
<!-- more -->

[TOC] 

# 前言
由于自己开发的项目中用到了 JWT 技术，前端采用了 `Vue.js` 框架，后端采用了 `CodeIgniter` 框架，故作此文帮助使用相同技术栈的朋友们。

具体思路如下：
把后端生成的 JWT token 存入 localStorage，然后前端切换路由（刷新页面）的时候，通过 Ajax 请求的时候带上这个 token，提交给后端判断当前的 token 是否有效，后端返回结果。

JWT 用处很多，可以用于后台权限的限制、接口安全性校验。

# 使用教程
## 前端 Vue.js

### vue-router 
登录时，将后端返回的 `token` 存入 `localStorage`

使用 `Vue-Router` 判断是否存在 `token`，不存在跳转至登录

```javascript
// JWT 用户权限校验，判断 TOKEN 是否在 localStorage 当中
router.beforeEach(({name}, from, next) => {
  // 获取 JWT Token
  if (localStorage.getItem('JWT_TOKEN')) {
    // 如果用户在login页面
    if (name === 'login') {
      next('/');
    } else {
      next();
    }
  } else {
    if (name === 'login') {
      next();
    } else {
      next({name: 'login'});
    }
  }
});
```

### axios
axios 全局配置拦截器
每次向后端请求携带 头信息

在 `src/main.js` 当中加上以下代码：

```javascript
// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (localStorage.JWT_TOKEN) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `token ${localStorage.JWT_TOKEN}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      console.log('axios:' + error.response.status);
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          store.commit('LOG_OUT');
          router.replace({
            path: 'login',
            query: {redirect: router.currentRoute.fullPath}
          });
      }
    }
    return Promise.reject(error.response.data);   // 返回接口返回的错误信息
  });

Vue.prototype.$http = axios;
```


## 后端 CodeIgniter

后端 Controller 接收请求头信息，验证 token 有效性，无效返回 401 状态码

```php
    $header = $this->input->get_request_header('Authorization', TRUE); // 获取请求头 Authorization
	list($token) = sscanf($header, 'token %s'); // 提取 token
	if ($header != '' && jwt_helper::validate($token)) {
		$userid = jwt_helper::decode($header)->userId; // 解码token 提取 userId 字段
		// do something
	} else {
		show_error("Permission denied", 401, "Please check your token."); // 401错误
	}
```

> 这里提供了自己使用的封装好的 JWT Helper 类 和 JWT 的库 使用方法和文件可以访问 Github
> 仓库：https://github.com/52admln/JWT-CodeIgniter


## 安全性

可参考文章：http://www.cnblogs.com/xiekeli/p/5607107.html 当中的`基于JWT的Token认证的安全问题`。

## 转载

[原文地址](https://segmentfault.com/a/1190000010444825)