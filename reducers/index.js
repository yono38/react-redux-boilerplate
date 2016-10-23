import { combineReducers } from 'redux';
import countdown from './countdown';
import counter from './counter';

export default combineReducers({
  countdown,
  counter
});