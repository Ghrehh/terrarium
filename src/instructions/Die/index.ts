import Coordinate from 'Coordinate';
import Entity from 'entities/Entity';
import Instruction from 'instructions/Instruction';
import Board from 'Board';

export default class Die extends Instruction {
  location: Coordinate;
  entityConstructor: (cycle: number) => Entity;

  constructor(location: Coordinate, entityConstructor: (cycle: number) => Entity) {
    super();
    this.location = location;
    this.entityConstructor = entityConstructor;
  }

  apply(instruction: Instruction, board: Board): void {
  }

  revert(instruction: Instruction, board: Board): void {
  }
}
