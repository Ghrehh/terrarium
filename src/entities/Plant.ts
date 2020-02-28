import BoardTile from "boardTile";

const proto = {
  born: 0,
  lifespan: 30,

  get name() {
    return "Plant";
  },

  tick(board: BoardTile[]) {}
};

const newPlant = () => Object.create(proto);

export default newPlant;
