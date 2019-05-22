import reducer from './allReducers';
import { ADD_BEANS } from '../actions/actionCreators';

describe('reducers', () => {
  it('tests the beans reducer', () => {
    const initialState = {
      beans: null,
      fruit: 'ham',
      drink: null
    };

    const newState = reducer(initialState, { 
      type: ADD_BEANS,
      payload: 'black'
    });

    expect(newState).toEqual({
      beans: 'black',
      fruit: 'ham',
      drink: null
    });
  });
});
