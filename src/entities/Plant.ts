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
  born: number;
  lifespan: number;
  lastReproduced: number;
  name: Name;
  tick(_: Tick): Instruction[];
  applyInstruction(board: Board, instruction: Instruction): Board;
}

const NewPlant = (currentTime: number): Plant => {
  const proto = {
    born: currentTime,
    lifespan: 60,
    lastReproduced: 0,

    get name(): Name {
      return Name.plant;
    },

    tick({ board, currentTick, location }: Tick): Instruction[] {
      const instructions: Instruction[] = [];
      const reproduceInstruction = (location: Coordinate) => ({
        entity: this.name,
        verb: Verb.reproduce,
        location
      });

      if (board.tileEmptyAndFertile(location.north())) {
        instructions.push(reproduceInstruction(location.north()));
      } else if (board.tileEmptyAndFertile(location.east())) {
        instructions.push(reproduceInstruction(location.east()));
      } else if (board.tileEmptyAndFertile(location.south())) {
        instructions.push(reproduceInstruction(location.south()));
      } else if (board.tileEmptyAndFertile(location.west())) {
        instructions.push(reproduceInstruction(location.west()));
      }

      if (currentTick - this.born > this.lifespan) {
        instructions.push({
          entity: this.name,
          verb: Verb.die,
          location
        });
      }

      return instructions;
    },
    applyInstruction(board: Board, instruction: Instruction): Board {
      return board;
    }
  };

  return proto;
};

export default NewPlant;
