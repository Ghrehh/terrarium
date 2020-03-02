import NewBoard, { Board } from 'Board';
import Name from 'entities/Name';
import NewPlant from 'entities/Plant';
import Instruction, { Verb } from 'Instruction';
import NewCoordinate from 'Coordinate';

export interface Game {
  currentTick: number;
  board: Board;
  tick(): void;
  applyInstructions(instructions: Instruction[]): void;
}

const NewGame = (randomInteger: (_: number) => number): Game => {
  return {
    currentTick: 0,
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
            tile.entity = NewPlant(this.currentTick);
            tile.soilFertilized = false;
          }
        } else if (
          instruction.entity === Name.plant &&
          instruction.verb === Verb.die
        ) {
          const tile = this.board.getTile(instruction.location);
          if (tile !== null) {
            tile.entity = null;
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

          instructions = instructions.concat(
            entity.tick({
              currentTick: this.currentTick,
              board: this.board,
              location: NewCoordinate({ x, y })
            })
          );
        });
      });
      this.applyInstructions(instructions);
      this.currentTick += 1;
      //console.log(instructions);
    }
  };
};

export default NewGame;
