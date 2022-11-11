import React from "react";
import { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./scramble.styles.scss";

import { getScrambles } from "../../utils/scrambler/scrambler";

const Scramble = ({ scrambleType, numberOfCubes }) => {
  const [scramble, setScramble] = useState([""]);
  const [next, setNext] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getNScrambles = (amount) => {
    const arrayScrambles = [];
    for (let i = 0; i < amount; i++) {
      arrayScrambles.push(getScrambles.getScramble());
    }
    setScramble(arrayScrambles);
  };

  useEffect(() => {
    switch (scrambleType) {
      case "bld":
        setScramble([getScrambles.getScramble()]);
        break;
      case "edges":
        setScramble([getScrambles.getEdgeScramble()]);
        break;
      case "corners":
        setScramble([getScrambles.getCornerScramble()]);
        break;
      case "mbld":
        getNScrambles(numberOfCubes);
        break;
      default:
        setScramble(getScrambles.getScramble());
    }
  }, [scrambleType, next, numberOfCubes]);

  return (
    <div className="scramble">
      {scrambleType !== "mbld" ? (
        scramble[0]
      ) : (
        <div onClick={handleShow} className="mbld">
          Show Scrambles
        </div>
      )}
      <div
        className="next"
        hidden={scrambleType === "mbld"}
        onClick={() => setNext((prev) => !prev)}
      >
        {" "}
        next{" "}
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Scrambles</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {scramble.map((item, idx) => {
            return <p key={idx}>{idx+1 + ") " + item}</p>;
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setNext((prev) => !prev)}>
            Next
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Scramble;
