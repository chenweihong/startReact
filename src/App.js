import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

 
class App extends Component {
	render() {
		return (
			<div className="App">
				<AddTodo onAddClick={text => 
					console.log('addtodo', text)}
				/>
				<TodoList todos={[
					{
						text: 'use redux',
						completed: true
					},
					{
						text: 'learn to contact to react',
						completed: false
					}
				]}
				onTodoClick={todo =>
					console.log('todo clicked', todo)
				}
				/>
				<Footer
					filter='SHOW_ALL'
					onFilterChange={filter =>
						console.log('filter change', filter)
					}
				/>
			</div>
		);
	}
}

export default App
