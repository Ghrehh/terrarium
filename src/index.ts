import Plant from 'entities/Plant';
import { Tile } from 'Board';
import Coordinate from 'Coordinate';
import Board from 'Board';

const randomInteger = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max + 1));
};


const symbolForTile = (tile: Tile | null): string => {
  if (tile === null) return 'x';
  if (tile.entity === null && !tile.soilFertilized) return '■';
  if (tile.entity === null) return '~';
  if (tile.entity.constructor.name === Plant.name) return 'T';
  //if (tile.entity.constructor.name === EntityName.herbivore) return 'H';

  return 'x';
};

setInterval(() => {
  const board = new Board();
  console.log('\x1Bc');
  let finalOutput = '';
  board.forEach((tile, rowEnd) => {
    finalOutput += symbolForTile(tile);
    if (rowEnd) {
      finalOutput += '\n';
    }
  });

  console.log(finalOutput);
}, 200);
