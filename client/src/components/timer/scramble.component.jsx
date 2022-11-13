import React from "react";
import { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./scramble.styles.scss";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateCurrentScramble } from "../../redux/solvesSlice/solvesSlice";

import { getScrambles } from "../../utils/scrambler/scrambler";

const Scramble = ({ scrambleType, numberOfCubes }) => {
  const dispatch = useDispatch();
  const changeScramble = useSelector((state) => state.solves.changeScramble);
  const currentScramble = useSelector((state) => state.solves.currentScramble);
  const [next, setNext] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getNScrambles = (amount) => {
    const arrayScrambles = [];
    for (let i = 0; i < amount; i++) {
      arrayScrambles.push(getScrambles.getScramble());
    }
    dispatch(updateCurrentScramble(arrayScrambles));
  };

  useEffect(() => {
    if (changeScramble) {
      switch (scrambleType) {
        case "bld":
          const bldScramble = getScrambles.getScramble();
          dispatch(updateCurrentScramble([bldScramble]));
          break;
        case "edges":
          const edgesScramble = getScrambles.getEdgeScramble();
          dispatch(updateCurrentScramble([edgesScramble]));
          break;
        case "corners":
          const cornersScramble = getScrambles.getCornerScramble();
          dispatch(updateCurrentScramble([cornersScramble]));
          break;
        case "mbld":
          getNScrambles(numberOfCubes);
          break;
        default:
          return;
      }
    }
  }, [scrambleType, next, numberOfCubes, changeScramble]);

  return (
    <div className="scramble">
      {scrambleType !== "mbld" ? (
        currentScramble[0]
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
          {currentScramble.map((item, idx) => {
            return <p key={idx}>{idx + 1 + ") " + item}</p>;
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
