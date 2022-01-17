import styled from 'styled-components';

export const Game = styled.div`
  margin: auto;
  max-width: 40vw;
  font-size: 1.5rem;

`;


export const Board = styled.div`
  height: 40vw;

  .row {
    height: 6.25%;
  }
  .cell {
    display: inline-block;
    width: 6.25%;
    height: 100%;
    border: 1px solid pink;
    background: #F4F4F4;
    &.active {
      background: #7f265f;
      &.playing { animation: trip .2s infinite; }
    }
  }
  .playing { background: #d0f1d0; }
  @keyframes trip {
    100% { background-color: #53c94f; }
  }
`;

export const ButtonPanel = styled.div`
  height: 50%;
  padding-top: .5rem;
    &:hover { cursor: pointer; }

  
`;
