import React, { Component } from 'react'

import Items from '../components/Items'
import Store from '../store'
import Actions from '../actions'

class PackedItemsContainer extends Component {
  state = {
    packedItems: this.filterPackedItems(Store.getState().items),
    searchTerm: Store.getState().filter.packedItemsFilter
  }

  filterPackedItems (items) {
    return items.filter(item => item.packed)
  }

  componentDidMount () {
    this.unsubscribe = Store.subscribe(this.updateState)
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  updateState = () => {
    this.setState({
      packedItems: this.filterPackedItems(Store.getState().items),
      searchTerm: Store.getState().filter.packedItemsFilter
    })
  }

  updateSearchTerm = searchTerm => {
    Actions.filter.updatePackedItemsFilter(searchTerm)
  }

  render () {
    return (
      <Items
        title='Packed Items'
        items={this.state.packedItems}
        searchTerm={this.state.searchTerm}
        onFilterChange={this.updateSearchTerm}
      />
    )
  }
}

export default PackedItemsContainer
