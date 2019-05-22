import { ADD_BEANS, ADD_FRUIT, ADD_DRINK, REMOVE_BEANS, REMOVE_FRUIT, REMOVE_DRINK, EMPTY_BOX, FILL_EM_ALL } from '../actions/actionCreators';

const initialState = {
  beans: null,
  fruit: null,
  drink: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_BEANS:
      return { ...state, beans: action.payload };
    case ADD_FRUIT:
      return { ...state, fruit: action.payload };
    case ADD_DRINK:
      return { ...state, drink: action.payload };
    case REMOVE_BEANS:
      return { ...state, beans: null };
    case REMOVE_FRUIT:
      return { ...state, fruit: null };
    case REMOVE_DRINK:
      return { ...state, drink: null };
    case EMPTY_BOX:
      return { ...state, beans: null, fruit: null, drink: null };
    case FILL_EM_ALL:
      return { ...state, beans: action.payload.beans, fruit: action.payload.fruit, drink: action.payload.drink };
    default:
      return state;
  }
}
