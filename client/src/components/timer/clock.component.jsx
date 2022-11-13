import React from "react";
import { useState, useEffect } from "react";

import { useStopWatch } from "../../hooks/useStopwatche";
import { useKeyPress } from "../../hooks/useKeyPress";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { insertTime } from "../../redux/solvesSlice/solvesSlice";
import { updateChangeScramble } from "../../redux/solvesSlice/solvesSlice";

import "./clock.styles.scss";

const Clock = ({ isTwoPhases, bo3Session, showTime }) => {
  const dispatch = useDispatch();
  const currentScramble = useSelector((state) => state.solves.currentScramble);
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

  const handleTimeChangers = (change) => {
    const lastItem = solves.length - 1;
    const tempArr = JSON.parse(JSON.stringify(solves));
    if (tempArr.length === 0) {
      return;
    }
    tempArr[lastItem][change] = !tempArr[lastItem][change];
    dispatch(insertTime(tempArr));
    setSolves(tempArr);
  };

  const updateSolves = () => {
    const tempArr = JSON.parse(JSON.stringify(solves));
    tempArr.push({
      id: tempArr.length + 1,
      scramble: currentScramble,
      time: time,
      memo: isTwoPhases && laps[0].time,
      exec: currentLapTime,
      dnf: false,
      plus2: false,
    });
    dispatch(insertTime(tempArr));
    setSolves(tempArr);
  };

  useEffect(() => {
    if (spacePressed && timesSpacePressed === 0) {
      setTimesSpacePressed(1);
    }

    //console.log(solves);

    if (spacePressed || (!spacePressed && timesSpacePressed === 1)) {
      switch (timesSpacePressed) {
        case 1:
          if (hasStarted) {
            reset();
          }
          start();
          setTimesSpacePressed(2);
          dispatch(updateChangeScramble(false));
          break;
        case 2:
          if (isTwoPhases) {
            lap();
            setTimesSpacePressed(3);
          } else {
            stop();
            updateSolves();
            setTimesSpacePressed(0);
            dispatch(updateChangeScramble(true));
          }
          break;
        case 3:
          stop();
          updateSolves();
          setTimesSpacePressed(0);
          dispatch(updateChangeScramble(true));
          break;
        default:
          return;
      }
    }
  }, [spacePressed]);

  return (
    <div
      className={`${
        spacePressed || timesSpacePressed ? "clock-active" : "clock"
      }`}
    >
      {showTime && time}
      <div className="time-changers">
        <div onClick={() => handleTimeChangers("dnf")} className="dnf-button">
          DNF
        </div>
        <div onClick={() => handleTimeChangers("plus2")} className="dnf-button">
          +2
        </div>
      </div>
    </div>
  );
};

export default Clock;
