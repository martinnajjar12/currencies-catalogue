import FETCH_DATA from '../../actions/FETCH_DATA';

jest.mock('../../actions/FETCH_DATA');

describe('FETCH_DATA', () => {
  it('should return an object', () => {
    expect(FETCH_DATA()).toReturn(typeof Function);
  });
});
