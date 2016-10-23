// reducers/counter.js
import { INCREMENT, DECREMENT, CLEAR } from '../actions/counter';

const initialState = 0;
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.value;
    case DECREMENT:
      return state - 1;
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};
