// actions/countdown.js

export const COUNTDOWN_START = 'countdown/start';
export const COUNTDOWN_END = 'countdown/end';

export const startCountdown = (pid) => {
	return {
		type: COUNTDOWN_START,
		pid
	};
};

export const stopCountdown = (clearInterval, pid) => {
	clearInterval(pid);
	return {
		type: COUNTDOWN_END
	};
};