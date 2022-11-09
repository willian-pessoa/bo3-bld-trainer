import React from "react";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./bldPage.styles.scss";

const BldPage = () => {
  const [bldConfigs, setBldConfig] = useState({
    twoPhases: false,
    showTime: false,
    bo3Session: 5,
  });

  const handleCheckBox = (event) => {
    switch (event.target.name) {
      case "twoPhases":
        setBldConfig((prev) => ({
          ...prev,
          twoPhases: event.target.checked,
        }));
        break;
      case "showTime":
        setBldConfig((prev) => ({
          ...prev,
          showTime: event.target.checked,
        }));
        break;
      case "bo3Session":
        setBldConfig((prev) => ({
          ...prev,
          bo3Session: Number(event.target.value),
        }));
        break;
      default:
        console.log("Nothing Happens");
    }
  };

  return (
    <div className="bld-page-container">
      <h2>BLD SESSION</h2>
      <div className="config-container">
        <h3>Configs:</h3>
        <div class="divider"></div>
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
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              name="bo3Session"
              value={5}
              checked={bldConfigs.bo3Session === 5}
              onChange={handleCheckBox}
              type="checkbox"
              label="5 Bo3 Session"
            />
            <Form.Check
              name="bo3Session"
              value={10}
              checked={bldConfigs.bo3Session === 10}
              onChange={handleCheckBox}
              type="checkbox"
              label="10 Bo3 Session"
            />
          </Form.Group>
        </Form>
      </div>
      <div className="btn-bld-container">
        <Button>STATS</Button>
        <Button>START SESSION</Button>
      </div>
    </div>
  );
};

export default BldPage;
