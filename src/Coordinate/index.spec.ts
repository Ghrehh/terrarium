import NewCoordinate from './';

describe('Coordinate', () => {
  const location = NewCoordinate({ x: 10, y: 10 });

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
  });
});
