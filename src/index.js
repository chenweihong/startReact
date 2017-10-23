import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import SlideDemo from './view/home';
// import registerServiceWorker from './registerServiceWorker'
// import { DatePicker } from 'antd'
// import FirstComponent from './components/firstComponent'
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







class About extends React.Component {
	render() {
		console.info('11111111111111111')
		return {

		}
	}
}
console.info('zheshinali===999999====')
class Inbox extends React.Component {
	render() {
		return {

		}
	}
}
class Home extends React.Component {
	render() {
		return {

		}
	}
}
console.info('zheshinali')
class Test extends React.Component {
	constructor(props) {
		super(props)
		this.state = { route: window.location.hash.substr(1) }
	}
	
	componentDidMount() {
		window.addEventListener('huashchange', () => {
	        this.setState((preState, props) => {
				route: window.location.hash.substr(1)
			})
		})
    }
    
    render() {
		let Child
		switch (this.state.route) {
			case '/about':
				Child = About
				break
			case '/inbox':
				Child = Inbox
				break
			default:
				Child = Home
		}

		return (
			<div>
				<h1>App</h1>
				<ul>
					<li><a href="#/about">Inbox</a></li>
					<li><a href="#/inbox">Inbox</a></li>
				</ul>
				<Child />
			</div>
		)
	}
}
export default { About, Inbox, Home, Test}

// ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<SlideDemo />, document.getElementById('root'));

// ReactDOM.render(<DatePicker />, document.getElementById('antd_1'))
// ReactDOM.render(<FirstComponent />, document.getElementById('component_placeholder'))
// ReactDOM.render(<Test />, document.getElementById('root'))
// registerServiceWorker()

