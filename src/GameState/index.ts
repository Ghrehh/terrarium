import NewBoard, { Board, Tile } from 'Board';
import Name from 'entities/Name';
import NewPlant from 'entities/Plant';
import Instruction, { Verb } from 'Instruction';

interface GameStateInterface {
  board: Board;
  tick(): void;
  applyInstructions(instructions: Instruction[]): void;
}

const GameState = (
  randomInteger: (_: number) => number
): GameStateInterface => {
  const gameState: GameStateInterface = {
    board: NewBoard(),
    applyInstructions(instructions: Instruction[]) {
      instructions.forEach((instruction: Instruction) => {
        if (
          instruction.entity === Name.plant &&
          instruction.verb === Verb.reproduce &&
          this.board.tileEmptyAndFertile(instruction.location)
        ) {
          const tile = this.board.getTile(instruction.location);
          if (tile !== null) {
            tile.entity = NewPlant(0);
            tile.soilFertilized = false;
          }
        }
      });
    },
    tick() {
      let instructions: Instruction[] = [];
      this.board.tiles.forEach((boardRow, y) => {
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

  return gameState;
};

export default GameState;
