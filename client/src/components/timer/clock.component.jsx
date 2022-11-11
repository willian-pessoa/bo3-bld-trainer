import React from "react";
import { useState, useEffect } from "react";

import { useStopWatch } from "../../hooks/useStopwatche";
import { useKeyPress } from "../../hooks/useKeyPress";

import "./clock.styles.scss";

const Clock = () => {
  const spacePressed = useKeyPress(" ");
  const [timesSpacePressed, setTimesSpacePressed] = useState(0);
  const [solves, setSolves] = useState([]);
  const {
    // actions
    start,
    stop,
    reset,
    lap,
    // data
    isRunning,
    time,
    // lap data
    laps,
    currentLapTime,
    hasStarted,
  } = useStopWatch();

  useEffect(() => {
    if (spacePressed && timesSpacePressed === 0) {
      setTimesSpacePressed(1);
    }

    switch (timesSpacePressed) {
      case 1:
        if (hasStarted) {
          reset();
        }
        start();
        setTimesSpacePressed(2);
        break;
      case 2:
        stop();
        setTimesSpacePressed(0);
        break;
      default:
        return;
    }
  }, [spacePressed]);

  return (
    <div className={`${spacePressed || isRunning ? "clock-active" : "clock"}`}>
      {time}
    </div>
  );
};

export default Clock;
