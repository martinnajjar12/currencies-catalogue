import FILTER from '../../actions/FILTER';

describe('Redux actions', () => {
  describe('FILTER', () => {
    it('should return an object', () => {
      expect(FILTER('HELLO')).toEqual({ type: 'FILTER', payload: 'HELLO' });
    });

    it('should not return an array', () => {
      expect(FILTER('not an array')).not.toEqual(['FILTER', 'not an array']);
    });
  });
});
