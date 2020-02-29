import BoardTile from 'BoardTile';
import Coordinate from 'Coordinate';
import Instruction, { Verb } from 'Instruction';

const proto = {
  born: 0,
  lifespan: 30,

  get name() {
    return 'Plant';
  },

  tick(board: BoardTile[][], location: Coordinate): Instruction[] {

    return [
      {
        entity: 'Plant',
        verb: Verb.Reproduce,
        location: { x: 1, y: 1 }
      }
    ];
  }
};

const newPlant = () => Object.create(proto);

export default newPlant;
