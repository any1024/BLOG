---
title: 观察订阅者模式
date: '2019-01-25 17:23:58'
tag: 
  - javascript
meta:
  -
    name: JavaScript
    content: Observing Subscriber Mode
  -
    name: JavaScript
    content: 观察订阅者模式初步认识，附一段代码DEMO
---
本篇为一段个人认为有学习价值的观察订阅者模式code
<!-- more -->

```javascript
const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach(observer => observer());
  return result;
}

const person = observable({
  name: '张三',
  age: 20
});

function print() {
  console.log(`${person.name}, ${person.age}`)
}

observe(print);
person.name = '李四';
// 输出
```
// 李四, 20


