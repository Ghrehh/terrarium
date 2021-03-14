import Board from 't/Board';
import Coordinate from 't/Coordinate';
import { Instruction } from 't/instructions';
import Attribute from 't/Entity/attributes/Attribute';

type OneToTen = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

interface Properties {
  investment: OneToTen;
  born: number;
}

export default class Senescence extends Attribute implements Properties {
  readonly investment: OneToTen;
  readonly born: number;

  constructor(properties: Properties) {
    super();
    this.investment = properties.investment;
    this.born = properties.born;
  }

  makeInstructions(ownLocation: Coordinate, board: Board): Instruction[] {
    return [];
  }

  useEnergy(): number {
    return 10;
  }
}
