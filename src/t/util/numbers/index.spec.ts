import * as numbers from './';

describe('numbers', () => {
  describe('isPositiveInteger', () => {
    it('returns true or false based on if the provided number is positive or not', () => {
      expect(numbers.isPositiveInteger(0)).toBe(true);
      expect(numbers.isPositiveInteger(1)).toBe(true);
      expect(numbers.isPositiveInteger(3000)).toBe(true);

      expect(numbers.isPositiveInteger(-1)).toBe(false);
      expect(numbers.isPositiveInteger(-1000)).toBe(false);
      expect(numbers.isPositiveInteger(NaN)).toBe(false);
      expect(numbers.isPositiveInteger(Infinity)).toBe(false);
      expect(numbers.isPositiveInteger(0.3)).toBe(false);
    });
  });
});

