// reducers/countdown.js
import { COUNTDOWN_START, COUNTDOWN_END } from '../actions/countdown';

const initialState = {
  running: false,
  pid: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case COUNTDOWN_START:
      return Object.assign({}, state, {
        running: true,
        pid: action.pid,
      });
    case COUNTDOWN_END:
      return Object.assign({}, state, {
        running: false,
        pid: null,
      });
    default:
      return state;
  }
};
