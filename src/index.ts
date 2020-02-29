import Plant from 'entities/Plant';
import EntityName from 'entities/Name';
import BoardTile from 'BoardTile';
import GameState from 'GameState';

const randomInteger = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max + 1));
};

const gameState = GameState(randomInteger);

const p = Plant();

gameState.board[0][0].entity = p;

const symbolForTile = (tile: BoardTile): string => {
  if (tile.entity === null && !tile.soilFertilized) return '■';
  if (tile.entity === null) return '~';
  if (tile.entity.name === EntityName.plant) return 'Ï';

  return 'x';
};

setInterval(() => {
  gameState.tick();
  console.log('\x1Bc');
  let finalOutput = '';
  for (let x = 0; x < gameState.boardHeight; x++) {
    for (let y = 0; y < gameState.boardWidth; y++) {
      finalOutput += symbolForTile(gameState.board[x][y]);
    }
    finalOutput += '\n';
  }

  console.log(finalOutput);
}, 1000);
