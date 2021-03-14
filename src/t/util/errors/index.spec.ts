import * as errors from './';

describe('errors', () => {
  describe('raiseIf', () => {
    it('throws an error if the predicate it true, optionally taking a message', () => {
      expect(() => errors.raiseIf(true)).toThrow(Error)
      expect(() => errors.raiseIf(true)).toThrow('error')
      expect(() => errors.raiseIf(true, 'message')).toThrow(Error)
      expect(() => errors.raiseIf(true, 'message')).toThrow('message')
      expect(() => errors.raiseIf(false)).not.toThrow()
    });
  });

  describe('raiseIfNot', () => {
    it('throws an error if the predicate it false, optionally taking a message', () => {
      expect(() => errors.raiseIfNot(false)).toThrow(Error)
      expect(() => errors.raiseIfNot(false)).toThrow('error')
      expect(() => errors.raiseIfNot(false, 'message')).toThrow(Error)
      expect(() => errors.raiseIfNot(false, 'message')).toThrow('message')
      expect(() => errors.raiseIfNot(true)).not.toThrow()
    });
  });
});

