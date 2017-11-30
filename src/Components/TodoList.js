import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { checkItem, addItem, editInput, deleteItem } from '../Actions';

class TodoList extends Component {

	checkItem = (text) => {
		this.props.checkItem(text);
	}

	addItem = (evt) => {
		evt.preventDefault();
		this.props.addItem();
	}

	editInput = (evt) => {
		this.props.editInput(evt.target.value);
	}

	render() {
		return (
			<div>
				<ul>
					{this.props.items.map((item, index) => (
						<li key={index}>
							<TodoItem
								onClick={this.checkItem}
								text={item.text}
								checked={item.checked}
                deleteItem={() => this.props.deleteItem(item.text)}
							/>
						</li>
					))}
				</ul>
				<form onSubmit={this.addItem}>
          <input type="text" value={this.props.inputValue} onChange={this.editInput} />
				</form>
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
  deleteItem
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
