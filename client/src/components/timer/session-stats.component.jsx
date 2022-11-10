import React from "react";

import Table from "react-bootstrap/Table";

import "./session-stats.styles.scss";

const SessionStats = ({ title }) => {
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
              <th>Memo</th>
              <th>Exec</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <th>00:00</th>
              <th>00:00</th>
              <th>00:00</th>
            </tr>
            <tr>
              <th>2</th>
              <th>00:00</th>
              <th>00:00</th>
              <th>00:00</th>
            </tr>
            <tr>
              <th>3</th>
              <th>00:00</th>
              <th>00:00</th>
              <th>00:00</th>
            </tr>
            <tr>
              <th>4</th>
              <th>00:00</th>
              <th>00:00</th>
              <th>00:00</th>
            </tr>
            <tr>
              <th>5</th>
              <th>00:00</th>
              <th>00:00</th>
              <th>00:00</th>
            </tr>
            <tr>
              <th>6</th>
              <th>00:00</th>
              <th>00:00</th>
              <th>00:00</th>
            </tr>
            <tr>
              <th>7</th>
              <th>00:00</th>
              <th>00:00</th>
              <th>00:00</th>
            </tr>
            <tr>
              <th>8</th>
              <th>00:00</th>
              <th>00:00</th>
              <th>00:00</th>
            </tr>
            <tr>
              <th>9</th>
              <th>00:00</th>
              <th>00:00</th>
              <th>00:00</th>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default SessionStats;
