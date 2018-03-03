import { UPDATE_UNPACKED_ITEMS_FILTER, UPDATE_PACKED_ITEMS_FILTER } from '../constants'

export const updateUnpackedItemsFilter = value => ({
  type: UPDATE_UNPACKED_ITEMS_FILTER,
  value
})

export const updatePackedItemsFilter = value => ({
  type: UPDATE_PACKED_ITEMS_FILTER,
  value
})
