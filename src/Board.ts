import Coordinate from 'Coordinate';
import Plant from 'entities/Plant';
import Entity from 'entities/Entity';
import Instruction from 'instructions/Instruction';

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

    this.setTile(
      new Coordinate(0, 0),
      {
        entity: new Plant(this.currentCycle),
        soilFertilized: false
      }
    )

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

  forEach(callback: (tile: Tile, rowEnd?: boolean, index?: number) => void): void {
    this.tiles.forEach((row, y) => {
      row.forEach((tile, x) => {
        callback(tile, x === row.length - 1, x * y);
      });
    });
  }

  getTile({ x, y }: Coordinate): Tile {
    if (this.tiles[y] === undefined) throw 'y index out of range';

    const tile = this.tiles[y][x];
    if (tile === undefined) throw 'x out of range';

    return tile;
  }

  setTile({ x, y }: Coordinate, newTile: Tile): void {
    if (this.tiles[y] === undefined) throw 'y index out of range';

    const tile = this.tiles[y][x];
    if (tile === undefined) throw 'x out of range';
    if (tile.entity && newTile.entity) throw 'attempting to overwrite entity';
    this.tiles[y][x] = newTile;
  }

  tileEmptyAndFertile(location: Coordinate): boolean {
    const tile = this.getTile(location);
    return tile !== null && tile.entity === null && tile.soilFertilized;
  }

  tileEmpty(location: Coordinate): boolean {
    const tile = this.getTile(location);
    return tile !== null && tile.entity === null;
  }

  process(): void {
    const instructions: Instruction[] = [];
  }
}
