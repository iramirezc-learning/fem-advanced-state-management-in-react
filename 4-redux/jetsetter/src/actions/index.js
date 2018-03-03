import { bindActionCreators } from 'redux'

import Store from '../store'
import { updateUnpackedItemsFilter, updatePackedItemsFilter } from './filter-actions'
import { addNewItem, toggleItem, removeItem, markAllAsUnpacked } from './items-actions'
import { updateNewItemValue } from './new-item-actions'

export default {
  getState: Store.getState,
  items: bindActionCreators(
    {
      addNewItem,
      toggleItem,
      removeItem,
      markAllAsUnpacked,
      updateNewItemValue
    },
    Store.dispatch
  ),
  filter: bindActionCreators(
    {
      updatePackedItemsFilter,
      updateUnpackedItemsFilter
    },
    Store.dispatch
  )
}
