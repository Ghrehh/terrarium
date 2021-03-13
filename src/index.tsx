import React from 'react';
import ReactDOM from 'react-dom';
import UI from 'ui';
import Board from 't/Board';

const board = new Board();

ReactDOM.render(
  <React.StrictMode>
    <UI board={board} />
  </React.StrictMode>,
  document.getElementById('root')
);
