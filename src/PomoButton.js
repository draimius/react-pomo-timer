import React from 'react';
import { timeBocks } from './PomodoroTimer';
import './App.css';

const PomoButton = ({ reset, setMinutes }) => {
  return (
    <div className="btnContainer">
      <button className="timeBtn" onClick={() => reset(timeBocks.pomo)}>
        PomoButton
      </button>
      {/* <button onClick={() => setMinutes(timeBocks.pomo)}>PomoButton</button> */}
    </div>
  );
};

export default PomoButton;
