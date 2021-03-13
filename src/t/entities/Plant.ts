import {
  Instruction,
  ReproduceInstruction,
  DieInstruction
} from 't/instructions';
import Coordinate from 't/Coordinate';
import Board from 't/Board';
import Entity from 't/entities/Entity';

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

    const reproduceInstruction = this.getReproduceInstruction(board);
    if (reproduceInstruction) instructions.push(reproduceInstruction);

    return instructions;
  }

  private canReproduce(currentCycle: number): boolean {
    if (currentCycle - this.born === 0) return false;
    return (currentCycle - this.born) % this.reproduceCooldown === 0;
  }

  private getReproduceInstruction(board: Board): Instruction | undefined {
    if (!this.canReproduce(board.currentCycle)) return;

    const location = board.coordinateForEntity(this);

    for (const locationFunction of location.compassDirections()) {
      const newLocation = locationFunction();

      if (newLocation.inBounds(board)) {
        const tile = board.getTile(newLocation);

        if (tile.empty && tile.fertile) {
          return new ReproduceInstruction(
            newLocation,
            (currentCycle: number) => new Plant(currentCycle + 1),
            location
          );
        }
      }
    }
  }
}
