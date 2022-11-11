import React from "react";
import { useState } from "react";

import { useStopWatch } from "../../hooks/useStopwatche";

import "./clock.styles.scss";

const Clock = () => {
  const [solves, setSolves] = useState([])
  const [isActive, setIsActive] = useState(false);
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
    slowestLapTime,
    fastestLapTime,
  } = useStopWatch();

  

  return <div className={`${isActive ? "clock-active" : "clock"}`}>00:00</div>;
};

export default Clock;
