import { adjacent } from './';

describe('adjacent', () => {
  it('generates the correct coordinates', () => {
    expect(adjacent({ x: 10, y: 10 })).toStrictEqual({
      north: { x: 10, y: 9 },
      northEast: { x: 11, y: 9 },
      east: { x: 11, y: 10 },
      southEast: { x: 11, y: 11 },
      south: { x: 10, y: 11 },
      southWest: { x: 9, y: 11 },
      west: { x: 9, y: 10 },
      northWest: { x: 9, y: 9 }
    });
  });
});
