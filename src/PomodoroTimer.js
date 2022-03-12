import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

import PomoButton from './PomoButton';
import ShortButton from './ShortButton';
import LongButton from './LongButton';
import StartButton from './StartButton';

export const timeBocks = {
  pomo: 45,
  short: 7,
  long: 13,
};

const Pomodoro = () => {
  const [minutes, setMinutes] = useState(45);
  const [seconds, setSeconds] = useState(0);
  const [displayMsg, setDisplayMsg] = useState(false);
  const [countDown, setCountDown] = useState(false);
  let interval;
  useEffect(() => {
    clearInterval(interval);
    if (countDown) {
      interval = setInterval(() => {
        clearInterval(interval);
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            reset(45);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
  }, [seconds, countDown]);

  function toggleStart() {
    setCountDown(!countDown);
  }

  function reset(min) {
    // toggleStart();
    clearInterval(interval);
    setSeconds(0);
    setMinutes(min);
    setCountDown(false);
  }

  const formatMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formatSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="pomo">
      <div className="timeBtnContainer">
        <PomoButton reset={reset} setMinutes={setMinutes} />
        <ShortButton reset={reset} setMinutes={setMinutes} />
        <LongButton reset={reset} setMinutes={setMinutes} />
      </div>
      <div className="timeDisplay">
        {formatMinutes}:{formatSeconds}{' '}
      </div>
      <StartButton
        countDown={countDown}
        reset={reset}
        toggleStart={toggleStart}
      />
    </div>
  );
};

export default Pomodoro;
