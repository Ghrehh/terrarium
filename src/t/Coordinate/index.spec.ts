import Coordinate from './';

describe('Coordinate', () => {
  const location = new Coordinate(10, 10);

  it('has the correct x and y values', () => {
    expect(location).toMatchObject({ x: 10, y: 10 });
  });

  describe('helper methods', () => {
    it('north', () => {
      expect(location.north()).toMatchObject({ x: 10, y: 9 });
    });

    it('northEast', () => {
      expect(location.northEast()).toMatchObject({ x: 11, y: 9 });
    });

    it('east', () => {
      expect(location.east()).toMatchObject({ x: 11, y: 10 });
    });

    it('southEast', () => {
      expect(location.southEast()).toMatchObject({ x: 11, y: 11 });
    });

    it('south', () => {
      expect(location.south()).toMatchObject({ x: 10, y: 11 });
    });

    it('southWest', () => {
      expect(location.southWest()).toMatchObject({ x: 9, y: 11 });
    });

    it('west', () => {
      expect(location.west()).toMatchObject({ x: 9, y: 10 });
    });

    it('northWest', () => {
      expect(location.northWest()).toMatchObject({ x: 9, y: 9 });
    });

    it('surrounding', () => {
      const surrounding = location.surrounding();
      expect(surrounding[0]()).toMatchObject(location.north());
      expect(surrounding[1]()).toMatchObject(location.northEast());
      expect(surrounding[2]()).toMatchObject(location.east());
      expect(surrounding[3]()).toMatchObject(location.southEast());
      expect(surrounding[4]()).toMatchObject(location.south());
      expect(surrounding[5]()).toMatchObject(location.southWest());
      expect(surrounding[6]()).toMatchObject(location.west());
      expect(surrounding[7]()).toMatchObject(location.northWest());
    });

    it('inBounds', () => {
      expect(location.inBounds({ height: 5, width: 5 })).toBe(false)
      expect(location.inBounds({ height: 12, width: 5 })).toBe(false)
      expect(location.inBounds({ height: 11, width: 11 })).toBe(true)
    });
  });
});
