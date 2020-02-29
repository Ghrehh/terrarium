import NewBoard, { Board } from 'Board';
import Name from 'entities/Name';
import NewPlant from 'entities/Plant';
import Instruction, { Verb } from 'Instruction';

interface Game {
  board: Board;
  tick(): void;
  applyInstructions(instructions: Instruction[]): void;
}

const NewGame = (randomInteger: (_: number) => number): Game => {
  return {
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
      //console.log(instructions);
    }
  };
};

export default NewGame;
