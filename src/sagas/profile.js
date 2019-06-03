import { put, takeEvery, all } from 'redux-saga/effects';
import * as types from '../action-types/profile';
import { AsyncStorage } from 'react-native';

export function* watchGetProfileData() {
  yield takeEvery(types.GET_PROFILEDATA, getProfileData);
}

export function* watchRemoveProfileData() {
  yield takeEvery(types.REMOVE_PROFILEDATA, removeProfileData);
}

export function* watchSaveProfileData() {
  yield takeEvery(types.SAVE_PROFILEDATA, saveProfileData);
}

export function* watchGetAvatar() {
  yield takeEvery(types.GET_AVATAR, getAvatar);
}

export function* watchRemoveAvatar() {
  yield takeEvery(types.REMOVE_AVATAR, removeAvatar);
}

export function* watchSaveAvatar() {
  yield takeEvery(types.SAVE_AVATAR, saveAvatar);
}

export function* getProfileData() {
  try {
    const result = yield AsyncStorage.getItem('profileData');
    const parsedResult = yield JSON.parse(result);
    yield put({ type: types.GET_PROFILEDATA_SUCCESS, payload: parsedResult, });
  } catch (error) {
    yield put({ type: types.GET_PROFILEDATA_FAILURE, payload: error });
  }
}

export function* removeProfileData() {
  try {
    yield AsyncStorage.removeItem('profileData');
    yield put({ type: types.REMOVE_PROFILEDATA_SUCCESS, });
  } catch (error) {
    yield put({ type: types.REMOVE_PROFILEDATA_FAILURE, payload: error });
  }
}

export function* saveProfileData({ payload }) {
  try {
    yield AsyncStorage.setItem('profileData', JSON.stringify(payload));
    yield put({ type: types.SAVE_PROFILEDATA_SUCCESS, payload: payload });
  } catch (error) {
    yield put({ type: types.SAVE_PROFILEDATA_FAILURE, payload: error });
  }
}

export function* getAvatar() {
  try {
    const result = yield AsyncStorage.getItem('avatar');
    const parsedResult = yield JSON.parse(result);
    yield put({ type: types.GET_AVATAR_SUCCESS, payload: parsedResult, });
  } catch (error) {
    yield put({ type: types.GET_AVATAR_FAILURE, payload: error });
  }
}

export function* removeAvatar() {
  try {
    yield AsyncStorage.removeItem('avatar');
    yield put({ type: types.REMOVE_AVATAR_SUCCESS, });
  } catch (error) {
    yield put({ type: types.REMOVE_AVATAR_FAILURE, payload: error });
  }
}

export function* saveAvatar({ payload }) {
  try {
    yield AsyncStorage.setItem('avatar', JSON.stringify(payload));
    yield put({ type: types.SAVE_AVATAR_SUCCESS, payload: payload });
  } catch (error) {
    yield put({ type: types.SAVE_AVATAR_FAILURE, payload: error });
  }
}

export default function* profile() {
  yield all([
    watchGetProfileData(),
    watchRemoveProfileData(),
    watchSaveProfileData(),
    watchGetAvatar(),
    watchRemoveAvatar(),
    watchSaveAvatar(),
  ])
}