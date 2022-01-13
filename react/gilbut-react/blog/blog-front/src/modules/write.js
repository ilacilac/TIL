import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';
const [WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE] =
  createRequestActionTypes('write/WRITE_POST');
const [UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE] =
  createRequestActionTypes('write/UPDATE_POST');
const SET_ORIGINAL_POST = 'write/SET_ORIGINAL_POST';

export const initialize = createAction(INITIALIZE);
export const setOriginalPost = createAction(SET_ORIGINAL_POST, (post) => post);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const updatePost = createAction(
  UPDATE_POST,
  ({ id, title, body, tags }) => ({
    id,
    title,
    body,
    tags,
  }),
);

// 1. dispatch({ type: WRITE_POST, payload: { title, body, tags }})
export const writePost = createAction(WRITE_POST, ({ title, body, tags }) => ({
  title,
  body,
  tags,
}));

// 2. execute
// => saga reducer
// => return
/*
 const writePostSaga = function* (action) {
      yield put(startLoading(type));
      try {
        const response = yield call(request, action.payload);
        yield put({
          type: SUCCESS,
          payload: response.data,
        });
      } catch (e) {
        yield put({
          type: FAILURE,
          payload: e,
          error: true,
        });
      }
      yield put(finishLoading(type));
    };
  }
*/
const updatePostSaga = createRequestSaga(UPDATE_POST, postsAPI.updatePost);
const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);

// 3. WRITE_POST => execute writePostSaga
export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
  yield takeLatest(UPDATE_POST, updatePostSaga);
}

const initialState = {
  title: '',
  body: '',
  tags: [],
  post: null,
  postError: null,
  originalPostId: null,
};

const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [SET_ORIGINAL_POST]: (state, { payload: post }) => ({
      ...state,
      title: post.title,
      body: post.body,
      tags: post.tags,
      originalPostId: post._id,
    }),
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_POST]: (state) => ({
      ...state,
      post: null,
      postError: null,
    }),
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
    [UPDATE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [UPDATE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
  },
  initialState,
);

export default write;
