import React from "react";

import "./timer.styles.scss";

import BackButton from "./back-button.component";
import Clock from "./clock.component";
import SessionStats from "./session-stats.component";
import Scramble from "./scramble.component";

import { useSelector } from "react-redux";

const Timer = () => {
  const configTimer = useSelector((state) => state.configTimer);

  return (
    <div className="timer-container">
      <div className="top-container">
        <BackButton />
        <Scramble
          scrambleType={configTimer.room}
          numberOfCubes={configTimer.numberOfCubes}
        />
      </div>
      <div className="bottom-container">
        <SessionStats
          isTwoPhases={configTimer.twoPhases}
          title={`${configTimer.room.toUpperCase()} SESSION`}
        />
        <Clock
          showTime={configTimer.showTime}
          bo3Session={
            configTimer.room === "mbld" ? 1 : configTimer.bo3Session * 3
          }
          isTwoPhases={configTimer.twoPhases}
        />
      </div>
    </div>
  );
};

export default Timer;
