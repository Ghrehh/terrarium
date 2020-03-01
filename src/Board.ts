import { Game } from 'Game';
import Instruction from 'Instruction';
import Coordinate from 'Coordinate';
import NewPlant from 'entities/Plant';

export interface Tile {
  soilFertilized: boolean;
  entity: Entity | null;
}

interface Entity {
  name: string;
  tick(game: Game, location: Coordinate): Instruction[];
}

export interface Board {
  width: number;
  height: number;
  tiles: Tile[][];
  getTile(location: Coordinate): Tile | null;
  tileEmptyAndFertile(location: Coordinate): boolean;
}

const NewBoard = (): Board => {
  const width = 30;
  const height = 30;
  const board: Tile[][] = [];

  for (let x = 0; x < height; x++) {
    board[x] = [];
    for (let y = 0; y < width; y++) {
      board[x][y] = { soilFertilized: true, entity: null };
    }
  }

  board[0][0].entity = NewPlant(0);
  board[0][0].soilFertilized = false;

  return {
    width,
    height,
    getTile({ x, y }: Coordinate): Tile | null {
      if (board[y] === undefined) return null;

      const tile = board[y][x];
      if (tile === undefined) return null;

      return tile;
    },
    tileEmptyAndFertile(location: Coordinate): boolean {
      const tile = this.getTile(location);
      return tile !== null && tile.entity === null && tile.soilFertilized;
    },
    tiles: board
  };
};

export default NewBoard;
