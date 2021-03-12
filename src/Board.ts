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

export default class Board {
  width = 30;
  height = 30;
  tiles: Tile[][] = [];

  constructor() {
    for (let x = 0; x < this.height; x++) {
      this.tiles[x] = [];
      for (let y = 0; y < this.width; y++) {
        this.tiles[x][y] = { soilFertilized: true, entity: null };
      }
    }

    this.tiles[0][0].entity = NewPlant(0);
    this.tiles[0][0].soilFertilized = false;

    this.tiles[20][20].entity = NewHerbivore(0);
  }

  getTile({ x, y }: { x: number; y: number }): Tile | null {
    if (this.tiles[y] === undefined) return null;

    const tile = this.tiles[y][x];
    if (tile === undefined) return null;

    return tile;
  }
  tileEmptyAndFertile(location: { x: number; y: number }): boolean {
    const tile = this.getTile(location);
    return tile !== null && tile.entity === null && tile.soilFertilized;
  }
  tileEmpty(location: { x: number; y: number }): boolean {
    const tile = this.getTile(location);
    return tile !== null && tile.entity === null;
  }
}
