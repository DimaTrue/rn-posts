import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './user';
import posts from './posts';

export default combineReducers({
  user: user,
  form: formReducer,
  posts: posts,
});