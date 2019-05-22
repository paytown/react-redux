import { addDrink, ADD_DRINK } from './actionCreators';

describe('action creator tests', () => {
  it('adds a drink', () => {
    expect(addDrink('soda')).toEqual({
      type: ADD_DRINK,
      payload: 'soda'
    });
  });
});
