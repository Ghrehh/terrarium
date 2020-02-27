import boardTile from 'boardTile';

const proto = {
  born: 0,
  lifespan: 30,

  get name() {
    return 'Plant';
  },

  kill() {
  },

  tick(board: boardTile[]) {
  }
};

const newPlant = () => Object.create(proto)

export default newPlant;
