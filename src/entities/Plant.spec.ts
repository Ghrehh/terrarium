import { Game } from 'Game';
import NewPlant, { Plant } from './Plant';
import NewCoordinate, { Coordinate } from 'Coordinate';
import Name from './Name';
import { Verb } from 'Instruction';

describe('newPlant', () => {
  let plant: Plant = NewPlant(0);

  beforeEach(() => {
    plant = NewPlant(0);
  });

  it('name', () => {
    expect(plant.name).toBe('plant');
  });

  it('lifespan', () => {
    expect(plant.lifespan).toBe(60);
  });

  it('born', () => {
    expect(plant.born).toBe(0);
  });

  describe('tick', () => {
    let currentTick = 0;
    const northCoordinate = NewCoordinate({ x: 0, y: 0 });
    const eastCoordinate = NewCoordinate({ x: 0, y: 0 });
    const southCoordinate = NewCoordinate({ x: 0, y: 0 });
    const westCoordinate = NewCoordinate({ x: 0, y: 0 });

    let validTile: Coordinate;

    const board = {
      tileEmptyAndFertile(location: Coordinate): boolean {
        return location === validTile;
      }
    };

    const location = {
      ...NewCoordinate({ x: 0, y: 0 }),
      x: 0,
      y: 0,
      north(): Coordinate { return northCoordinate },
      east(): Coordinate { return eastCoordinate },
      south(): Coordinate { return southCoordinate },
      west(): Coordinate { return westCoordinate },
    }

    describe('valid north tile', () => {
      beforeEach(() => {
        validTile = northCoordinate;
      });

      it('returns the correct instruction', () => {
        expect(plant.tick({ board, location, currentTick }).length).toBe(1);
        expect(plant.tick({ board, location, currentTick })[0].location).toBe(northCoordinate);
        expect(plant.tick({ board, location, currentTick })[0].verb).toBe(Verb.reproduce);
        expect(plant.tick({ board, location, currentTick })[0].entity).toBe(Name.plant);
      });
    });

    describe('valid east tile', () => {
      beforeEach(() => {
        validTile = eastCoordinate;
      });

      it('returns the correct instruction', () => {
        expect(plant.tick({ board, location, currentTick }).length).toBe(1);
        expect(plant.tick({ board, location, currentTick })[0].location).toBe(eastCoordinate);
        expect(plant.tick({ board, location, currentTick })[0].verb).toBe(Verb.reproduce);
        expect(plant.tick({ board, location, currentTick })[0].entity).toBe(Name.plant);
      });
    });

    describe('valid south tile', () => {
      beforeEach(() => {
        validTile = southCoordinate;
      });

      it('returns the correct instruction', () => {
        expect(plant.tick({ board, location, currentTick }).length).toBe(1);
        expect(plant.tick({ board, location, currentTick })[0].location).toBe(southCoordinate);
        expect(plant.tick({ board, location, currentTick })[0].verb).toBe(Verb.reproduce);
        expect(plant.tick({ board, location, currentTick })[0].entity).toBe(Name.plant);
      });
    });

    describe('valid west tile', () => {
      beforeEach(() => {
        validTile = westCoordinate;
      });

      it('returns the correct instruction', () => {
        expect(plant.tick({ board, location, currentTick }).length).toBe(1);
        expect(plant.tick({ board, location, currentTick })[0].location).toBe(westCoordinate);
        expect(plant.tick({ board, location, currentTick })[0].verb).toBe(Verb.reproduce);
        expect(plant.tick({ board, location, currentTick })[0].entity).toBe(Name.plant);
      });
    });

    describe('no valid tile', () => {
      beforeEach(() => {
        // Set to random coordinate to make it fail
        validTile = NewCoordinate({ x: 0, y: 0 });
      });

      it('returns the correct instruction', () => {
        expect(plant.tick({ board, location, currentTick }).length).toBe(0);
      });
    });

    describe('death', () => {
      beforeEach(() => {
        validTile = NewCoordinate({ x: 0, y: 0 });
        currentTick = 61;
      });

      it('returns the correct instruction', () => {
        expect(plant.tick({ board, location, currentTick }).length).toBe(1);
        expect(plant.tick({ board, location, currentTick })[0].location).toBe(location);
        expect(plant.tick({ board, location, currentTick })[0].verb).toBe(Verb.die);
        expect(plant.tick({ board, location, currentTick })[0].entity).toBe(Name.plant);
      });
    });
  });
});
