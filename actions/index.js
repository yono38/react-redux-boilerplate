// actions/index.js
// Namespace actions
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';
export const CLEAR = 'counter/CLEAR';

// Takes a value and increments it by that amount
export const incrementBy = ( incrementByValue = 1 ) => {
	return {
		type: INCREMENT,
		value: incrementByValue
	}
}