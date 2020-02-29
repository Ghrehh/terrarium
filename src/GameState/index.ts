import BoardTile from 'BoardTile';
import Instruction from 'Instruction';

interface GameStateInterface {
  board: BoardTile[][];
  log: string[];
  tick(): void;
  boardWidth: number;
  boardHeight: number;
}

const GameState = (
  randomInteger: (_: number) => number
): GameStateInterface => {
  const gameState: GameStateInterface = {
    board: [],
    log: [],
    boardWidth: 30,
    boardHeight: 30,
    tick() {
      let instructions: Instruction[] = [];
      this.board.forEach((boardRow, y) => {
        boardRow.forEach((tile, x) => {
          const entity = tile.entity;
          if (entity === null) return;

          instructions = instructions.concat(entity.tick(this.board, { x, y }));
        });
      });
      console.log(instructions);
    }
  };

  for (let x = 0; x < gameState.boardHeight; x++) {
    gameState.board[x] = [];
    for (let y = 0; y < gameState.boardWidth; y++) {
      gameState.board[x][y] = { soilFertilized: true, entity: null };
    }
  }

  return gameState;
};

export default GameState;
