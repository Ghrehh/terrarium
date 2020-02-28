import newPlant from './Plant';

describe('newPlant', () => {
  it('createsANewPlant', () => {
    expect(newPlant().name).toBe('Plant');
  });
});
