import { call, put, takeEvery, all } from 'redux-saga/effects';
import * as types from '../action-types/posts';
import { AsyncStorage } from 'react-native';

export function* watchGetPosts() {
	yield takeEvery(types.GET_POSTS, getPosts);
}

export function* watchAddPost() {
	yield takeEvery(types.ADD_POST, addPost);
}

export function* getPosts() {
	try {
		const result = yield AsyncStorage.getItem('postsData');
		yield put({ type: types.GET_POSTS_SUCCESS, payload: result, });
	} catch (error) {
		yield put({ type: types.GET_POSTS_FAILURE, payload: error });
	}
}

export function* addPost({ payload }) {
	try {
		const result = yield AsyncStorage.getItem('postsData');
		yield AsyncStorage.setItem('postsData', `${payload}`);
		yield put({ type: types.ADD_POST_SUCCESS, payload: payload });
	} catch (error) {
		yield put({ type: types.ADD_POST_FAILURE, payload: error });
	}
}

export default function* posts() {
	yield all([
		watchGetPosts(),
		watchAddPost(),
	])
}