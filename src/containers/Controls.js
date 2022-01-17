import React from 'react';
import { connect } from 'react-redux';

import { GAME_INIT, GAME_PAUSE, ADVANCE_COLUMN, RESET, MUTE, SPEED_DOWN, SPEED_UP } from '../utils/constants';

import ControlsComponent from '../components/Buttons';

let speed = 200

const Controls = ({
  playing, start, stop, reset, toggleMute, isMuted, speedUp, speedDown
}) => (
  <ControlsComponent
    playing={playing}
    start={start}
    stop={stop}
    reset={reset}
    toggleMute={toggleMute}
    isMuted={isMuted}
    speedDown={speedDown}
    speedUp={speedUp}
  />
);


const mapStateToProps = state => ({
  notes: state.soundBoard.notes,
  playing: Boolean(state.interval),
  isMuted: state.soundBoard.mute,
});

function reduceSpeed() {
  if (speed < 800) {
    speed = speed + 40;
  }
  return speed;
}

function incrementSpeed() {
  if (speed > 40) {
    speed = speed - 40
  }
  return speed;
}

const mapDispatchToProps = dispatch => ({

  start: () => dispatch({
    type: GAME_INIT,
    interval: setInterval(() => dispatch({ type: ADVANCE_COLUMN }), speed),
  }),
  stop: () => dispatch({ type: GAME_PAUSE }),
  reset: () => dispatch({ type: RESET }),
  toggleMute: () => dispatch({ type: MUTE }),
  speedUp: () => dispatch({
    type: SPEED_UP,
    interval: setInterval(() => dispatch({ type: ADVANCE_COLUMN }), incrementSpeed()),
  }),
  speedDown: () => dispatch({
    type: SPEED_DOWN,
    interval: setInterval(() => dispatch({ type: ADVANCE_COLUMN }), reduceSpeed()),
  }),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Controls);
