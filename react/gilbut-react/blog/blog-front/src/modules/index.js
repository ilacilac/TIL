import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';
import loading from './loading';
import write, { writeSaga } from './write';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  post,
  posts,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga()]);
}

export default rootReducer;
