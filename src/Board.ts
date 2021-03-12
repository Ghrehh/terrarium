import Coordinate from 'Coordinate';
import Entity from 'entities/Entity';

export interface Tile {
  soilFertilized: boolean;
  entity: Entity | null;
}

export default class Board {
  readonly width = 30;
  readonly height = 30;
  readonly currentCycle = 0;
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

  coordinateForEntity(entity: Entity): Coordinate {
    for (let rowIndex = 0; rowIndex < this.tiles.length; rowIndex++) {
      const tileRow = this.tiles[rowIndex];
      for (let tileIndex = 0; tileIndex < tileRow.length; tileIndex++) {
        const tile = tileRow[tileIndex];

        if (tile?.entity === entity) return new Coordinate(rowIndex, tileIndex);
      }
    }

    throw 'could not find entity';
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
