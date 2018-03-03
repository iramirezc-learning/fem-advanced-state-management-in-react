import React, { Component } from 'react'

import Items from '../components/Items'
import Store from '../store'
import Actions from '../actions'

class UnpackedItemsContainer extends Component {
  state = {
    unpackedItems: this.filterUnpackedItems(Store.getState().items),
    searchTerm: Store.getState().filter.unpackedItemsFilter
  }

  filterUnpackedItems (items) {
    return items.filter(item => !item.packed)
  }

  componentDidMount () {
    this.unsubscribe = Store.subscribe(this.updateState)
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  updateState = () => {
    this.setState({
      unpackedItems: this.filterUnpackedItems(Store.getState().items),
      searchTerm: Store.getState().filter.unpackedItemsFilter
    })
  }

  updateSearchTerm = searchTerm => {
    Actions.filter.updateUnpackedItemsFilter(searchTerm)
  }

  render () {
    return (
      <Items
        title='Unpacked Items'
        items={this.state.unpackedItems}
        searchTerm={this.state.searchTerm}
        onFilterChange={this.updateSearchTerm}
      />
    )
  }
}

export default UnpackedItemsContainer
