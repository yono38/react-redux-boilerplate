// components/CounterApp.jsx
import { connect } from 'react-redux';
import { CLEAR, DECREMENT, incrementBy } from '../actions/counter';
import Counter from './Counter';

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.counter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onIncrement: () => {
      dispatch(incrementBy());
    },
    onDecrement: () => {
      dispatch({ type: DECREMENT });
    },
    onIncrementFive: () => {
      dispatch(incrementBy(5));    	
    },
	onClear: () => {
      dispatch({ type: CLEAR });		
	}
  }
};

const CounterApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterApp;