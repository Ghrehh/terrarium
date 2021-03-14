import Board from 't/Board';
import Coordinate from 't/Coordinate';
import { Instruction } from 't/instructions';

export default abstract class Attribute {
  abstract makeInstructions(ownPosition: Coordinate, board: Board): Instruction[];
  abstract useEnergy(): number;
}
