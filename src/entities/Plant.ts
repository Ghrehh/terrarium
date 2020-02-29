import BoardTile from 'BoardTile';
import Name from './Name';
import Coordinate, { adjacent } from 'Coordinate';
import Instruction, { Verb } from 'Instruction';

const viableTile = (board: BoardTile[][], coordinate: Coordinate): boolean => {
  if (board[coordinate.y] === undefined) return false;

  const tile = board[coordinate.y][coordinate.x];
  if (tile === undefined) return false;

  return tile.entity === null && tile.soilFertilized;
};

const proto = {
  born: 0,
  lifespan: 30,

  get name(): Name {
    return Name.plant;
  },

  tick(board: BoardTile[][], location: Coordinate): Instruction[] {
    const { north, east, south, west } = adjacent(location);

    board = [board[0]];

    if (viableTile(board, north)) {
      return [
        {
          entity: this.name,
          verb: Verb.reproduce,
          location: north
        }
      ];
    }

    if (viableTile(board, east)) {
      return [
        {
          entity: this.name,
          verb: Verb.reproduce,
          location: east
        }
      ];
    }

    if (viableTile(board, south)) {
      return [
        {
          entity: this.name,
          verb: Verb.reproduce,
          location: south
        }
      ];
    }

    /*if (viableTile(board, west)) {*/
    return [
      {
        entity: this.name,
        verb: Verb.reproduce,
        location: west
      }
    ];
  }
};

const newPlant = () => Object.create(proto);

export default newPlant;
