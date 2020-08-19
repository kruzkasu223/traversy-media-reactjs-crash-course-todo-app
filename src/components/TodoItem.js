import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
	getStyle = () => {
		return {
			fontSize: "1.125rem",
			backgroundColor: "#eee",
			padding: "1rem",
			borderBottom: "2px #ccc dotted",
			textDecoration: this.props.todo.completed ? "line-through" : "none"
		}
	}
	
	render(){
		const { id, title } = this.props.todo;
		return (
			<div style={this.getStyle()}>
				<p>
					<input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
					{ title }
					<button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>&times;</button>
				</p>
			</div>
		)
	}
}

const btnStyle = {
	background: "#f00",
	color: "#eee",
	border: "none",
	padding: "0 5px 1px",
	borderRadius: "50%",
	cursor: "pointer",
	float: "right"
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired
}
export default TodoItem;