import React, { Component } from 'react';

class TodoItem extends Component {
	onClick = () => {
		this.props.onClick(this.props.text);
	}

	render() {
		return (
			<div>
				<input type="checkbox" checked={this.props.checked} onChange={this.onClick} />
				{this.props.text} <div onClick={this.props.deleteItem}>x</div>
			</div>
		)
	}
}

export default TodoItem;
