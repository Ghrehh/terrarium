import { Game } from 'Game';
import Name from './Name';
import Coordinate, { adjacent } from 'Coordinate';
import Instruction, { Verb } from 'Instruction';

export interface Plant {
  born: number;
  lifespan: number;
  name: Name;
  tick(game: Game, location: Coordinate): Instruction[];
}

const NewPlant = (currentTime: number): Plant => {
  const proto = {
    born: currentTime,
    lifespan: 30,

    get name(): Name {
      return Name.plant;
    },

    tick(game: Game, location: Coordinate): Instruction[] {
      const { north, east, south, west } = adjacent(location);

      const instructions: Instruction[] = [];
      const reproduceInstruction = (location: Coordinate) => ({
        entity: this.name,
        verb: Verb.reproduce,
        location
      });

      if (game.board.tileEmptyAndFertile(north)) {
        instructions.push(reproduceInstruction(north));
      } else if (game.board.tileEmptyAndFertile(east)) {
        instructions.push(reproduceInstruction(east));
      } else if (game.board.tileEmptyAndFertile(south)) {
        instructions.push(reproduceInstruction(south));
      } else if (game.board.tileEmptyAndFertile(west)) {
        instructions.push(reproduceInstruction(west));
      }

      if (game.currentTick - this.born > this.lifespan) {
        instructions.push({
          entity: this.name,
          verb: Verb.die,
          location
        });
      }

      return instructions;
    }
  };

  return proto;
};

export default NewPlant;
