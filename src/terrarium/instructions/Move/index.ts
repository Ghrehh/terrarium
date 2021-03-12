import Coordinate from 'Coordinate';
import Instruction from 'instructions/Instruction';
import Board from 'Board';

export default class Move extends Instruction {
  start: Coordinate;
  end: Coordinate;

  constructor(start: Coordinate, end: Coordinate) {
    super();
    this.start = start;
    this.end = end;
  }

  apply(board: Board): void {}

  revert(board: Board): void {}
}
