import { all } from 'redux-saga/effects';

import user from './user';
import posts from './posts';


export default function* rootSaga() {
  yield all([
    user(),
    posts(),
  ])
}
