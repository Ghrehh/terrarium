import React, { useEffect, useState } from 'react';
import BoardType from 't/Board';
import Board from 'ui/Board';
import Stats from 'ui/Stats';

function useForceUpdate() {
  const [_value, setValue] = useState(0);
  return () => setValue((value) => value + 1);
}

const UI = ({ board }: { board: BoardType }) => {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    document.addEventListener('keydown', function (event) {
      console.log(event.key);
      switch (event.key) {
        case 'ArrowRight':
          board.next();
          forceUpdate();
          break;
        case 'ArrowLeft':
          board.previous();
          forceUpdate();
          break;
      }
    });
  }, []);

  return (
    <>
      <Board board={board} />
      <Stats board={board} />
    </>
  );
};

export default UI;
