---
title: 前端常见攻击方式
date: '2019-02-25 17:23:58'
tag: 
  - Safety
meta:
  -
    name: Safety
    content: common Safety problem
  -
    name: Safety
    content: 前端安全
---
本篇列举了常见的前端攻击方式以及攻击的原理
<!-- more -->
## CSRF
1. 基本概念和缩写
  1. CSRF，通常称为跨站请求伪造 英文名称Cross-site request forgery 缩写 CSRF
2. 攻击原理
  1. 拿到用户登陆过网站的cookie，使用cookie去访问用户登陆网站
3. 防御措施
  1. Token验证
    1. 服务器给客户端一个Token 每次请求都必须带上
  2. Referer验证
    1. 页面来源验证
  3. 隐藏令牌
    1. 比如隐藏在http头中的字段
# XSS
1. 基本概念和缩写
  1. 跨站脚步攻击，英文名称Cross-site scripting
2. 攻击原理
  1. 向你页面注入脚本
3. 防御措施
  1. 过滤脚本

