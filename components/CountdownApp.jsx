// components/CountdownApp.jsx
import { connect } from 'react-redux';
import { 
	COUNTDOWN_START, 
	COUNTDOWN_END, 
	startCountdown, 
	stopCountdown 
} from '../actions/countdown';
import {
	decrementBy
} from '../actions/counter';
import Countdown from './Countdown';

const mapStateToProps = (state, ownProps) => {
  return {
    isRunning: state.countdown.running,
    value: state.counter,
    pid: state.countdown.pid
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onStart: () => {
      const pid = setInterval(  
      	() => dispatch(decrementBy()), 
      	1000
      );

      dispatch(startCountdown(pid));
    },
    onEnd: (pid) => {
      dispatch(stopCountdown(window.clearInterval, pid));
    }
  }
};

const CountdownApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Countdown);

export default CountdownApp;
