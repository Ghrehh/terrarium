import { Instruction, ReproduceInstruction, DieInstruction } from 'instructions';
import Coordinate from 'Coordinate';
import Board from 'board';
import Entity from 'entities/Entity';

export default class Plant extends Entity {
  born = 0;
  lifespan = 120;
  reproduceCooldown = 40;
  constructor(currentCycle: number) {
    super();
    this.born = currentCycle;
  }

  generateInstructions(board: Board): Instruction[] {
    const instructions: Instruction[] = [];
    const location = board.coordinateForEntity(this);
    const reproduceInstruction = (location: Coordinate) => {
      return new ReproduceInstruction(
        location,
        (currentCycle: number) => new Plant(currentCycle)
      );
    };

    if (this.canReproduce(board.currentCycle)) {
      if (board.tileEmptyAndFertile(location.north())) {
        instructions.push(reproduceInstruction(location.north()));
      } else if (board.tileEmptyAndFertile(location.east())) {
        instructions.push(reproduceInstruction(location.east()));
      } else if (board.tileEmptyAndFertile(location.south())) {
        instructions.push(reproduceInstruction(location.south()));
      } else if (board.tileEmptyAndFertile(location.west())) {
        instructions.push(reproduceInstruction(location.west()));
      }
    }

    if (board.currentCycle - this.born > this.lifespan) {
      instructions.push(
        new DieInstruction(
          location,
          (currentCycle: number) => new Plant(currentCycle)
        )
      );
    }

    return instructions;
  }

  canReproduce(currentCycle: number): boolean {
    return (currentCycle - this.born) % this.reproduceCooldown === 0;
  }
}
