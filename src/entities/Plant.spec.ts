import NewPlant, { Plant } from './Plant';

describe('newPlant', () => {
  let plant: Plant = NewPlant(100);

  beforeEach(() => {
    plant = NewPlant(100);
  });

  it('name', () => {
    expect(plant.name).toBe('plant');
  });

  it('lifespan', () => {
    expect(plant.lifespan).toBe(30);
  });

  it('born', () => {
    expect(plant.born).toBe(100);
  });

  describe('tick()', () => {
    beforeEach(() => {
    });

  });
});
