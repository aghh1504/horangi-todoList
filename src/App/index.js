import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoList from '../Components/TodoList';
import mainReducer from '../Reducers';

const store = createStore(mainReducer);

const App = () => {
	return (
    <Provider store={store}>
		  <TodoList />
    </Provider>
	)
}

export default App;
