import React from 'react';
import { timeBocks } from './PomodoroTimer';
import './App.css';

const ShortButton = ({ reset, setMinutes }) => {
  return (
    <div className="btnContainer">
      <button className="timeBtn" onClick={() => reset(timeBocks.short)}>
        ShortButton
      </button>
      {/* <button onClick={() => setMinutes(timeBocks.short)}>ShortButton</button> */}
    </div>
  );
};

export default ShortButton;
