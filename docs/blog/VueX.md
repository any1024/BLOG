---
title: VueX基础案例
date: '2017-11-25 16:00:38'
tag: 
  - Vue
meta:
  -
    name: VueX
    content: This article show VueX core composition
  -
    name: VueX
    content: Vuex的核型组成
---
本篇展示了Vuex的核型组成
<!-- more -->

1. store
```javascript
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
```
2. state 
```javascript
computed: {
  localComputed () { /* ... */ },
  // 使用对象展开运算符将此对象混入到外部对象中
  ...mapState({
    // ...
  })
}
```
3. getter
```javascript
 computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
  }
```
4. mutaions
```javascript
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
}
```
5. action
```javascript
import { mapActions } from 'vuex'

export default {
  // ...
  methods: {
    ...mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

      // `mapActions` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapActions({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })
  }
}
```
6. module
```javascript
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
```
store.state.b // -> moduleB 的状态

7.vueX单文件例子 
```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    name: 'xl',
    age: 20,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: false },
      { id: 4, text: '...', done: false }
    ]
  },
  mutations: {
    increment (state, { name = 'empty' } = {}) {
      console.log(name)
      state.count++
    }
  },
  getters: {
    doneTodos: state => (id :any) => {
      console.log(id)
      return state.todos.filter(todo => !todo.done)
    }
  },
  actions: {
    // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
    // {commit} === 解构
    ac_increment ({ commit }, { amount }) {
      console.log(amount)
      commit('increment')
    }
  }
})

// 提交mutations
store.commit('increment', {})

// 使用getters
store.getters.doneTodos(3)

// 修改内容
Vue.set(store.state, 'newList', [{ name: 1 }, { name: 2 }])

// 提交actions
store.dispatch('ac_increment', { amount: 10 })

console.log(store.state)

export default store
```
