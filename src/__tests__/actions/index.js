import { FILTER, LOADING } from '../../actions/index';

describe('Redux actions', () => {
  describe('LOADING', () => {
    it('should return an object', () => {
      expect(LOADING('for test')).toEqual({ type: 'LOADING', payload: 'for test' });
    });

    it('should not return an array', () => {
      expect(LOADING('not an array')).not.toEqual(['LOADING', 'not an array']);
    });
  });

  describe('FILTER', () => {
    it('should return an object', () => {
      expect(FILTER('HELLO')).toEqual({ type: 'FILTER', payload: 'HELLO' });
    });

    it('should not return an array', () => {
      expect(FILTER('not an array')).not.toEqual(['FILTER', 'not an array']);
    });
  });
});
