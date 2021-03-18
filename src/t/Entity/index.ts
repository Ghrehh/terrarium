import { Instruction, ReproduceInstruction } from 't/instructions';
import Board from 't/Board';
import Coordinate from 't/Coordinate';
import * as attributes from 't/Entity/attributes';

interface possibleAttributes {
  senescence: attributes.Senescence;
  reproduction: attributes.Reproduction;
}

export default class Entity {
  location: Coordinate;
  attributes: possibleAttributes;

  constructor({ attributes, location }: { attributes: possibleAttributes, location: Coordinate }) {
    this.attributes = attributes;
    this.location = location;
  }

  generateInstructions(board: Board): Instruction[] {
    let instructions: Instruction[] = [];
    const location = board.coordinateForEntity(this);

    Object.values(this.attributes).forEach((attribute) => {
      // there is no typing here and fuck know's why
      if (!(attribute instanceof attributes.Attribute)) {
        throw new Error('bad attribute');
      }
      instructions = instructions.concat(attribute.makeInstructions(location, board))
    });

    return instructions;
  }
}

export const newEntity = (currentCycle: number): Entity => {
  return new Entity({
    senescence: new attributes.Senescence({
      investment: 1,
      born: currentCycle
    }),
    reproduction: new attributes.Reproduction({
      investment: 1,
      born: currentCycle
    })
  });
};
