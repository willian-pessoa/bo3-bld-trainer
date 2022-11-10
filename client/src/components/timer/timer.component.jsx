import React from "react";

import "./timer.styles.scss";

import BackButton from "./back-button.component";
import Clock from "./clock.component";
import SessionStats from "./session-stats.component";
import Scramble from "./scramble.component";

const Timer = () => {
  return (
    <div className="timer-container">
      <div className="top-container">
        <BackButton />
        <Scramble />
      </div>
      <div className="bottom-container">
        <SessionStats title="BLD SESSION" />
        <Clock />
      </div>
    </div>
  );
};

export default Timer;
