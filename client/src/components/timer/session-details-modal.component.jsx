import React from "react";

import Modal from "react-bootstrap/Modal";
import Bo3Table from "../bo3Table/bo3-table.component";

import { parseSessionData } from "../../utils/parseSessionData";

import "./session-details-modal.styles.scss";

const SessionDetailsModal = ({
  solves,
  showSessionDetailsModal,
  setShowSessionDetailsModal,
}) => {
  return (
    <div className="session-details-modal">
      <Modal
        show={showSessionDetailsModal}
        fullscreen={true}
        onHide={() => setShowSessionDetailsModal(false)}
      >
        <Modal.Header className="session-modal-header" closeButton>
          <Modal.Title>Session Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="session-modal-body">
          <Bo3Table sessionSolvesObject={parseSessionData(solves)} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SessionDetailsModal;
