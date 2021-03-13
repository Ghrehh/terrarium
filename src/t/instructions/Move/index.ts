import Coordinate from 't/Coordinate';
import Instruction from 't/instructions/Instruction';
import Board from 't/Board';

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
