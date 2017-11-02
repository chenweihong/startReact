import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
import './index.css';
// import App from './App';
// import SlideDemo from './view/home';
// import registerServiceWorker from './registerServiceWorker'
// import { DatePicker } from 'antd'
import FirstComponent from './components/firstComponent'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import request from './utils/request'

const BasicExample = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/topics">Topics</Link></li>
			</ul>

			<hr/>

			<Route exact path="/" component={Home}/>
			<Route exact path="/about" component={About}/>
			<Route exact path="/topics" component={Topics}/>
			<Route exact path="/firstcomponent" component={FirstComponent}/>
		</div>
	</Router>
);
// 定义 路由所用到的组件
const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
);
const About = () => (
	<div>
		<h2>About</h2>
	</div>
);
const Topics = ({match}) => (
	<Router>
		<div>
			<h2>Topics</h2>
			<ul>
				<li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
				<li><Link to={`${match.url}/components`}>components</Link></li>
				<li><Link to={`${match.url}/props-v-state`}>Rendering with React</Link></li>
			</ul>
			<Route path={`${match.url}/:topicId`} component={Topic}/>
			<Route exact path={match.url} render={() => (
				<h3>Please select a topic.</h3>
			)}/>
		</div>
	</Router>
);
const Topic = ({ match }) => (
	<div>
	  <h3>{match.params.topicId}</h3>
	</div>
);
ReactDOM.render(<BasicExample/>, document.getElementById('antd_1'));


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

function tick() {
	const element = (
		<div>
			<h1>Hello, world!</h1>
			<h2>It is test {new Date().toLocaleTimeString()}.</h2>
		</div>
	);
	ReactDOM.render(
		element,
		document.getElementById('root')
	);
}

// setInterval(tick, 1000);

// 封装时钟
function Clock(props) {
	return (
		<div>
			<h1>Hello, world!</h1>
			<h2>It is test1 {props.date.toLocaleTimeString()}.</h2>
		</div>
	);
}

// 使用 clock 组件
function tick1() {
	ReactDOM.render(
		<Clock date={new Date()} />,
		document.getElementById('root')
	);
}

// setInterval(tick1, 1000);

// 在类中才能使用 生命钩子 和 局部状态
// 1、将 clock 改成 类 声明形式 
class ClockClass extends React.Component {
	/**
	 * 添加 一个 类构造函数 来初始化状态 this.state
	 */
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
		console.log('constructor');
	}

	/**
	 * 在组件类上声明特殊的方法，当组件挂载或卸载时，来运行一些代码：
	 * 这些方法被称为 生命周期钩子
	 */
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick2(),
			1000
		);
		console.log('didmount');
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
		console.log('willunmount');
	}

	tick2() {
		console.log('tick')
		this.setState({
			date: new Date()
		});
	}

	render() {
		console.log('render');
		return (
			<div>
				<h1>Hello, world!</h1>
				{/*<h2>It is test1 {this.props.date.toLocaleTimeString()}.</h2>*/}

				{/**
				 * 将 props 改成 state
				 */}
				<h2>It is testState {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}

ReactDOM.render(
	<ClockClass />,
	document.getElementById('root')
);

// 条件渲染
function UserGreeting(props) {
	return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
	return <h1>Please sign up!</h1>;
}

function Greeting(props) {
	const isLogedIn = props.isLogedIn;
	if (isLogedIn) {
		return <UserGreeting />;
	} else {
		return <GuestGreeting />;
	}
}

ReactDOM.render(
	<Greeting isLogedIn={true} />,
	document.getElementById('root')
);

// 元素变量
// 先定义两种状态的两个 button
function LoginButton(props) {
	return (
		<button onClick={props.onClick}>
			Login
		</button>
	);
}

function LogoutButton(props) {
	return (
		<button onClick={props.onClick}>
			Logout
		</button>
	);
}

class LoginControl extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogOutClick = this.handleLogOutClick.bind(this);
		this.state = {isLogedIn: false};
	}

	handleLoginClick() {
		request({
			url: '/yw/login',
			method: 'post',
			data: {
				loginname: 'admin',
				loginpwd: 'pass'
			},
		  })
		  .then((response) => {
			  console.log(response);
		  })
		  .catch((error) => {
			  console.log(error);
		  })
		this.setState({
			isLogedIn: true
		});
	}

	handleLogOutClick() {
		this.setState({
			isLogedIn: false
		});
	}

	render() {
		const isLogedIn = this.state.isLogedIn;

		let button = null;
		if (isLogedIn) {
			button = <LogoutButton onClick={this.handleLogOutClick} />
		} else {
			button = <LoginButton onClick={this.handleLoginClick} />
		}

		return (
			<div>
				<Greeting isLogedIn={isLogedIn} />
				{/**
				 * 将组件元素作为 变量 使用，此时外层加 {}。上面定义时可以直接赋值。
				 */}
				{button} 
			</div>
		)
	}
}

ReactDOM.render(
	<LoginControl />,
	document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<SlideDemo />, document.getElementById('root'));
// ReactDOM.render(<Atest />, document.getElementById('root'));
// ReactDOM.render(<DatePicker />, document.getElementById('antd_1'));
// ReactDOM.render(<FirstComponent />, document.getElementById('component_placeholder'));
// registerServiceWorker()

