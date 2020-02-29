import BoardTile from 'BoardTile';
import Name from 'entities/Name';
import Plant from 'entities/Plant';
import Instruction, { Verb } from 'Instruction';

interface GameStateInterface {
  board: BoardTile[][];
  log: string[];
  tick(): void;
  applyInstructions(instructions: Instruction[]): void;
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
    applyInstructions(instructions: Instruction[]) {
      instructions.forEach((instruction: Instruction) => {
        const { x, y } = instruction.location;

        if (
          instruction.entity === Name.plant &&
          instruction.verb === Verb.reproduce &&
          this.board[y] !== undefined &&
          this.board[y][x] !== undefined &&
          this.board[y][x].soilFertilized &&
          this.board[y][x].entity === null
        ) {
          this.board[y][x].entity = Plant();
          this.board[y][x].soilFertilized = false;
        }
      });
    },
    tick() {
      let instructions: Instruction[] = [];
      this.board.forEach((boardRow, y) => {
        boardRow.forEach((tile, x) => {
          const entity = tile.entity;
          if (entity === null) return;

          instructions = instructions.concat(entity.tick(this.board, { x, y }));
        });
      });
      this.applyInstructions(instructions);
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
