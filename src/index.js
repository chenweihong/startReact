import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import SlideDemo from './view/home';
// import registerServiceWorker from './registerServiceWorker'
// import { DatePicker } from 'antd'
// import FirstComponent from './components/firstComponent'

// let 块作用域
console.info(React)
var a = [];
for (var i = 0; i < 10; i++ ){
	let c = i;
	a[i] = function () {
		console.log(c);
	}
}
a[6]();
function f1() {
	var n = 5;
	if (true) {
		var n = 10;
	}
	console.log(n);
}
f1();

if (true) {
	const MAX = 5;
}
// console.log(MAX); // 此处 MAX 不可得 ，显示 not defined。

// 变量解构赋值
var [head, ... tail] = [1, 2, 3, 4];
console.info(tail);

// 模板字符串
console.log(`hehdad`);
var name = 'Linda';
console.log(`i am ${name}`)
var str = 'return' + '`Hello ${name}`';
var func = new Function('name', str);
func('Amy')

class Welcome extends Component {
	render() {
		return <h1>Hello, {this.props.name}</h1>;
	}
}

class Atest extends Component {
	render() {
		return (
			<div>
				<Welcome name="sarah" />
				<Welcome name="john" />
				<Welcome name="sonia" />
			</div>
		);
	}
}

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<SlideDemo />, document.getElementById('root'));
ReactDOM.render(<Atest />, document.getElementById('root'));
// ReactDOM.render(<DatePicker />, document.getElementById('antd_1'));
// ReactDOM.render(<FirstComponent />, document.getElementById('component_placeholder'));
// registerServiceWorker()

