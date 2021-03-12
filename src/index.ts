import { Readable } from 'stream';
import { emitKeypressEvents } from 'readline';
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
const board = new Board();

const printBoard = (): void => {
  console.log('\x1Bc');
  let finalOutput = '';
  board.forEach((tile, rowEnd) => {
    finalOutput += symbolForTile(tile);
    if (rowEnd) {
      finalOutput += '\n';
    }
  });

  console.log(finalOutput);
}

const processKey = (key: string): void => {
  if (key === 'right') {
    board.process();
    printBoard();
  }
}

printBoard();
emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (key, data) => {
  if (data.ctrl && data.name === 'c') {
    process.exit();
  } else {
    processKey(data.name);
  }
});
