import React from 'react';
import { ButtonPanel } from '../styles/componentStyles';

const Buttons = ({ playing, stop, start, reset, toggleMute, isMuted, speedUp, speedDown }) => (
  <ButtonPanel>
    <div className="ph3 br-pill br-4 light-gray bg-black w-5">
      <i className={`fas ${playing ? 'fa-pause-circle' : 'fa-play-circle'} pointer mr2`} onClick={playing ? stop : start} />
      <i className={`fas mr2 fa-trash-alt`} onClick={playing ? null : reset} />
      <i className={`fas  mr2 ${isMuted ? 'fa-volume-off' : 'fa-volume-up'}`} onClick={toggleMute} />
      <i className="fas mr2 fa-fast-backward" onClick={speedDown} ></i>
      <i className="fas mr2 fa-fast-forward" onClick={speedUp}></i>
    </div>

  </ButtonPanel>
);

export default Buttons;
