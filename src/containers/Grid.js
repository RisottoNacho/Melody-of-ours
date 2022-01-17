import React from 'react';
import { connect } from 'react-redux';

import GridComponent from '../components/Grid';

import { CELL_CLICK } from "../utils/constants";

const Grid = ({ grid, currentColumn, playing, toggleCell }) => (
  <GridComponent
    grid={grid}
    currentColumn={currentColumn}
    playing={playing}
    toggleCell={toggleCell}
  />
);

const mapStateToProps = state => ({
  grid: state.grid,
  currentColumn: state.currentColumn,
  playing: Boolean(state.interval),
});

const mapDispatchToProps = dispatch => ({
  toggleCell: (x, y) => () => dispatch({ type: CELL_CLICK, x, y }),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Grid);
