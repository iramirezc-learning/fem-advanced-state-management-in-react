import React, { Component } from 'react'

import Actions from '../actions'

class MarkAllAsUnpacked extends Component {
  markAllAsUnpacked = () => {
    Actions.items.markAllAsUnpacked()
  }
  render () {
    return (
      <button className='button full-width' onClick={this.markAllAsUnpacked}>
        Mark All As Unpacked
      </button>
    )
  }
}

export default MarkAllAsUnpacked
