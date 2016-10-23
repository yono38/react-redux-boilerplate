import React, { PropTypes, Component } from 'react'

const Countdown = ({running, pid, onStart, onEnd}) => {
	const displayedPid = typeof pid === 'number' ? pid.toString() : 'null';
	return (
		<div>
			<h1>Countdown Is running: {running.toString()}</h1>
			<h2>Pid is: {displayedPid}</h2>
			<button onClick={onStart}>Start</button>
			<button onClick={onEnd}>End</button>
		</div>
	);
};

Countdown.propTypes = {
	running: PropTypes.bool,
	pid: PropTypes.number,
	onStart: PropTypes.func,
	onEnd: PropTypes.func
}

export default Countdown;