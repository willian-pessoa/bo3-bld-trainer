import React from "react";

import Table from "react-bootstrap/Table";

import { formatMs } from "../../hooks/useStopwatche";

import "./bo3-table.styles.scss";

const Bo3Table = ({ sessionSolvesObject }) => {
  return (
    <div>
      <Table className="custom-table" bordered hover>
        <thead>
          <tr>
            <th>#Bo3</th>
            <th colSpan={3}>Times</th>
            <th>Bo3</th>
            <th>Success</th>
            <th>Ao3</th>
          </tr>
        </thead>
        <tbody>
          {sessionSolvesObject.data.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>{item.media}</td>
                {item.bo3Solves.map((solve, i) => {
                  return (
                    <td className="remove-border" key={i}>
                      {formatMs(solve)}
                    </td>
                  );
                })}
                <td>{formatMs(item.bo3)}</td>
                <td>{item.success}</td>
                <td>{formatMs(item.mo3)}</td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={4}>Bo3's Average</td>
            <td>{formatMs(sessionSolvesObject.averageBo3)}</td>
            <td>{sessionSolvesObject.totalSuccess}</td>
            <td>{formatMs(sessionSolvesObject.averageMo3)}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Bo3Table;
