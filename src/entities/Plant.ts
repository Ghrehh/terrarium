import board from 'board';

const proto = {
  born: 0,
  lifespan: 30,

  get name() {
    return 'Plant';
  },

  kill() {
  },

  tick(board: board) {
  }
};

const newPlant = () => Object.create(proto)

export default newPlant;
