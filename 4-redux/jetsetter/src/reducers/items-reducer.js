import { ADD_NEW_ITEM, REMOVE_ITEM, TOGGLE_ITEM, MARK_ALL_AS_UNPACKED } from '../constants'

const addItem = (items, item) => {
  return [...items, item]
}

const removeItem = (items, itemToDelete) => {
  return items.filter(item => item.id !== itemToDelete.id)
}

const updateItem = (items, itemToUpdate) => {
  return items.map(item => {
    if (item.id === itemToUpdate.id) {
      return itemToUpdate
    }
    return item
  })
}

const markAllAsUnpacked = items => {
  return items.map(item => ({ ...item, packed: false }))
}

export default function (items = {}, action = {}) {
  if (action.type === ADD_NEW_ITEM) {
    return addItem(items, action.item)
  } else if (action.type === REMOVE_ITEM) {
    return removeItem(items, action.item)
  } else if (action.type === TOGGLE_ITEM) {
    return updateItem(items, action.item)
  } else if (action.type === MARK_ALL_AS_UNPACKED) {
    return markAllAsUnpacked(items)
  }
  return items
}
