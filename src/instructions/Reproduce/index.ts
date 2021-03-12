import Coordinate from 'Coordinate';
import Entity from 'entities/Entity';
import Instruction from 'instructions/Instruction';
import Board from 'Board';

export default class Reproduce extends Instruction {
  location: Coordinate;
  entityConstructor: (cycle: number) => Entity;

  constructor(location: Coordinate, entityConstructor: (cycle: number) => Entity) {
    super();
    this.location = location;
    this.entityConstructor = entityConstructor;
  }

  apply(instruction: Instruction, board: Board): void {
    const tile = board.getTile(this.location);
    if (tile.entity !== null) throw 'trying to overwrite an entity';
    tile.entity = this.entityConstructor(board.currentCycle);
  }

  revert(instruction: Instruction, board: Board): void {
    const tile = board.getTile(this.location);
    if (tile.entity === null) throw 'tile should be null';
    tile.entity = null;
  }
}
