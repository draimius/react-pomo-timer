import React, { useState } from 'react';
import './App.css';

const StartButton = ({ countDown, toggleStart }) => {
  return (
    <div className="btnContainer">
      <button className="timeBtn" onClick={() => toggleStart()}>
        {countDown ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

export default StartButton;
