import { UPDATE_PACKED_ITEMS_FILTER, UPDATE_UNPACKED_ITEMS_FILTER } from '../constants'

export default function (state = { unpackedItemsFilter: '', packedItemsFilter: '' }, action = {}) {
  if (action.type === UPDATE_PACKED_ITEMS_FILTER) {
    return {
      ...state,
      packedItemsFilter: action.value
    }
  } else if (action.type === UPDATE_UNPACKED_ITEMS_FILTER) {
    return {
      ...state,
      unpackedItemsFilter: action.value
    }
  }
  return state
}
