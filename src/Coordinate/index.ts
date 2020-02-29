export default interface Coordinate {
  x: number;
  y: number;
}

export const adjacent = (
  coordinate: Coordinate
): {
  north: Coordinate;
  northEast: Coordinate;
  east: Coordinate;
  southEast: Coordinate;
  south: Coordinate;
  southWest: Coordinate;
  west: Coordinate;
  northWest: Coordinate;
} => {
  const { x, y } = coordinate;

  return {
    north: { x, y: y - 1 },
    northEast: { x: x + 1, y: y - 1 },
    east: { x: x + 1, y },
    southEast: { x: x + 1, y: y + 1 },
    south: { x, y: y + 1 },
    southWest: { x: x - 1, y: y + 1 },
    west: { x: x - 1, y },
    northWest: { x: x - 1, y: y - 1 }
  };
};
