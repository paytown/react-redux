import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/commentActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_COMMENT:
      return [
        ...state,
        action.payload
      ];
    case REMOVE_COMMENT:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    default:
      return state;
  }
}
