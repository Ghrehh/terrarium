import Name from './Name';
import { Board } from 'Board';
import NewCoordinate, { Coordinate } from 'Coordinate';
import Instruction, { Verb } from 'Instruction';

interface Tick {
  board: { tileEmptyAndFertile(_: Coordinate): boolean };
  currentTick: number;
  location: Coordinate;
}

export interface Plant {
  name: Name;
  tick(_: Tick): Instruction[];
  reproduce(currentTick: number): Plant;
}

const NewPlant = (currentTick: number): Plant => {
  const born = currentTick;
  const lifespan = 120;
  const reproduceCooldown = 30;

  let lastReproduced = currentTick;

  const canReproduce = (currentTick: number): boolean => {
    return lastReproduced + reproduceCooldown < currentTick;
  }

  const proto = {
    get name(): Name {
      return Name.plant;
    },

    tick({ board, currentTick, location }: Tick): Instruction[] {
      const instructions: Instruction[] = [];
      const reproduceInstruction = (reproduceLocation: Coordinate) => ({
        sourceName: this.name,
        verb: Verb.reproduce,
        sourceLocation: location,
        executorLocation: location,
        targetLocation: reproduceLocation
      });

      if (canReproduce(currentTick)) {
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
    reproduce(currentTick: number): Plant {
      lastReproduced = currentTick;
      return NewPlant(currentTick);
    }
  };

  return proto;
};

export default NewPlant;
