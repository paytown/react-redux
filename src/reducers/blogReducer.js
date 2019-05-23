import { ADD_POST, REMOVE_POST, UPDATE_POST } from '../actions/actionCreators';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return [
        ...state,
        action.payload
      ];
    case REMOVE_POST:
      return [ 
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1),
      ];
    case UPDATE_POST:
      return [
        ...state.slice(0, action.payload.id),

        {
          ...state[action.payload.id],
          body: action.payload.body
        },

        ...state.slice(action.payload.id + 1)
      ];
    default:
      return state;
  }
}
