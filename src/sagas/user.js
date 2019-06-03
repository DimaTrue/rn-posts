import { put, takeEvery, all } from 'redux-saga/effects';
import * as types from '../action-types/user';
import { AsyncStorage } from 'react-native';

export function* watchGetUserData() {
	yield takeEvery(types.GET_USERDATA, getUserData);
}

export function* watchRemoveUserData() {
	yield takeEvery(types.REMOVE_USERDATA, removeUserData);
}

export function* watchSaveUserData() {
	yield takeEvery(types.SAVE_USERDATA, saveUserData);
}


export function* getUserData() {
	try {
		const result = yield AsyncStorage.getItem('userData');
		const parsedResult = yield JSON.parse(result);
		yield put({ type: types.GET_USERDATA_SUCCESS, payload: parsedResult, });
	} catch (error) {
		yield put({ type: types.GET_USERDATA_FAILURE, payload: error });
	}
}

export function* removeUserData() {
	try {
		yield AsyncStorage.removeItem('userData');
		yield put({ type: types.REMOVE_USERDATA_SUCCESS, });
	} catch (error) {
		yield put({ type: types.REMOVE_USERDATA_FAILURE, payload: error });
	}
}

export function* saveUserData({ payload }) {
	try {
		yield AsyncStorage.setItem('userData', JSON.stringify(payload));
		yield put({ type: types.SAVE_USERDATA_SUCCESS, payload: payload });
	} catch (error) {
		yield put({ type: types.SAVE_USERDATA_FAILURE, payload: error });
	}
}

export default function* user() {
	yield all([
		watchGetUserData(),
		watchRemoveUserData(),
		watchSaveUserData(),
	])
}