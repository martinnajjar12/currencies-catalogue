import rootReducer from '../../reducers/rootReducer';

describe('rootReducer', () => {
  describe('Undefined case', () => {
    it('should return an empty array when nothing is passed to it', () => {
      expect(rootReducer(undefined, {})).toEqual([]);
    });
  });

  describe('FETCH DATA case', () => {
    it('should return an array containing items inside the action payload', () => {
      expect(rootReducer([], { type: 'FETCH DATA', payload: ['first', 'second'] })).toEqual(['first', 'second']);
    });
  });

  describe('FILTER case', () => {
    const items = [
      { name: 'test 1' },
      { name: 'test 2' },
      { name: 'test 3' },
    ];

    it('should return an array contains a single item that its name equals the name of the item iside the action payload', () => {
      expect(rootReducer(items, { type: 'FILTER', payload: 'test 2' })).toEqual([{ name: 'test 2' }]);
    });
  });
});
