import Board from 'Board';

export default abstract class Instruction {
  abstract apply(instruction: Instruction, board: Board): void;
  abstract revert(instruction: Instruction, board: Board): void;
}
