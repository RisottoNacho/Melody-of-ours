import {
  ADVANCE_COLUMN,
  GAME_INIT,
  GAME_PAUSE,
  CELL_CLICK,
  RESET,
  MUTE,
  SPEED_DOWN,
  SPEED_UP,
} from '../utils/constants';

import StartAudioContext from 'startaudiocontext';
import Tone from 'tone';

import Game from '../game/game';

const synth = new Tone.PolySynth(16, Tone.Synth);
const volume = new Tone.Volume(-16);
synth.chain(volume, Tone.Master);
volume.mute = false;
StartAudioContext(synth.context, '#root')
  .then(() => console.log('iniciar audio'))
  .catch(() => console.log('error'));


const initialState = {
  grid: Game.createGrid({ rows: 16, columns: 16 }),
  currentColumn: -1,
  interval: null,
  dimensions: { rows: 16, columns: 16 },
  soundBoard: {
    notes: ['C6', 'A5', 'G5', 'E5', 'D5', 'C5', 'A4', 'G4', 'E4', 'D4', 'C4', 'A3', 'G3', 'E3', 'D3', 'C3'],
    mute: false,
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_INIT:
      return {
        ...state,
        interval: action.interval,
      };
    case GAME_PAUSE:
      return {
        ...state,
        interval: clearInterval(state.interval),
      };
    case CELL_CLICK:
      const newGrid = state.grid.slice();
      if(newGrid[action.y][action.x] == 0)
        newGrid[action.y][action.x] = 1
      else
        newGrid[action.y][action.x] = 0
      return {
        ...state,
        grid: newGrid,
      };
    case ADVANCE_COLUMN:
      const nextColumn = (state.currentColumn + 1) % state.dimensions.columns;
      const notes = state.grid.map((row, y) => {
        const note = state.soundBoard.notes;
        return {
          active: row[state.currentColumn],
          note: note[y % note.length],
        };
      })
        .filter(a => a.active)
        .map(a => a.note);

      synth.triggerAttackRelease(notes, 0.2);

      return {
        ...state,
        soundBoard: {
          ...state.soundBoard,
        },
        grid: ((nextColumn === 0 && state.currentColumn > 0)
          ? Game.generateNewGrid(state.grid, state.dimensions)
          : state.grid),
        currentColumn: nextColumn,
      };


    case RESET:
      return {
        ...state,
        grid: Game.createGrid({ rows: 16, columns: 16 }),
        currentColumn: -1,
        soundBoard: {
          ...state.soundBoard,
        },
      };
    case MUTE:
      volume.mute = !state.soundBoard.mute;
      return {
        ...state,
        soundBoard: {
          ...state.soundBoard,
          mute: !state.soundBoard.mute,
        },
      };
    case SPEED_DOWN:
      clearInterval(state.interval);
      return {
        ...state,
        interval: action.interval,
      };
    case SPEED_UP:
      clearInterval(state.interval);
      return {
        ...state,
        interval: action.interval,
      };
    default:
      return state;
  }
};

export default reducer;
