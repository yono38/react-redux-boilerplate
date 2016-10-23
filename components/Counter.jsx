// Create components/Counter.jsx
import React, { PropTypes, Component } from 'react'

const Counter = (props) => {
	console.log('props', props);
	const { value, onIncrement, onIncrementFive, onDecrement, onClear } = props;
	return (
	  <div>
	    <h1> Value: {value} </h1>
	    <button onClick={onIncrement}> + </button>
	    <button onClick={onIncrementFive}> +5 </button>
	    <button onClick={onDecrement}> - </button>
	    <button onClick={onClear}> Clear </button>
	  </div>
	);
}

Counter.propTypes = {
	value: PropTypes.number,
	onIncrement: PropTypes.func,
	onIncrementFive: PropTypes.func,
	onDecrement: PropTypes.func,
	onClear: PropTypes.func
};

Counter.defaultProps = {
	value: PropTypes.number,
	onIncrement: PropTypes.func,
	onIncrementFive: () => {},
	onDecrement: PropTypes.func,
	onClear: () => {}
};

export default Counter;
