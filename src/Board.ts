import { Game } from 'Game';
import Instruction from 'Instruction';
import Coordinate from 'Coordinate';
import NewPlant from 'entities/Plant';
import NewHerbivore from 'entities/Herbivore';

interface Tick {
  board: Board;
  currentTick: number;
  location: Coordinate;
}

export interface Tile {
  soilFertilized: boolean;
  entity: Entity | null;
}

interface Entity {
  name: string;
  tick(_: Tick): Instruction[];
  reproduce(currentTick: number): Entity;
}

export interface Board {
  width: number;
  height: number;
  tiles: Tile[][];
  getTile(location: { x: number; y: number }): Tile | null;
  tileEmptyAndFertile(location: { x: number; y: number }): boolean;
  tileEmpty(location: { x: number; y: number }): boolean;
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

  board[20][20].entity = NewHerbivore(0);

  return {
    width,
    height,
    getTile({ x, y }: { x: number; y: number }): Tile | null {
      if (board[y] === undefined) return null;

      const tile = board[y][x];
      if (tile === undefined) return null;

      return tile;
    },
    tileEmptyAndFertile(location: { x: number; y: number }): boolean {
      const tile = this.getTile(location);
      return tile !== null && tile.entity === null && tile.soilFertilized;
    },
    tileEmpty(location: { x: number; y: number }): boolean {
      const tile = this.getTile(location);
      return tile !== null && tile.entity === null;
    },
    tiles: board
  };
};

export default NewBoard;
