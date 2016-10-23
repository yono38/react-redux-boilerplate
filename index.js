// index.js

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import { INCREMENT, DECREMENT, CLEAR } from './actions'

const store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: INCREMENT })}
    onDecrement={() => store.dispatch({ type: DECREMENT })}
    onClear={() => store.dispatch({ type: CLEAR })}
  />,
  document.getElementById('root')
)

render();
store.subscribe(render)
