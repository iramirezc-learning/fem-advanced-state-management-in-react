import { UPDATE_ALL_ITEMS, ADD_NEW_ITEM, REMOVE_ITEM, TOGGLE_ITEM, MARK_ALL_AS_UNPACKED } from '../constants';

export default function(state = [], action) {
  if (action.type === UPDATE_ALL_ITEMS) {
    return [...action.items];
  }

  if (action.type === ADD_NEW_ITEM) {
    const item = action.item;
    return [ ...state, item ];
  }

  if (action.type === REMOVE_ITEM) {
    const itemToRemove = action.item;
    return state.filter(item => item.id !== itemToRemove.id);
  }

  if (action.type === TOGGLE_ITEM) {
    const itemToUpdate = action.item;
    return state.map(item => {
      if (item.id === itemToUpdate.id) return { ...item, ...itemToUpdate };
      return item;
    });
  }

  if (action.type === MARK_ALL_AS_UNPACKED) {
    return state.map(item => {
      return { ...item, packed: false  };
    });
  }

  return state;
}
