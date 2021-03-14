import React from 'react';
import BoardType, { Tile as TileType } from 't/Board';
import Entity from 't/Entity';

const Tile = ({ tile }: { tile: TileType }) => {
  const getColor = (): string => {
    if (tile?.entity?.constructor?.name === Entity.name) return 'green';
    if (tile.fertile) return 'brown';

    return 'black';
  };

  return (
    <div
      style={{
        width: '10px',
        height: '10px',
        backgroundColor: getColor(),
        border: '1px solid black'
      }}
    />
  );
};

const Board = ({ board }: { board: BoardType }) => {
  return (
    <div>
      {board.tiles.map((row) => (
        <div style={{ display: 'flex' }}>
          {row.map((tile) => (
            <Tile tile={tile} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
