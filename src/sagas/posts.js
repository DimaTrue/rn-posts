import { put, takeEvery, all } from 'redux-saga/effects';
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
		const parsedResult = yield JSON.parse(result);
		yield put({ type: types.GET_POSTS_SUCCESS, payload: parsedResult, });
	} catch (error) {
		yield put({ type: types.GET_POSTS_FAILURE, payload: error });
	}
}

export function* addPost({ payload }) {
	try {
		//	yield AsyncStorage.removeItem('postsData');
		const result = yield AsyncStorage.getItem('postsData');
		const parsedResult = yield JSON.parse(result);
		const totalPayload = yield parsedResult ? payload.concat(parsedResult) : payload;
		yield AsyncStorage.setItem('postsData', JSON.stringify(totalPayload));
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