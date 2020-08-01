import React from 'react';

class Addtodo extends React.Component {
	state={
		name:null,
	}
//here we set  state to the cureent value of input field
	handlechange=(e)=>{
		this.setState({
			name:e.target.value
			})
	}
	handlesubmit=(e)=>{
		e.preventDefault();
		this.props.addtodo(this.state);
	}

	render() {
		return (
			<div>
			<form onSubmit={this.handlesubmit}>
			<h3>ADD NEW TODO - </h3>
			<input id="todoinput" onChange={this.handlechange}>
			</input>
			</form>
			</div>
		);
	}
}

export default Addtodo;