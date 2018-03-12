import { FETCH_ITEMS, UPDATE_ALL_ITEMS, SAVE_NEW_ITEM, ADD_NEW_ITEM, REMOVE_ITEM, TOGGLE_ITEM, MARK_ALL_AS_UNPACKED } from '../constants';
import Api from '../lib/api';

/* intercepted by sagas */
export const fetchItems = () => {
  return {
    type: FETCH_ITEMS
  }
}

/* dispatched by sagas */
export const updateAllItems = (items) => {
  return {
    type: UPDATE_ALL_ITEMS,
    items
  }
}

/* intercepted by sagas */
export const saveNewItem = (value) => {
  return {
    type: SAVE_NEW_ITEM,
    value
  }
}

/* dispatched by sagas */
export const addNewItem = (item) => {
  return {
    type: ADD_NEW_ITEM,
    item,
  };
}

/* thunk */
export const toggleItem = (item) => {
  return (dispatch) => {
    console.log('updating item...', item)
    
    item = {...item, packed: !item.packed}
    
    Api
      .update(item)
      .then(() => {
        dispatch({
          type: TOGGLE_ITEM,
          item
        })
      })
  }
};

/* thunk */
export const removeItem = (item) => {
  return (dispatch) => {
    Api
      .delete(item)
      .then(() => {
        dispatch({
          type: REMOVE_ITEM,
          item,
        })
      })
  }
}

/* thunk */
export const markAllAsUnpacked = () => {
  return (dispatch) => {
    Api
      .markAllAsUnpacked()
      .then(() => {
        dispatch({
          type: MARK_ALL_AS_UNPACKED,
        })
      })
  }
}
