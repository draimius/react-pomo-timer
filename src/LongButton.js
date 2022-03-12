import React from 'react';
import { timeBocks } from './PomodoroTimer';
import './App.css';

const LongButton = ({ reset, setMinutes }) => {
  return (
    <div className="btnContainer">
      <button className="timeBtn" onClick={() => reset(timeBocks.long)}>
        LongButton
      </button>
    </div>
  );
};

export default LongButton;
