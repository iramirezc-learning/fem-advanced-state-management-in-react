import EventEmitter from 'events';
import uniqueId from 'lodash/uniqueId';

import actionTypes from './actionTypes';
import AppDispatcher from './AppDispatcher';

export const ITEM_EVENT = 'items.change';

const initialState = [
  { value: 'Pants', id: uniqueId(), packed: false },
  { value: 'Jacket', id: uniqueId(), packed: false },
  { value: 'iPhone Charger', id: uniqueId(), packed: false },
  { value: 'MacBook', id: uniqueId(), packed: false },
  { value: 'Sleeping Pills', id: uniqueId(), packed: true },
  { value: 'Underwear', id: uniqueId(), packed: false },
  { value: 'Hat', id: uniqueId(), packed: false },
  { value: 'T-Shirts', id: uniqueId(), packed: false },
  { value: 'Belt', id: uniqueId(), packed: false },
  { value: 'Passport', id: uniqueId(), packed: true },
  { value: 'Sandwich', id: uniqueId(), packed: true },
];

let items = [...initialState];

class ItemsStore extends EventEmitter {
  constructor() {
    super();

    // This is similar to a Reducer in Redux
    // you can use ReduceStore from 'flux/utils'
    // to achieve similar pattern
    AppDispatcher.register(action => {
      switch (action.type) {
        case actionTypes.ADD_ITEM:
          return this.addItem(action.item);
        case actionTypes.UPDATE_ITEM:
          return this.updateItem(action.item);
        case actionTypes.REMOVE_ITEM:
          return this.removeItem(action.item);
        case actionTypes.MARK_ALL_AS_UNPACKED:
          return this.markAllAsUnpacked();
        default:
          return;
      }
    });
  }

  getItems() {
    return items;
  }

  addItem(item) {
    items = [...items, item];
    this.emit(ITEM_EVENT);
  }

  updateItem(itemUpdated) {
    items = items.map(item => {
      if (item.id === itemUpdated.id) return itemUpdated;
      return item;
    });
    this.emit(ITEM_EVENT);
  }

  removeItem(itemToRemove) {
    items = items.filter(item => item.id !== itemToRemove.id);
    this.emit(ITEM_EVENT);
  }

  markAllAsUnpacked() {
    items = items.map(item => {
      item.packed = false;
      return item;
    });
    this.emit(ITEM_EVENT);
  }
}

export default new ItemsStore();
