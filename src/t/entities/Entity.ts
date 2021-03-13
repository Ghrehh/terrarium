import Instruction from 't/instructions/Instruction';
import Board from 't/Board';

export default abstract class Entity {
  abstract readonly born: number;
  abstract readonly lifespan: number;
  abstract readonly reproduceCooldown: number;

  abstract generateInstructions(board: Board): Instruction[];
}
