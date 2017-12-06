import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from '../TodoItem';
import { checkItem, addItem, editInput, deleteItem, getItems } from '../../Actions';
import styles from './TodoList.css'

class TodoList extends Component {

  componentDidMount() {
    this.props.getItems()
  }


	addItem = (evt) => {
    evt.preventDefault();
    this.props.addItem(this.props.inputValue)
	}

	editInput = (evt) => {
    evt.preventDefault();
		this.props.editInput(evt.target.value);
	}

	render() {
		return (
			<div className={styles.container}>
        <form onSubmit={this.addItem}>
          <input type="text" value={this.props.inputValue} onChange={this.editInput} className={styles.input} placeholder='Add to do'/>
				</form>
				<ul className={styles.list}>
					{this.props.items.map((item, index) => (
						<li key={index} className={styles.listItem}>
							<TodoItem
								onClick={() => this.props.checkItem(item.id)}
                id={`checkbox-${index}`}
								text={item.text}
								checked={item.checked}
                deleteItem={() => this.props.deleteItem(item.id)}
							/>
						</li>
					))}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		items: state.items,
		inputValue: state.inputValue,
	};
};

const mapDispatchToProps = {
  checkItem,
  addItem,
  editInput,
  deleteItem,
  getItems
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
