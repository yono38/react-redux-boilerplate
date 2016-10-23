// actions/countdown.js

export const COUNTDOWN_START = 'COUNTDOWN/START';
export const COUNTDOWN_END = 'COUNTDOWN/END';

export const startCountdown = pid => (
  {
    type: COUNTDOWN_START,
    pid
  }
);

export const stopCountdown = (clearInterval, pid) => {
  clearInterval(pid);
  return {
    type: COUNTDOWN_END
  };
};
