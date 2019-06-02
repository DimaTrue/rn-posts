import { call, put, takeEvery, all } from 'redux-saga/effects';
import * as types from '../action-types/user';
import { AsyncStorage } from 'react-native';

export function* watchGetToken() {
	yield takeEvery(types.GET_TOKEN, getToken);
}

export function* watchremoveToken() {
	yield takeEvery(types.REMOVE_TOKEN, removeToken);
}

export function* watchsaveToken() {
	yield takeEvery(types.SAVE_TOKEN, saveToken);
}


export function* getToken() {
	try {
		const result = yield AsyncStorage.getItem('userToken');
		yield put({ type: types.GET_TOKEN_SUCCESS, payload: result, });
	} catch (error) {
		yield put({ type: types.GET_TOKEN_FAILURE, payload: error });
	}
}

export function* removeToken() {
	try {
		yield AsyncStorage.removeItem('userToken');
		yield put({ type: types.REMOVE_TOKEN_SUCCESS, });
	} catch (error) {
		yield put({ type: types.REMOVE_TOKEN_FAILURE, payload: error });
	}
}

export function* saveToken({ payload }) {
	try {
		yield AsyncStorage.setItem('userToken', 'payload');
		yield put({ type: types.SAVE_TOKEN_SUCCESS, payload: payload });
	} catch (error) {
		yield put({ type: types.SAVE_TOKEN_FAILURE, payload: error });
	}
}

export default function* user() {
	yield all([
		watchGetToken(),
		watchremoveToken(),
		watchsaveToken(),
	])
}