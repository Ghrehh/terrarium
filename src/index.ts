import Plant from 'entities/Plant';
import boardTile from './boardTile';

const p = Plant();

const board: boardTile[] = [];

for (let i = 0; i < 100; i++) {
  board.push({ soilFertilized: true, entity: null })
}

board[0].entity = p;

const symbolForTile = (tile: boardTile) => {
  if (tile.entity === null && !tile.soilFertilized) return '■';
  if (tile.entity === null) return '~';
  if (tile.entity.name === 'Plant') return 'Ï';

  return 'x';
}

setInterval(
  () => {
    console.log('\x1Bc');
    const symbolsOfBoard = board.map(symbolForTile);
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
