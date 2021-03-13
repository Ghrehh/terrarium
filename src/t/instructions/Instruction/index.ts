import Board from 't/Board';

export default abstract class Instruction {
  abstract apply(board: Board): void;
  abstract revert(board: Board): void;
}
