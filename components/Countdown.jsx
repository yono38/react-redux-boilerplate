import React, { PropTypes, Component } from 'react'

const Countdown = ({value, isRunning, pid, onStart, onEnd }) => {
    const countdownDisabled = !(value > 0) ? "disabled" : null;

    // End the countdown
    if (value === 0 && isRunning === true) {
        onEnd(pid);
    }

    return (
        <button disabled={countdownDisabled} onClick={onStart}>Start Countdown</button>
    );
};

Countdown.propTypes = {
    isRunning: PropTypes.bool,
    onStart: PropTypes.func.isRequired,
    onEnd: PropTypes.func.isRequired,
    pid: PropTypes.number,
    value: PropTypes.number
}

Countdown.defaultProps = {
    value: 0,
    isRunning: false
}

export default Countdown;