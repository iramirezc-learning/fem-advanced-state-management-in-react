import _ from 'lodash';

import {
  UPDATE_UNPACKED_ITEMS_FILTER,
  UPDATE_PACKED_ITEMS_FILTER,
  UPDATE_NEW_ITEM_VALUE,
  ADD_NEW_ITEM,
  REMOVE_ITEM,
  TOGGLE_ITEM,
  MARK_ALL_AS_UNPACKED,
  UNDO,
  REDO
} from '../constants';

import itemsReducer from './items-reducer'
import newItemReducer from './new-item-reducer'
import filterReducer from './filter-reducer'
import historyReducer from './history-reducer'

/**
 * TODO:
 * I want to create a version with only a linear array
 * using an index pointer to current state. v2?
 */
function backupState(state) {
  state.history.past = [_.cloneDeep(state.currentState), ...state.history.past]
  state.history.future = []
}

/** 
 * TODO: 
 * how to optimize new States whitout clonning too much?,
 * I need to learn more about it
 */
export default function (state = {}, action) {
  const newState = _.cloneDeep(state)
  const { currentState } = newState;

  switch (action.type) {
    case ADD_NEW_ITEM:
    case REMOVE_ITEM:
    case TOGGLE_ITEM:
    case MARK_ALL_AS_UNPACKED:
      backupState(newState);
      newState.currentState.items = itemsReducer(currentState.items, action)
      return newState;

    case UPDATE_NEW_ITEM_VALUE:
      backupState(newState);
      newState.currentState.newItemValue = newItemReducer(currentState.newItemValue, action)
      return newState;

    case UPDATE_PACKED_ITEMS_FILTER:
    case UPDATE_UNPACKED_ITEMS_FILTER:
      backupState(newState);
      newState.currentState.filter = filterReducer(currentState.filter, action);
      return newState

    case UNDO:
    case REDO:
      return { ...historyReducer(newState, action) };

    default:
      return state;
  }
}
