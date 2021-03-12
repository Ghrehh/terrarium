import Name from './Name';
import { Board } from 'Board';
import Coordinate from 'Coordinate';
import Instruction, { Verb } from 'Instruction';

interface Tick {
  board: { tileEmpty(_: Coordinate): boolean };
  currentTick: number;
  location: Coordinate;
}

export interface Herbivore {
  name: Name;
  tick(_: Tick): Instruction[];
  reproduce(currentTick: number): Herbivore;
}

const NewHerbivore = (currentTick: number): Herbivore => {
  const born = currentTick;
  const lifespan = 120;
  const reproduceCooldown = 30;

  let lastReproduced = currentTick;

  const canReproduce = (currentTick: number): boolean => {
    return lastReproduced + reproduceCooldown < currentTick;
  };

  const proto = {
    get name(): Name {
      return Name.herbivore;
    },

    tick({ board, currentTick, location }: Tick): Instruction[] {
      const instructions: Instruction[] = [];
      const moveInstruction = (moveLocation: Coordinate) => ({
        sourceName: this.name,
        verb: Verb.move,
        sourceLocation: location,
        executorLocation: location,
        targetLocation: moveLocation
      });

      if (board.tileEmpty(location.north())) {
        instructions.push(moveInstruction(location.north()));
      } else if (board.tileEmpty(location.east())) {
        instructions.push(moveInstruction(location.east()));
      } else if (board.tileEmpty(location.south())) {
        instructions.push(moveInstruction(location.south()));
      } else if (board.tileEmpty(location.west())) {
        instructions.push(moveInstruction(location.west()));
      }

      if (currentTick - born > lifespan) {
        instructions.push({
          sourceName: this.name,
          verb: Verb.die,
          sourceLocation: location,
          executorLocation: location,
          targetLocation: location
        });
      }

      return instructions;
    },
    reproduce(currentTick: number): Herbivore {
      lastReproduced = currentTick;
      return NewHerbivore(currentTick);
    }
  };

  return proto;
};

export default NewHerbivore;
