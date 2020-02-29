import EntityName from 'entities/Name';
import { Tile } from 'Board';
import GameState from 'GameState';

const randomInteger = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max + 1));
};

const gameState = GameState(randomInteger);

const symbolForTile = (tile: Tile | null): string => {
  if (tile === null) return 'x';
  if (tile.entity === null && !tile.soilFertilized) return '■';
  if (tile.entity === null) return '~';
  if (tile.entity.name === EntityName.plant) return 'T';

  return 'x';
};

setInterval(() => {
  gameState.tick();
  console.log('\x1Bc');
  let finalOutput = '';
  for (let y = 0; y < gameState.board.height; y++) {
    for (let x = 0; x < gameState.board.width; x++) {
      finalOutput += symbolForTile(gameState.board.getTile({ x, y }));
    }
    finalOutput += '\n';
  }

  console.log(finalOutput);
}, 200);
