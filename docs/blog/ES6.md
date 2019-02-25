---
title: Es6数组API
date: '2018-10-15 08:02:33'
tag: 
  - javascript
meta:
  -
    name: Es6
    content: Es6 Know how som up
  -
    name: Es6
    content: Es6 Array
---
Es6 数组知识总结
<!-- more -->


1. 数组知识点
  * Array.from()  根据iterator（迭代器）或者length属性转换数组
```javascript
Array.from({ length: 3 })
// [undefined, undefined, undefined]
```
  * ... 扩展符根据iterator转换数据，不能根据长度转换
```javascript
[...document.querySelectorAll('div')]
// [<div>, <div>, <div>]
```
  * Array.of()
```javascript
Array.of方法用于将一组值，转换为数组。

Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1
这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。

Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]
上面代码中，Array方法没有参数、一个参数、三个参数时，返回结果都不一样。只有当参数个数不少于 2 个时，Array()才会返回由参数组成的新数组。参数个数只有一个时，实际上是指定数组的长度。

Array.of基本上可以用来替代Array()
```
  * Array.copy
```javascript
Array.prototype.copyWithin(target, start = 0, end = this.length)
它接受三个参数。

target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数。
end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
这三个参数都应该是数值，如果不是，会自动转为数值。

[1, 2, 3, 4, 5].copyWithin(0, 3)
// [4, 5, 3, 4, 5]
```
  * entries()，keys()和values()
```javascript
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
```
  * // 1 "b"

flat()
```javascript
[1, 2, [3, [4, 5]]].flat(2)
// [1, 2, 3, 4, 5]

// 相当于 [[2, 4], [3, 6], [4, 8]].flat()
[2, 3, 4].flatMap((x) => [x, x * 2])
```
// [2, 4, 3, 6, 4, 8]


1. 对象
```javascript
super 关键字
我们知道，this关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字super，指向当前对象的原型对象。

const proto = {
  foo: 'hello'
};

const obj = {
  foo: 'world',
  find() {
    return super.foo;
  }
};

Object.setPrototypeOf(obj, proto);
obj.find() // "hello"
上面代码中，对象obj.find()方法之中，通过super.foo引用了原型对象proto的foo属性。

注意，super关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。

// 报错
const obj = {
  foo: super.foo
}

// 报错
const obj = {
  foo: () => super.foo
}

// 报错
const obj = {
  foo: function () {
    return super.foo
  }
```
}


```javascript
const source = {
  get foo() { return 1 }
};
const target = {};

Object.assign(target, source)
// { foo: 1 }


```

```javascript
// don't repeat string
[...new Set('ababbc')].join('')
```
// "abc"


