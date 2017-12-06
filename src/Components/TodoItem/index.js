import React, { Component } from 'react';
import styles from './TodoItem.css'

class TodoItem extends Component {
	onClick = () => {
		this.props.onClick(this.props.text);
	}

	render() {
		return (
			<div>
				<input id={this.props.id} type="checkbox" checked={this.props.checked} onChange={this.onClick} className={styles.checkbox} />
				<label for={this.props.id} className={styles.label}>{this.props.text}</label>
        <button onClick={this.props.deleteItem} className={styles.deleteItem}>x</button>
			</div>
		)
	}
}

export default TodoItem;
