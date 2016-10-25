/* global window, document */

// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MovieListApp from './components/MovieListApp';
import reducer from './reducers';

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
	<Provider store={store}>
	  <MovieListApp />
	</Provider>,
  document.getElementById('root')
);
