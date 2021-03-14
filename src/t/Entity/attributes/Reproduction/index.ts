import Board from 't/Board';
import Coordinate from 't/Coordinate';
import { Instruction, ReproduceInstruction } from 't/instructions';
import Attribute from 't/Entity/attributes/Attribute';
import { newEntity } from 't/Entity';

type OneToTen = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

interface Properties {
  investment: OneToTen;
  born: number;
}

export default class Reproduction extends Attribute implements Properties {
  readonly investment: OneToTen;
  readonly born: number;
  readonly timeUntilAdult = 15;
  readonly reproduceCooldown = 32;

  constructor(properties: Properties) {
    super();
    this.investment = properties.investment;
    this.born = properties.born;
  }

  makeInstructions(ownLocation: Coordinate, board: Board): Instruction[] {
    if (this.canReproduce(board.currentCycle)) {
      for (const locationFunction of ownLocation.surrounding()) {
        const newLocation = locationFunction();

        if (newLocation.inBounds(board)) {
          const tile = board.getTile(newLocation);

          if (tile.empty && tile.fertile) {
            return [new ReproduceInstruction(
              newLocation,
              (currentCycle: number) => {
                return newEntity(currentCycle);
              },
              ownLocation
            )];
          }
        }
      }
    }
    return [];
  }

  useEnergy(): number {
    return 10;
  }

  private canReproduce(currentCycle: number): boolean {
    if (currentCycle - this.born === 0) return false;
    return (currentCycle - this.born) % this.reproduceCooldown === 0;
  }
}
