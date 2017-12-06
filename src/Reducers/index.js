const initialState = {
	items: [],
	inputValue: '',
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
    case 'GET_ITEMS':
      return {
        ...state,
        items: action.payload
      }
		case 'ADD_ITEM':
			return {
        ...state,
				inputValue: '',
			};
		case 'EDIT_INPUT':
			return {
				...state,
				inputValue: action.text,
			};
		default:
			return state;
	}
}

export default reducer;
