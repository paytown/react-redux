import { combineReducers } from 'redux';
import blog from './blogReducer';
import comment from './commentReducer';

export default combineReducers({
  blog,
  comment
});
