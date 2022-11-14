import React from "react";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import SolveModal from "./solve-modal.component";

import { ImCross } from "react-icons/im";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeSolveById } from "../../redux/solvesSlice/solvesSlice";

import { formatMs } from "../../hooks/useStopwatche";

import "./session-stats.styles.scss";

const SessionStats = ({ title, isTwoPhases }) => {
  const dispath = useDispatch();
  const solves = useSelector((state) => state.solves.solves);
  const [modalShow, setModalShow] = useState(false);
  const [modalSolve, setModalSolve] = useState({});

  const handleModalShow = (solve) => {
    console.log(solve);
    setModalShow(true);
    setModalSolve(solve);
  };

  const handleDeleteSolve = (solveId) => {
    dispath(removeSolveById(solveId));
  };

  return (
    <div className="session-stats">
      <div className="session-highlights">
        <p>{title}</p>
        <Button>Session Details</Button>
      </div>
      <div className="session-times">
        <p>Solves</p>
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
              <th>
                <ImCross />
              </th>
            </tr>
          </thead>
          <tbody>
            {solves
              .slice(0)
              .reverse()
              .map((solve, idx) => {
                return (
                  <tr key={idx}>
                    <th onClick={() => handleModalShow(solve)}>
                      {solves.length - idx}
                    </th>
                    <th onClick={() => handleModalShow(solve)}>
                      {solve.dnf
                        ? "DNF"
                        : solve.plus2
                        ? formatMs(solve.milliseconds + 2000) + "+"
                        : solve.time}
                    </th>
                    {isTwoPhases && (
                      <>
                        <th>{solve.memo}</th>
                        <th>{solve.exec}</th>
                      </>
                    )}
                    <th onClick={() => handleDeleteSolve(solve.id)}>
                      <ImCross />
                    </th>
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
