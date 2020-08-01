import React from 'react';
import Addtodo from './Addtodo';
import Todos from "./todos"

class App extends React.Component {
	state={
		todos:[
		{name:"Learn React",id:"1"},
		{name:"Learn Flutter",id:"2"},
		{name:"Do CP",id:"3"},
		{name:"DO EXCERSISE",id:"4"},
		]
	}
/*here we are taking the new todo from todos.js
file and giving it as a prop to addtodo function
here we givinbg the todo a random id and then using
spread operator we are creating a new array cosnting
of the old array and the new todo and the seting it to the state
*/
	addtodo=(todo)=>{
		todo.id=Math.random();
		let todos=[...this.state.todos,todo]
		this.setState({
			todos:todos
		})
	}

/*here we are taking the id of todo and filter to
make a new array which does not contaion that todo and then set it to the prop*/
	deletetodo=(id)=>{
		let deletedtodos=this.state.todos.filter(todo=>{
			return todo.id !==id;
		})
		this.setState({
			todos:deletedtodos
		})
	}

	render() {
		return (
			<div>
			<h1 className="todotitle">TODO APP </h1>
			
			<Todos todos={this.state.todos} 
			deletetodo={this.deletetodo}></Todos>
			<Addtodo addtodo={this.addtodo}/>
			</div>
		);
	}
}

export default App;