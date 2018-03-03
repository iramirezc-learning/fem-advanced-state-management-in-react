import React, { Component } from 'react'

import Item from './Item'
import Filter from './Filter'

class Items extends Component {
  render () {
    const { title, items, searchTerm = '', onFilterChange } = this.props

    return (
      <section className='Items'>
        <h2>
          {title} ({items.length})
        </h2>
        <Filter searchTerm={searchTerm} onChange={onFilterChange} />
        {items
          .filter(item => item.value.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(item => <Item key={item.id} item={item} />)}
      </section>
    )
  }
}

export default Items
