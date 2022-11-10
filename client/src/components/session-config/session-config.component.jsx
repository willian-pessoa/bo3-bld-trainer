import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./session-config.styles.scss";

const SessionConfig = ({ room, title }) => {
  const [sessionConfigs, setSessionConfigs] = useState({
    room: room,
    twoPhases: false,
    showTime: false,
    bo3Session: 5,
  });
  const navigate = useNavigate()

  const handleCheckBox = (event) => {
    switch (event.target.name) {
      case "twoPhases":
        setSessionConfigs((prev) => ({
          ...prev,
          twoPhases: event.target.checked,
        }));
        break;
      case "showTime":
        setSessionConfigs((prev) => ({
          ...prev,
          showTime: event.target.checked,
        }));
        break;
      case "bo3Session":
        setSessionConfigs((prev) => ({
          ...prev,
          bo3Session: Number(event.target.value),
        }));
        break;
      default:
        console.log("Nothing Happens");
    }
  };

  const handleNavigate = (route) => {
    navigate(route)
  }

  return (
    <div className="room-container">
      <h2>{title}</h2>
      <div className="config-container">
        <h3>Configs:</h3>
        <div className="divider"></div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              name="twoPhases"
              onChange={handleCheckBox}
              type="checkbox"
              label="2 Phases timer (memo/execution)"
            />
            <Form.Check
              name="showTime"
              onChange={handleCheckBox}
              type="checkbox"
              label="Show time solving"
            />
          </Form.Group>
          <Form.Group
            hidden={sessionConfigs.room === "mbld"}
            className="mb-3"
            controlId="formBasicCheckbox"
          >
            <Form.Check
              name="bo3Session"
              value={5}
              checked={sessionConfigs.bo3Session === 5}
              onChange={handleCheckBox}
              type="checkbox"
              label="5 Bo3 Session"
            />
            <Form.Check
              name="bo3Session"
              value={10}
              checked={sessionConfigs.bo3Session === 10}
              onChange={handleCheckBox}
              type="checkbox"
              label="10 Bo3 Session"
            />
          </Form.Group>
        </Form>
      </div>
      <div className="btn-room-container">
        <Button>STATS</Button>
        <Button onClick={()=>handleNavigate("/timer")} >START SESSION</Button>
      </div>
    </div>
  );
};

export default SessionConfig;
