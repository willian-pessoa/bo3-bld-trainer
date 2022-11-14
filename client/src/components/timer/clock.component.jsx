import React from "react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useStopWatch } from "../../hooks/useStopwatche";
import { useKeyPress } from "../../hooks/useKeyPress";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { insertTime } from "../../redux/solvesSlice/solvesSlice";
import { updateChangeScramble } from "../../redux/solvesSlice/solvesSlice";

import Button from "react-bootstrap/Button";

import "./clock.styles.scss";

const Clock = ({ isTwoPhases, bo3Session, showTime }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentScramble = useSelector((state) => state.solves.currentScramble);
  const spacePressed = useKeyPress(" ");
  const [timesSpacePressed, setTimesSpacePressed] = useState(0);
  const solves = useSelector((state) => state.solves.solves)
  //const [solves, setSolves] = useState([]);
  const {
    // actions
    start,
    stop,
    reset,
    lap,
    // data
    isRunning,
    time,
    milliseconds,
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
    //setSolves(tempArr);
  };

  const updateSolves = () => {
    const tempArr = JSON.parse(JSON.stringify(solves));
    const lastIndex = tempArr.length - 1;
    const id = lastIndex === -1 ? 1 : tempArr[lastIndex].id + 1 
    tempArr.push({
      id: id,
      scramble: currentScramble,
      time: time,
      milliseconds: milliseconds,
      memo: isTwoPhases && laps[0].time,
      exec: currentLapTime,
      dnf: false,
      plus2: false,
    });
    dispatch(insertTime(tempArr));
    //setSolves(tempArr);
  };

  const handleSaveSession = () => {
    // TODO
    // Save the solves in a DB
    //setSolves([]);
    dispatch(insertTime([]));
    navigate(-1);
  };

  // Stopwatch logic
  useEffect(() => {
    if (solves.length === bo3Session) {
      return;
    }

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
      <span className="space-tooltip">press SPACE to start</span>
      {spacePressed || timesSpacePressed ? (showTime ? time : "...") : time}
      <div className="time-changers">
        <div onClick={() => handleTimeChangers("dnf")} className="dnf-button">
          {spacePressed || timesSpacePressed ? "" : "DNF"}
        </div>
        <div onClick={() => handleTimeChangers("plus2")} className="dnf-button">
          {spacePressed || timesSpacePressed ? "" : "+2"}
        </div>
      </div>
      {solves.length === bo3Session && <Button onClick={() => handleSaveSession()}>Save Session</Button>}
    </div>
  );
};

export default Clock;
