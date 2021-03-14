import Coordinate from 't/Coordinate';
import Entity, { newEntity } from 't/Entity';
import Instruction from 't/instructions/Instruction';

export class Tile {
  soilFertilized: boolean;
  entity: Entity | null;

  constructor(soilFertilized: boolean, entity: Entity | null) {
    this.soilFertilized = soilFertilized;
    this.entity = entity;
  }

  get empty() {
    return this.entity === null;
  }

  get fertile() {
    return this.soilFertilized;
  }
}

export default class Board {
  readonly width = 30;
  readonly height = 30;
  currentCycle = 0;

  tiles: Tile[][] = [];
  instructions: Instruction[][] = [];

  constructor() {
    for (let x = 0; x < this.height; x++) {
      this.tiles[x] = [];
      for (let y = 0; y < this.width; y++) {
        this.tiles[x][y] = new Tile(true, null);
      }
    }

    this.setTile(
      new Coordinate(0, 0),
      new Tile(false, newEntity(0))
    );

    //this.tiles[20][20].entity = NewHerbivore(0);
  }

  coordinateForEntity(entity: Entity): Coordinate {
    for (let rowIndex = 0; rowIndex < this.tiles.length; rowIndex++) {
      const tileRow = this.tiles[rowIndex];
      for (let tileIndex = 0; tileIndex < tileRow.length; tileIndex++) {
        const tile = tileRow[tileIndex];

        if (tile?.entity === entity) return new Coordinate(tileIndex, rowIndex);
      }
    }

    throw 'could not find entity';
  }

  get entities(): Entity[] {
    const tiles = this.tiles.flat();
    const entities = tiles.map((tile) => tile.entity);

    return entities.filter((entity): entity is Entity => entity !== null);
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

  next(): void {
    this.instructions[this.currentCycle] = [];
    this.entities.forEach((entity) => {
      const newInstructions = entity.generateInstructions(this);
      if (newInstructions) {
        newInstructions.forEach((instruction) => instruction.apply(this));
        this.instructions[this.currentCycle] = this.instructions[
          this.currentCycle
        ].concat(newInstructions);
      }
    });

    this.currentCycle++;
  }

  previous(): void {
    if (this.currentCycle < 1) throw new Error("can't undo");
    const instructions = this.instructions[this.currentCycle - 1];

    instructions.reverse().forEach((instruction) => instruction.revert(this));

    this.instructions[this.currentCycle - 1] = [];
    this.currentCycle--;
  }
}
