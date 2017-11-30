const initialState = {
	items: [{
	  text: 'Get to Singapore 🌴',
	  checked: true,
	}],
	inputValue: '',
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHECK_ITEM':
			return {
				...state,
				items: state.items.map(item => {
					if (item.text !== action.text) return item;

					return {
						...item,
						checked: !item.checked,
					};
				}),
			};
		case 'ADD_ITEM':
			return {
				items: state.items.concat([{
					text: state.inputValue,
					checked: false,
				}]),
				inputValue: '',
			};
		case 'EDIT_INPUT':
			return {
				...state,
				inputValue: action.text,
			};
    case 'DELETE_ITEM':
    const newItems = state.items.filter(item => item.text !== action.text)
      return {
        ...state,
        items: newItems
      }
		default:
			return state;
	}
}

export default reducer;
