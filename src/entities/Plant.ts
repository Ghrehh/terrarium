import { Board } from 'Board';
import Name from './Name';
import Coordinate, { adjacent } from 'Coordinate';
import Instruction, { Verb } from 'Instruction';

export interface Plant {
  born: number;
  lifespan: number;
  name: Name;
  tick(board: Board, location: Coordinate): Instruction[];
}

const NewPlant = (currentTime: number): Plant => {
  const proto = {
    born: currentTime,
    lifespan: 30,

    get name(): Name {
      return Name.plant;
    },

    tick(board: Board, location: Coordinate): Instruction[] {
      const { north, east, south, west } = adjacent(location);

      if (board.tileEmptyAndFertile(north)) {
        return [
          {
            entity: this.name,
            verb: Verb.reproduce,
            location: north
          }
        ];
      }

      if (board.tileEmptyAndFertile(east)) {
        return [
          {
            entity: this.name,
            verb: Verb.reproduce,
            location: east
          }
        ];
      }

      if (board.tileEmptyAndFertile(south)) {
        return [
          {
            entity: this.name,
            verb: Verb.reproduce,
            location: south
          }
        ];
      }

      if (board.tileEmptyAndFertile(west)) {
        return [
          {
            entity: this.name,
            verb: Verb.reproduce,
            location: west
          }
        ];
      }

      return [];
    }
  };

  return proto;
};

export default NewPlant;
