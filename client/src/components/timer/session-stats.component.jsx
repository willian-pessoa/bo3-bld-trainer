import React from "react";
import { useState } from "react";

import Table from "react-bootstrap/Table";
import SolveModal from "./solve-modal.component";

import { useSelector } from "react-redux";

import "./session-stats.styles.scss";

const SessionStats = ({ title, isTwoPhases }) => {
  const solves = useSelector((state) => state.solves.solves);
  const [modalShow, setModalShow] = useState(false);
  const [modalSolve, setModalSolve] = useState({});

  const handleModalShow = (solve) => {
    console.log(solve)
    setModalShow(true);
    setModalSolve(solve);
  };

  return (
    <div className="session-stats">
      <p>{title}</p>
      <div className="session-highlights">
        <Table bordered size="sm">
          <thead>
            <tr>
              <th>Category</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Single</td>
              <td>00:00</td>
            </tr>
            <tr>
              <td>Mo3</td>
              <td>00:00</td>
            </tr>
            <tr>
              <td>MBo3</td>
              <td>00:00</td>
            </tr>
            <tr>
              <td>Accurancy</td>
              <td>70%</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <p>Solves x / y</p>
      <div className="session-times">
        <Table bordered size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Time</th>
              {isTwoPhases && (
                <>
                  <th>Memo</th>
                  <th>Exec</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {solves
              .slice(0)
              .reverse()
              .map((solve, idx) => {
                return (
                  <tr onClick={() => handleModalShow(solve)} key={idx}>
                    <th>{solve.id}</th>
                    <th>{solve.dnf ? "DNF" : solve.time}</th>
                    {isTwoPhases && (
                      <>
                        <th>{solve.memo}</th>
                        <th>{solve.exec}</th>
                      </>
                    )}
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
      <SolveModal
        solve={modalSolve}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default SessionStats;
