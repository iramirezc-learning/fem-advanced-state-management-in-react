import { all, call, put, takeEvery } from 'redux-saga/effects';

import Api from '../lib/api';

import { REQUEST_NEW_FRIEND } from '../constants';
import { addFriendToList } from '../actions/index';

export default function* rootSaga() {
  yield all([
    requestNewFriend()
  ])
}

export function* requestNewFriend() {
  yield takeEvery(REQUEST_NEW_FRIEND, makeApiCall);
}

export function* makeApiCall(action) {
  const newFriend = yield call(Api.requestNewFriend);
  yield put(addFriendToList(newFriend));
}