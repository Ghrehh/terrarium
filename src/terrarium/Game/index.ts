import Board from 'Board';
import Instruction from 'instructions/Instruction';

export interface Game {
  currentTick: number;
  board: Board;
  tick(): void;
  applyInstructions(instructions: Instruction[]): void;
}

const NewGame = (randomInteger: (_: number) => number): Game => {
  return {
    currentTick: 0,
    board: new Board(),
    applyInstructions(instructions: Instruction[]) {
      instructions.forEach((instruction: Instruction) => {
        /*
        const sourceTile = this.board.getTile(instruction.sourceLocation);
        const targetTile = this.board.getTile(instruction.targetLocation);

        if (sourceTile === null || targetTile === null) {
          throw 'sourceTile or targetTile missing';
        }

        if (
          instruction.sourceName === Name.plant &&
          instruction.verb === Verb.reproduce &&
          targetTile.entity === null &&
          sourceTile.entity !== null
        ) {
          targetTile.entity = sourceTile.entity.reproduce(this.currentTick);
          targetTile.soilFertilized = false;
        } else if (
          instruction.sourceName === Name.plant &&
          instruction.verb === Verb.die
        ) {
          targetTile.entity = null;
        } else if (
          instruction.sourceName === Name.herbivore &&
          instruction.verb === Verb.move &&
          targetTile.entity === null &&
          sourceTile.entity !== null
        ) {
          targetTile.entity = sourceTile.entity;
          sourceTile.entity = null;
        }*/
      });
    },
    tick() {
      let instructions: Instruction[] = [];
      this.board.tiles.forEach((boardRow, y) => {
        boardRow.forEach((tile, x) => {
          const entity = tile.entity;
          if (entity === null) return;

          instructions = instructions
            .concat
            /*
            entity.tick({
              currentTick: this.currentTick,
              board: this.board,
              location: new Coordinate(x, y)
            })*/
            ();
        });
      });
      this.applyInstructions(instructions);
      this.currentTick += 1;
      //console.log(instructions);
    }
  };
};

export default NewGame;
