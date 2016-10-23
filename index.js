/* global window, document */

// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CounterComponent from './components/Counter';
import CounterApp from './components/CounterApp';
import counter from './reducers';
import { 
	DECREMENT, 
	CLEAR, 
	incrementBy 
} from './actions';

const store = createStore(counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
	<Provider store={store}>
	  <CounterApp />
	</Provider>,
  document.getElementById('root')
);
