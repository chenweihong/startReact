import { createStore } from 'redux'
import todoApp from './reducers'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions'

let store = createStore(todoApp)

// 打印初始状态
console.log(store.getState())

// 每次 state 更新，打印结果
let unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

// 发起一系列 dispatch
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))

unsubscribe();