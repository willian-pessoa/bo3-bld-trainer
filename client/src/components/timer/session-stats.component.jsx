import React from "react";

import Table from "react-bootstrap/Table";

import { useSelector } from "react-redux";

import "./session-stats.styles.scss";

const SessionStats = ({ title, isTwoPhases }) => {
  const solves = useSelector((state) => state.solves.solves);

  console.log(solves);

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
            {solves.slice(0).reverse().map(({ id, time, memo, exec, dnf, plus2 }, idx) => {
              return (
                <tr key={idx}>
                  <th>{id}</th>
                  <th>{dnf ? "DNF" : time}</th>
                  {isTwoPhases && (
                    <>
                      <th>{memo}</th>
                      <th>{exec}</th>
                    </>
                  )}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default SessionStats;
