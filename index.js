/* global window, document */

// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { Provider } from 'react-redux';
import CounterApp from './components/CounterApp';
import CountdownApp from './components/CountdownApp';
import reducer from './reducers/index';

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
	<Provider store={store}>
	  <div>
		  <CounterApp />
		  <CountdownApp />
	  </div>
	</Provider>,
  document.getElementById('root')
);
