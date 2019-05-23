import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/commentActions';
import { REMOVE_POST } from '../actions/blogActions';

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
    case REMOVE_POST:
      return deletePostComments(state, action.payload);
    default:
      return state;
  }
}
