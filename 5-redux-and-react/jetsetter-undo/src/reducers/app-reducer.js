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

function backupState(appState, stateToBackUp) {
  appState.history.past = [_.cloneDeep(stateToBackUp), ...appState.history.past]
  appState.history.future = []
}

export default function (state = {}, action) {
  const { currentState } = state;

  switch (action.type) {
    case ADD_NEW_ITEM:
    case REMOVE_ITEM:
    case TOGGLE_ITEM:
    case MARK_ALL_AS_UNPACKED:
      backupState(state, currentState);
      state.currentState.items = itemsReducer(currentState.items, action)
      return { ...state };

    case UPDATE_NEW_ITEM_VALUE:
      backupState(state, currentState);
      state.currentState.newItemValue = newItemReducer(currentState.newItemValue, action)
      return { ...state };

    case UPDATE_PACKED_ITEMS_FILTER:
    case UPDATE_UNPACKED_ITEMS_FILTER:
      backupState(state, currentState); 
      state.currentState.filter = filterReducer(currentState.filter, action);
      return { ...state }

    case UNDO:
    case REDO:
      return { ...historyReducer(state, action) };

    default:
      return state;
  }
}
