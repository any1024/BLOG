---
title: class继承__proto__差异
date: '2018-11-0class5 11:02:33'
tag: 
  - javascript
meta:
  -
    name: javascript
    content: about class inherit difference function inherit
  -
    name: javascript
    content: class继承
---
关于class实现继承后__proto__属性与Function继承差异
<!-- more -->

（1）子类的__proto__属性，表示构造函数的继承，总是指向父类。
（2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。
```
class A {
}

class B extends A {
}

B.__proto__ === A // true
B.prototype.__proto__ === A.prototype // true
上面代码中，子类B的__proto__属性指向父类A，子类B的prototype属性的__proto__属性指向父类A的prototype属性。

这样的结果是因为，类的继承是按照下面的模式实现的。

class A {
}

class B {
}

// B 的实例继承 A 的实例
Object.setPrototypeOf(B.prototype, A.prototype);

// B 继承 A 的静态属性
Object.setPrototypeOf(B, A);

const b = new B();

//《对象的扩展》一章给出过Object.setPrototypeOf方法的实现。

Object.setPrototypeOf = function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
}

```

