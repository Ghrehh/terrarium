import BoardTile from 'BoardTile';
import Instruction from 'Instruction';

const proto = {
  born: 0,
  lifespan: 30,

  get name() {
    return 'Plant';
  },

  tick(board: BoardTile[]): Instruction[] {
    return {
      entity: 'foo',
      verb: 'foo',
      target: 'foo',
      location: { x: 1, y: 1 }
    };
  }
};

const newPlant = () => Object.create(proto);

export default newPlant;
