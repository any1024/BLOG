---
title: React基础知识
date: '2019-02-25 10:02:33'
tag: 
  - react
meta:
  -
    name: React
    content: React notes
  -
    name: React
    content: React基础知识笔记
---
本篇为个人学习中React认为比较基础的一些知识点
<!-- more -->

1. React的生命周期
实例化
* getDefaultProps
* getInitialState
* componentWillMount
* render
* componentDidMount

存在期
* componentWillReceiveProps
* shouldComponentUpdate
* componentWillUpdate
* componentDidUpdate

销毁时
* componentWillUnmount

2. state基础认识
```javascript
想想我们的实例应用中所有数据。我们有：

原产品列表
用户输入的搜索文本
复选框的值
产品的筛选列表
让我们来看看每一条，找出哪一个是 state。每个数据只要考虑三个问题：

它是通过 props 从父级传来的吗？如果是，他可能不是 state。
它随着时间推移不变吗？如果是，它可能不是 state。
你能够根据组件中任何其他的 state 或 props 把它计算出来吗？如果是，它不是 state。
原产品列表被作为 props 传入，所以它不是 state。搜索文本和复选框似乎是 state，因为它们随时间改变并且不能由其他任何值计算出来。最后，产品的筛选列表不是 state，因为它可以通过将原始产品列表与搜索文本和复选框的值组合计算出来。

最后，我们的 state 有：

用户输入的搜索文本
复选框的值
第四步：确定你的 State 应该位于哪里
See the Pen Thinking In React: Step 4 by Kevin Lacker (@lacker) on CodePen.

好的，现在我们确定了应用 state 的最小集合。接下来，我们需要确定哪个组件会改变，或拥有这个 state。

记住：React 中的数据流是单向的，并在组件层次结构中向下传递。一开始我们可能不是很清楚哪个组件应该拥有哪个 state。在新手理解上这通常是最富有挑战性的部分，所以按照下面的步骤来辨别：

对你应用的每一个 state：

确定每一个需要这个 state 来渲染的组件。
找到一个公共所有者组件(一个在层级上高于所有其他需要这个 state 的组件的组件)
这个公共所有者组件或另一个层级更高的组件应该拥有这个 state。
如果你没有找到可以拥有这个 state 的组件，创建一个仅用来保存状态的组件并把它加入比这个公共所有者组件层级更高的地方。
让我们用这个策略分析我们的应用：

ProductTable 需要根据 state 过滤产品列表，SearchBar 需要展示搜索文本和复选框状态。
公共所有者组件是 FilterableProductTable。
筛选文本和复选框的值应该放在 FilterableProductTable。
很酷，所以我们决定把 state 放在 FilterableProductTable。首先，为 FilterableProductTable 的 constructor 添加一个实例属性 this.state = {filterText: '', inStockOnly: false} 来表示我们应用的初始状态。接下来，把 filterText 和 inStockOnly 作为 prop 传入 ProductTable 和 SearchBar。最后在 ProductTable 中使用这些 props 来筛选每行产品信息，在 SearchBar 中设置表单域的值。

现在你能够看到你的应用是如何运作的了：设置 filterText 的值为 ball 并刷新你的应用。你会看到数据表格正确的更新了。

第五步：添加反向数据流
See the Pen Thinking In React: Step 5 on CodePen.

到目前为止，我们已经创建了一个可以正确渲染的应用程序，它的数据在层级中通过函数的 props 和 state 向下流动。现在是时候支持其他方式的数据流了：层级结构中最底层的表单组件需要去更新在 FilterableProductTable 中的 state。

React 的数据流很明显，让你可以很轻松的了解你的程序是如何运行的，但相较于传统的双向绑定，它的代码量会稍微多一点。

在当前版本的示例中，如果你试图键入或选中复选框，你会发现 React 会忽略你的输入。这是故意的，因为我们把 input 的 value 属性设置为一直等于从 FilterableProductTable 传入的 state.

让我们想想我们想要做什么。我们想确保每当用户更改表单时，我们更新状态来反应用户输入。因为组件应该只更新自己的状态， FilterableProductTable 会将一个回调函数传递给 SearchBar ，每当应该更新状态时，它就会触发。我们可以使用输入上的 onChange 事件来调用它。FilterableProductTable 传入的回调函数会调用 setState()，这时应用程序会被更新。

虽然这听起来很复杂，但它只是几行代码的问题。而且，你可以清楚地看出你的应用中数据是如何流动的。

就是这样
希望这可以让你了解如何使用 React 构建组件和应用程序。虽然这可能会比以前编写更多的代码，但请记住，代码是用来读的，这比写更重要，并且非常容易阅读这个模块化的，思路清晰的代码。当你开始构建大型组件库的时候，你会开始欣赏 React 的思路清晰化和模块性，并且随着代码的复用，你的代码量会开始减少。:)

```

