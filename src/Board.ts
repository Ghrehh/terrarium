import Coordinate from 'Coordinate';
import Entity from 'entities/Entity';

export interface Tile {
  soilFertilized: boolean;
  entity: Entity | null;
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

    //this.tiles[0][0].entity = NewPlant(0);
    this.tiles[0][0].soilFertilized = false;

    //this.tiles[20][20].entity = NewHerbivore(0);
  }

  getTile({ x, y }: Coordinate): Tile | null {
    if (this.tiles[y] === undefined) return null;

    const tile = this.tiles[y][x];
    if (tile === undefined) return null;

    return tile;
  }
  tileEmptyAndFertile(location: Coordinate): boolean {
    const tile = this.getTile(location);
    return tile !== null && tile.entity === null && tile.soilFertilized;
  }
  tileEmpty(location: Coordinate): boolean {
    const tile = this.getTile(location);
    return tile !== null && tile.entity === null;
  }
}
