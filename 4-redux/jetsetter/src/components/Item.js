import React, { Component } from 'react'

import Actions from '../actions'

import './Item.css'

class Item extends Component {
  toggleItem = item => {
    Actions.items.toggleItem(item)
  }
  removeItem = item => {
    Actions.items.removeItem(item)
  }
  render () {
    const { item } = this.props

    return (
      <article className='Item'>
        <label htmlFor={item.id}>
          <input type='checkbox' checked={item.packed} onChange={() => this.toggleItem(item)} id={item.id} />
          {item.value}
        </label>
        <button className='Item-remove' onClick={() => this.removeItem(item)}>
          Remove
        </button>
      </article>
    )
  }
}

export default Item
