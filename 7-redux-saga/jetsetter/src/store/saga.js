import { all, call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_ITEMS, SAVE_NEW_ITEM } from '../constants';
import { updateAllItems, addNewItem } from '../actions/items-actions'
import Api from '../lib/api';

export default function* rootSaga() {
  yield all([
    fetchItems(),
    saveNewItem()
  ]);
}

// listents to FETCH_ITEMS action and dispatches with apiGetAllItems
export function* fetchItems() {
  yield takeEvery(FETCH_ITEMS, apiGetAllItems);
}

// requests items from Api and calls updateAllItems
// puts UPDATE_ALL_ITEMS
export function* apiGetAllItems() {
  const items = yield call(Api.getAll);
  yield put(updateAllItems(items));
}

// intercetps SAVE_NEW_ITEM and dispatches with apiSaveItem
export function* saveNewItem() {
  yield takeEvery(SAVE_NEW_ITEM, apiSaveItem)
}

// puts ADD_NEW_ITEM
export function* apiSaveItem({value}) {
  const item = {
    value,
    packed: false,
  }
  const savedItem = yield call(Api.add, item);
  yield put(addNewItem(savedItem));
}
