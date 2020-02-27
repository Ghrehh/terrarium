import Plant from 'entities/Plant';
import boardTile from 'boardTile';
import GameState from 'GameState';

const randomInteger = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max + 1));
}

const gameState = GameState(randomInteger);

const p = Plant();

gameState.board[0].entity = p;

const symbolForTile = (tile: boardTile) => {
  if (tile.entity === null && !tile.soilFertilized) return '■';
  if (tile.entity === null) return '~';
  if (tile.entity.name === 'Plant') return 'Ï';

  return 'x';
}

setInterval(
  () => {
    console.log('\x1Bc');
    const symbolsOfBoard = gameState.board.map(symbolForTile);
    const finalOutput: string[] = [];
    const output = symbolsOfBoard.reduce(
      (output, sym, i) => {
        if (i % 10 === 0 && i !== 0) {
          output.push('\n')
        }

        output.push(sym)
        return output;
      },
      finalOutput
    )

    console.log(output.join(''));
  },
  1000
)
