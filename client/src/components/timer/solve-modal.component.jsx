import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./solve-modal.styles.scss";

const SolveModal = ({ solve, ...props }) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {"Solve " + solve.id}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {solve.scramble &&
          solve["scramble"].map((item, idx) => {
            return <p key={idx}>{item}</p>;
          })}
        <p>Time: {solve.time}</p>
        {solve.memo && <p>Memo: {solve.memo}</p>}
        {solve.exec !== solve.time && <p>Exec: {solve.exec}</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SolveModal;
