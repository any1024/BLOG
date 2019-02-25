---
title: React性能优化
date: '2019-02-25 10:02:33'
tag: 
  - React
meta:
  -
    name: React
    content: React Performance optimization for render
  -
    name: React
    content: React性能优化之render
---
本篇讲述了React性能优化之render
<!-- more -->

本文将从 render 函数的角度总结 React App 的优化技巧。
文中将涉及 React 16.8.2 版本的内容(也即 Hooks），因此请至少了解 useState 以保证阅读效果。

正文开始。


---
当我们讨论 React App 的性能问题时，组件的**渲染**速度是一个重要问题。在进入到具体优化建议之前，我们先要理解以下 3 点：
1. 我们口中的render到底指的是什么？
2. 什么时候会执行「render」？
3. 在「render」过程中会发生什么？

# render到底是什么？
1. class组件中的render方法:
```javascript
class Foo extends React.Component {
 render() {  // this is render
   return <h1> Foo </h1>;
 }
}
```
1. 函数组件中的函数体本身
```javascript
function Foo() {
  return <h1> Foo </h1>; //this is render
}
```
## 
# setState - useStae之间的区别
1. 使用setState 更新状态 -- 无论state状态值有无更新   --  都会触发render重新渲染
2. 下面的例子里的count到达10以后，再次点击触发setState使用，虽然数值不会在改变，但是还会继续触发render
```javascript
import React from "react";


class App extends React.Component {
  render() {
    return <Foo />;
  }
}


class Foo extends React.Component {
  state = { count: 0 };


  increment = () => {
    const { count } = this.state;


    const newCount = count < 10 ? count + 1 : count;


    this.setState({ count: newCount });
  };


  render() {
    const { count } = this.state;
    console.log("Foo render");


    return (
      <div>
        <h1> {count} </h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

3. 在函数组件中使用useState hook更新状态 --  状态值未发生改变 -- 就不会触发render重新渲染
4. 下面例子中的count的值到达10之后 -- 再次点击也不发触发render
```javascript
import React, { useState } from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
  render() {
    return <Foo />;
  }
}


function Foo() {
  const [count, setCount] = useState(0);


  function increment() {
    const newCount = count < 10 ? count + 1 : count;
    setCount(newCount);
  }


  console.log("Foo render");
  
  return (
    <div>
      <h1> {count} </h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```
## 
# 父子组件渲染关系
* 无论组件是继承自 React.Component 的 class 组件还是函数式组件，一旦父容器重新 render，子组件的 render 都会再次被调用。

# 理解render的过程
* 只要 render 函数被调用，就会有两个步骤按顺序执行。这两个步骤非常重要，理解了它们才好知道如何去优化 React App。

Diffing
  * 在此步骤中，React 将新调用的 render 函数返回的树与旧版本的树进行比较，这一步是 React 决定如何更新 DOM 的必要步骤。虽然 React 使用高度优化的算法执行此步骤，但仍然有一定的性能开销。

Reconciliation
  * 基于 diffing 的结果，React 更新 DOM 树。这一步因为需要卸载和挂载 DOM 节点同样存在许多性能开销
# 开始我们的Tips

---
我们以下面为例，其中 App 会渲染两个组件：
* CounterLabel，接收 count 值和一个 inc 父组件 App 中状态 count 的方法。
* List，接收 item 的列表。
```javascript
import React, { useState } from "react";

import ReactDOM from "react-dom";

const ITEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function App() {

const [count, setCount] = useState(0);

const [items, setItems] = useState(ITEMS);

return (

<div className="App">

<CounterLabel count={count} increment={() => setCount(count + 1)} />

<List items={items} />

</div>

);

}

function CounterLabel({ count, increment }) {

return (

<>

<h1>{count} </h1>

<button onClick={increment}> Increment </button>

</>

);

}

function List({ items }) {

console.log("List render");

return (

<ul>

{items.map((item, index) => (

<li key={index}>{item} </li>

))}

</ul>

);

}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
```

执行上面代码可知，只要父组件 App 中的状态被更新，CounterLabel 和 List 就都会更新。

当然，CounterLabel 重新渲染是正常的，因为 count 发生了变化，自然要重新渲染；但是对于 List 而言，就完全是不必要的更新了，因为它的渲染与 count 无关。**尽管 React 并不会在 reconciliation 阶段真的更新 DOM，毕竟完全没变化，但是仍然会执行 diffing 阶段来对前后的树进行对比，这仍然存在性能开销。**

还记得 render 执行过程中的 diffing 和 reconciliation 阶段吗？前面讲过的东西在这里碰到了。

因此，为了避免不必要的 diffing 开销，我们应当考虑将特定的状态值放到更低的层级或组件中（与 React 中所说的「提升」概念刚好相反）。在这个例子中，我们可以通过将 count 放到 CounterLabel 组件中管理来解决这个问题。
### Tip #2：合并状态更新
因为每次状态更新都会触发新的 render 调用，那么更少的状态更新也就可以更少的调用 render 了。

我们知道，React class 组件有 componentDidUpdate(prevProps, prevState) 的钩子，可以用来检测 props 或 state 有没有发生变化。尽管有时有必要在 props 发生变化时再触发 state 更新，但我们总可以避免在一次 state 变化后再进行一次 state 更新这种操作：
```javascript
import React from "react";

import ReactDOM from "react-dom";

function getRange(limit) {

let range = [];

for (let i = 0; i < limit; i++) {

range.push(i);

}

return range;

}

class App extends React.Component {

state = {

numbers: getRange(7),

limit: 7

};

handleLimitChange = e => {

  const limit = e.target.value;
  
  const limitChanged = limit !== this.state.limit;
  
  if (limitChanged) {
  
    this.setState({ limit });
  
  }

};

componentDidUpdate(prevProps, prevState) {

  const limitChanged = prevState.limit !== this.state.limit;
  
  if (limitChanged) {
  
    this.setState({ numbers: getRange(this.state.limit) });
  
  }

}

render() {

return (

<div>

  <input
  
  onChange={this.handleLimitChange}
  
  placeholder="limit"
  
  value={this.state.limit}
  
  />

  {this.state.numbers.map((number, idx) => (
  
    <p key={idx}>{number} </p>
  
  ))}

</div>

);

}

}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
```

这里渲染了一个范围数字序列，即范围为 0 到 limit。只要用户改变了 limit 值，我们就会在 componentDidUpdate 中进行检测，并设定新的数字列表。

毫无疑问，上面的代码是可以满足需求的，但是，我们仍然可以进行优化。
上面的代码中，每次 limit 发生改变，我们都会触发两次状态更新：第一次是为了修改 limit，第二次是为了修改展示的数字列表。这样一来，每次 limit 的变化会带来两次 render 开销：
```javascript
// 初始状态

{ limit: 7, numbers: [0, 1, 2, 3, 4, 5, 6]

// 更新 limit -> 4

render 1: { limit: 4, numbers: [0, 1, 2, 3, 4, 5, 6] } //

render 2: { limit: 4, numbers: [0, 1, 2, 3]
```
我们的代码逻辑带来了下面的问题：
* 我们触发了比实际需要更多的状态更新；
* 我们出现了「不连续」的渲染结果，即数字列表与 limit 不匹配。

为了改进，我们应避免在不同的状态更新中改变数字列表。事实上，我们可以在一次状态更新中搞定：
```javascript
import React from "react";

import ReactDOM from "react-dom";

function getRange(limit) {

let range = [];

for (let i = 0; i < limit; i++) {

  range.push(i);

}

return range;

}

class App extends React.Component {

state = {

numbers: [1, 2, 3, 4, 5, 6],

limit: 7

};

handleLimitChange = e => {

const limit = e.target.value;

  const limitChanged = limit !== this.state.limit;

if (limitChanged) {

  this.setState({ limit, numbers: getRange(limit) });

}

};

render() {

return (

<div>

  <input
  
  onChange={this.handleLimitChange}
  
  placeholder="limit"
  
  value={this.state.limit}
  
  />

  {this.state.numbers.map((number, idx) => (
  
    <p key={idx}>{number} </p>
  
  ))}

</div>

);

}

}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
```
### Tip #3：使用 PureComponent 和 React.memo 以避免不必要的 render 调用
我们在之前的例子中看到将特定状态值放到更低的层级来避免不必要渲染的方法，不过这并不总是有用。

我们来看下下面的例子：
```javascript
import React, { useState } from "react";

import ReactDOM from "react-dom";

function App() {

const [isFooVisible, setFooVisibility] = useState(false);

return (

<div className="App">

  {isFooVisible ? (

  <Foo hideFoo={() => setFooVisibility(false)} />

  ) : (

  <button onClick={() => setFooVisibility(true)}>Show Foo </button>

  )}

  <Bar name="Bar" />

</div>

);

}

function Foo({ hideFoo }) {

  return (

    <div>

      <h1>Foo</h1>

      <button onClick={hideFoo}>Hide Foo</button>

    <div/>

  );

}

function Bar({ name }) {

  return <h1>{name}</h1>;

}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
```
可以看到，只要父组件 App 的状态值 isFooVisible 发生变化，Foo 和 Bar 就都会被重新渲染。

这里因为为了决定 Foo 是否要被渲染出来，我们需要将 isFooVisible 放在 App中维护，因此也就不能将状态拆出放到更低的层级。不过，在 isFooVisible 发生变化时重新渲染 Bar 仍然是不必要的，因为 Bar 并不依赖 isFooVisible。我们只希望 Bar 在传入属性 name 变化时重新渲染。

那我们该怎么搞呢？两种方法。
```javascript
其一，对 Bar 做记忆化（memoize）：

const Bar = React.memo(function Bar({name}) {

return <h1>{name}</h1>;

});

这就能保证 Bar 只在 name 发生变化时才重新渲染。

此外，另一个方法就是让 Bar 继承 React.PureComponent 而非 React.Component：

class Bar extends React.PureComponent {

render() {

return <h1>{name}</h1>;

}

}
```
是不是很熟悉？我们经常提到使用 React.PureComponent 能带来一定的性能提升，避免不必要的 render。

总结：**避免组件不必要的渲染的方法有：React.memo 包裹的函数式组件，继承自 React.PureComponent 的 class 组件**。

为什么不让每个组件都继承 PureComponent 或者用 memo 包呢？
如果这条建议可以让我们避免不必要的重新渲染，那我们为什么不把每个 class 组件变成 PureComponent、把每个函数式组件用 React.memo 包起来？为什么有了更好的方法还要保留 React.Component 呢？为什么函数式组件不默认记忆化呢？
毫无疑问，这些方法并不总是万灵药。

嵌套对象的问题
我们先来考虑下 PureComponent 和 React.memo 的组件到底做了什么？

每次更新的时候（包括状态更新或上层组件重新渲染），它们就会在新 props、state 和旧 props、state 之间对 key 和 value 进行浅比较。浅比较是个严格相等的检查，如果检测到差异，render 就会执行：
// 基本类型的比较
```javascript
shallowCompare({ name: 'bar'}, { name: 'bar'}); // output: true

shallowCompare({ name: 'bar'}, { name: 'bar1'}); // output: false
```

尽管基本类型（如字符串、数字、布尔）的比较可以工作的很好，但对象这类复杂的情况可能就会带来意想不到的行为：
```javascript
shallowCompare({ name: {first: 'John', last: 'Schilling'}},

{ name: {first: 'John', last: 'Schilling'}}); // output: false
```

上述两个 name 对应的对象的引用是不同的。
我们重新看下之前的例子，然后修改我们传入 Bar 的 props：
```javascript
import React, { useState } from "react";

import ReactDOM from "react-dom";

const Bar = React.memo(function Bar({ name: { first, last } }) {

console.log("Bar render");

return (

<h1>

{first} {last}

</h1>

);

});

function Foo({ hideFoo }) {

return (

<>

<h1>Foo</h1>

<button onClick={hideFoo}>Hide Foo</button>

</>

);

}

function App() {

const [isFooVisible, setFooVisibility] = useState(false);

return (

<div className="App">

{isFooVisible ? (

<Foo hideFoo={() => setFooVisibility(false)} />

) : (

<button onClick={() => setFooVisibility(true)}>Show Foo</button>

)}

<Bar name={{ first: "John", last: "Schilling" }} />

</div>

);

}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
```

尽管 Bar 做了记忆化且 props 值并没有发生变动，每次父组件重新渲染时它仍然会重新渲染。这是因为尽管每次比较的两个对象拥有相同的值，引用并不同。
函数 props 的问题

我们也可以把函数作为 props 向组件传递，当然，在 JavaScript 中函数也会传递引用，因此浅比较也是基于其传递的引用。
**因此****，****如果我们传递的是箭头函数（匿名函数），组件仍然会在父组件重新渲染时重新渲染**。
### Tip #4：更好的 props 写法
前面的问题的一种解决方法是改写我们的 props。
我们不传递对象作为 props，而是**将对象拆分成基本类型**：
```javascript
<Bar firstName="John" lastName="Schilling" />
```
而对于传递箭头函数的场景，我们可以代以只唯一声明过一次的函数，从而总可以拿到相同的引用，如下所示：
```javascript
class App extends React.Component{

constructor(props) {

this.doSomethingMethod = this.doSomethingMethod.bind(this);

}

doSomethingMethod () { // do something}

render() {

return <Bar onSomething={this.doSomethingMethod} />

}

}
```
### Tip #5：控制更新
还是那句话，任何方法总有其适用范围。

第三条建议虽然处理了不必要的更新问题，但我们也不总能使用它。

而第四条，在某些情况下我们并不能拆分对象，如果我们传递了某种嵌套确实复杂的数据结构，那我们也很难将其拆分开来。

不仅如此，我们也不总能传递只声明了一次的函数。比如在我们的例子中，如果 App 是个函数式组件，恐怕就不能做到这一点了（在 class 组件中，我们可以用 bind 或者类内箭头函数来保证 this 的指向及唯一声明，而在函数式组件中则可能会有些问题）。

幸运的是，**无论是 class 组件还是函数式组件，我们都有办法控制浅比较的逻辑**。

在 class 组件中，我们可以使用生命周期钩子 shouldComponentUpdate(prevProps, prevState) 来返回一个布尔值，当返回值为 true 时才会触发 render。

而如果我们使用 React.memo，我们可以传递一个比较函数作为第二个参数。
>**注意****！**React.memo 的第二参数（比较函数）和 shouldComponentUpdate 的逻辑是相反的，只有当返回值为 false 的时候才会触发 render。[参考文档](https://reactjs.org/docs/react-api.html#reactmemo)。
```javascript
const Bar = React.memo(

function Bar({ name: { first, last } }) {

console.log("update");

return (

<h1>

{first} {last}

</h1>

);

},

(prevProps, newProps) =>

prevProps.name.first === newProps.name.first &&

prevProps.name.last === newProps.name.last

);
```
尽管这条建议是可行的，但我们仍要注意**比较函数的性能开销**。如果 props 对象过深，反而会消耗不少的性能。
# 总结
上述场景仍不够全面，但多少能带来一些启发性思考。当然在性能方面，我们还有许多其他的问题需要考虑，但遵守上述的准则仍能带来相当不错的性能提升。


