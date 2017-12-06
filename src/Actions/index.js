import axios from 'axios';

export const getItems = () => {
  return dispatch => {
    axios.get('http://localhost:3001/getItems')
    .then(res => dispatch({type: 'GET_ITEMS', payload: res.data}))
    .catch(error => console.log(error));
  }
}

export const addItem = (item) => {
   return dispatch => {
    axios.post('http://localhost:3001/addItem', {item})
    .then(res => {
      dispatch({type: 'ADD_ITEM'})
      dispatch(getItems())
    })
    .catch((err) => console.log(err))
  }
};

export const deleteItem = (id) => {
   return dispatch => {
    axios.post('http://localhost:3001/deleteItem', {id})
    .then(res => {
      dispatch({type: 'DELETE_ITEM'})
      dispatch(getItems())
    })
    .catch((err) => console.log(err))
  }
};

export const checkItem = (id) => {
  return dispatch => {
   axios.post('http://localhost:3001/checkItem', {id})
   .then(res => {
     dispatch({type: 'CHECK_ITEM'})
     dispatch(getItems())
   })
   .catch((err) => console.log(err))
 }
};

export const editInput = (text) => {
	return {
		type: 'EDIT_INPUT',
		text,
	};
}
