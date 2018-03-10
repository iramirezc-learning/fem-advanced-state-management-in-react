import { LOAD_ITEMS, ADD_NEW_ITEM, REMOVE_ITEM, TOGGLE_ITEM, MARK_ALL_AS_UNPACKED } from '../constants';
import Api from '../lib/api';

export const getAllItems = () => {
  return (dispatch) => {
    console.log('geting all items...');

    Api
      .getAll()
      .then(items => {
        console.log({ items })
        dispatch({
          type: LOAD_ITEMS,
          items
        })
      })
      .catch(e => console.log({e}))
  }
}

export const addNewItem = (value) => {
  return (dispatch) => {
    const item = {
      packed: false,
      value
    }

    Api
      .add(item)
      .then(item => {
        console.log({ item });
        dispatch({
          type: ADD_NEW_ITEM,
          item,
        })
      })
  }
}

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
