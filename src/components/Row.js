import React from 'react';

import Cell from './Cell';

const Row = ({ row, currentColumn, toggleCell, playing, y }) => {
  return (
    <div className="row">
      {
        row.map((cell, x) => (
          <Cell
            cell={cell}
            currentColumn={currentColumn}
            playing={playing}
            toggleCell={toggleCell}
            y={y}
            x={x}
          />
        ))
      }
    </div>
  )
};

export default Row;
