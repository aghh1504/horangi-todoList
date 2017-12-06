import React, { Component } from 'react';
import styles from '../Styles/TodoItem.css'

class TodoItem extends Component {
	onClick = () => {
		this.props.onClick(this.props.text);
	}

	render() {
		return (
			<div className={styles.container}>
				<input type="checkbox" checked={this.props.checked} onChange={this.onClick} />
				{this.props.text}
        <div onClick={this.props.deleteItem} className={styles.deleteItem}>x</div>
			</div>
		)
	}
}

export default TodoItem;
