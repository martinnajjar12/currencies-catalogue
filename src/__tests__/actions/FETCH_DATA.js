import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import FETCH_DATA from '../../actions/FETCH_DATA';

const baseUrl = `https://api.nomics.com/v1/currencies/ticker?key=${process.env.REACT_APP_API_KEY}&per-page=25&interval=1d&convert=USD&sort=rank`;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('FETCH_DATA', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should return an object when fetching successfully', () => {
    moxios.stubOnce('GET', baseUrl, {
      status: 200,
      response: [{ name: 'test 1', rank: '1' }, { name: 'test 2', rank: '2' }],
    });

    const store = mockStore({ name: 'test 1', rank: '1' }, { name: 'test 2', rank: '2' });

    return store.dispatch(FETCH_DATA()).then(() => {
      expect(store.getActions()).toEqual([{
        type: 'FETCH DATA',
        payload: [{ name: 'test 1', rank: '1' }, { name: 'test 2', rank: '2' }],
      }]);
    });
  });
});
