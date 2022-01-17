import React from 'react';
import { Board } from '../styles/componentStyles';
import Row from './Row';


const GridComponent = ({ grid, currentColumn, playing, toggleCell }) => (
  <Board className="ba o-90 shadow-2 b--dark-pink bw4" >
    {
      grid.map((row, y) => (
        <Row
          row={row}
          currentColumn={currentColumn}
          playing={playing}
          toggleCell={toggleCell}
          y={y}
        />
      ))
    }
  </Board>
);

export default GridComponent;
