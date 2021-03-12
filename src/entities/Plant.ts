import {
  Instruction,
  ReproduceInstruction,
  DieInstruction
} from 'instructions';
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

    const reproduceInstruction = this.getReproduceInstruction(board);
    if (reproduceInstruction) instructions.push(reproduceInstruction);

    return instructions;
  }

  private canReproduce(currentCycle: number): boolean {
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
            (currentCycle: number) => new Plant(currentCycle)
          );
        }
      }
    }
  }
}
