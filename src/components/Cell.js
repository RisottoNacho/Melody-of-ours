
import React from 'react';

const Cell = ({
  cell, currentColumn, playing, toggleCell, x, y,
}) => {
  let classes = 'cell';
  if (cell) classes += ' active';
  if (currentColumn === x) classes += ' playing';
  if (!playing) classes += ' pointer';

  return !playing
    ? (<div
      className={classes}
      onClick={toggleCell(x, y)}
    />)
    : <div className={classes} />;
};

export default Cell;
