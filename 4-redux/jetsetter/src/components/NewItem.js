import React, { Component } from 'react'

import './NewItem.css'

class NewItem extends Component {
  render () {
    const { onSubmit, newItemValue, onNewItemValueChange } = this.props

    return (
      <form className='NewItem' onSubmit={onSubmit}>
        <input className='NewItem-input' type='text' value={newItemValue} onChange={onNewItemValueChange} />
        <input className='NewItem-submit button' type='submit' />
      </form>
    )
  }
}

export default NewItem
