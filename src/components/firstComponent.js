import React, { Component } from 'react';
import { createStore } from 'redux';

function counter(state = 0, action) {
	switch (action.type) {
	case 'INCREMENT':
	  return state + 1;
	case 'DECREMENT':
	  return state - 1;
	default:
	  return state;
	}
  }
// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
let store = createStore(counter);

// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(() =>
	console.log(store.getState())
);

// 改变内部 state 惟一方法是 dispatch 一个 action。
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
store.dispatch({ type: 'INCREMENT' });
// 1
store.dispatch({ type: 'INCREMENT' });
// 2
store.dispatch({ type: 'DECREMENT' });
// 1
// console.log('firstcomponent' + store.getState())

// 你应该把要做的修改变成一个普通对象，这个对象被叫做 action，
// 而不是直接修改 state。然后编写专门的函数来决定每个 action 如何改变应用的 state，
// 这个函数被叫做 reducer。

class FirstComponent extends Component {
	render() {
		/*可以在 render 方法里使用 JavaScript 的语法，使用时加上 {} 即可*/
		var name = '我是第一个自定义组件哦'

		/**
        * 返回的组件模板
        */
		return (
			<div>
				<p> {name} </p>
			</div>
		)
	}
}

export default FirstComponent
