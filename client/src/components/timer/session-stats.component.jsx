import React from 'react'

import "./session-stats.styles.scss"

const SessionStats = ({title}) => {
  return (
    <div className='session-stats'>
      <p>{title}</p>
      <div className="session-highlights">
        <p>Single</p>
        <p>Mo3</p>
        <p>MBo3</p>
        <p>Acurancy</p>
      </div>
      <div className="session-times">
        <p>Solve x/y</p>
        table
      </div>
    </div>
  )
}

export default SessionStats
