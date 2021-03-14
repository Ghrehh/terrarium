export default class Coordinate {
  x;
  y;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  north(): Coordinate {
    return new Coordinate(this.x, this.y - 1);
  }
  northEast(): Coordinate {
    return new Coordinate(this.x + 1, this.y - 1);
  }
  east(): Coordinate {
    return new Coordinate(this.x + 1, this.y);
  }
  southEast(): Coordinate {
    return new Coordinate(this.x + 1, this.y + 1);
  }
  south(): Coordinate {
    return new Coordinate(this.x, this.y + 1);
  }
  southWest(): Coordinate {
    return new Coordinate(this.x - 1, this.y + 1);
  }
  west(): Coordinate {
    return new Coordinate(this.x - 1, this.y);
  }
  northWest(): Coordinate {
    return new Coordinate(this.x - 1, this.y - 1);
  }
  compassDirections(): (() => Coordinate)[] {
    return [
      () => this.north(),
      () => this.northEast(),
      () => this.east(),
      () => this.southEast(),
      () => this.south(),
      () => this.southWest(),
      () => this.west(),
      () => this.northWest()
    ];
  }
  inBounds({ height, width }: { height: number, width: number }): boolean {
    return (
      this.x >= 0 &&
      this.x < width &&
      this.y >= 0 &&
      this.y < height
    );
  }
}
