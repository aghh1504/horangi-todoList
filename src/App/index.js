import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import TodoList from '../Components/TodoList/index';
import mainReducer from '../Reducers';
import styles from './App.css';

const store = createStore(mainReducer,composeWithDevTools(applyMiddleware(thunk)))

const App = () => {
	return (
    <Provider store={store}>
		  <TodoList />
    </Provider>
	)
}

export default App;
