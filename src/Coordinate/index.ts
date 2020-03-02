export interface Coordinate {
  x: number;
  y: number;
  north(): Coordinate;
  northEast(): Coordinate;
  east(): Coordinate;
  southEast(): Coordinate;
  south(): Coordinate;
  southWest(): Coordinate;
  west(): Coordinate;
  northWest(): Coordinate;
}

const NewCoordinate = ({ x, y }: { x: number; y: number }): Coordinate => {
  return {
    x,
    y,
    north(): Coordinate {
      return NewCoordinate({ x: this.x, y: this.y - 1 });
    },
    northEast(): Coordinate {
      return NewCoordinate({ x: this.x + 1, y: this.y - 1 });
    },
    east(): Coordinate {
      return NewCoordinate({ x: this.x + 1, y: this.y });
    },
    southEast(): Coordinate {
      return NewCoordinate({ x: this.x + 1, y: this.y + 1 });
    },
    south(): Coordinate {
      return NewCoordinate({ x: this.x, y: this.y + 1 });
    },
    southWest(): Coordinate {
      return NewCoordinate({ x: this.x - 1, y: this.y + 1 });
    },
    west(): Coordinate {
      return NewCoordinate({ x: this.x - 1, y: this.y });
    },
    northWest(): Coordinate {
      return NewCoordinate({ x: this.x - 1, y: this.y - 1 });
    }
  };
};

export default NewCoordinate;
