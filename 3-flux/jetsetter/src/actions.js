import AppDispatcher from './AppDispatcher';
import uniqueId from 'lodash/uniqueId';

import actionTypes from './actionTypes';

export const addNewItem = value => {
  AppDispatcher.dispatch({
    type: actionTypes.ADD_ITEM,
    item: { value, id: uniqueId(), packed: false },
  });
};

export const removeItem = item => {
  AppDispatcher.dispatch({
    type: actionTypes.REMOVE_ITEM,
    item,
  });
};

export const toggleItem = item => {
  AppDispatcher.dispatch({
    type: actionTypes.UPDATE_ITEM,
    item: { ...item, packed: !item.packed },
  });
};

export const markAllAsUnpacked = () => {
  AppDispatcher.dispatch({
    type: actionTypes.MARK_ALL_AS_UNPACKED,
  });
};
