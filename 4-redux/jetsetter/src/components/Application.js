import React, { Component } from 'react'

import CountDown from './CountDown'
import NewItemContainer from '../containers/NewItemContainer'
import PackedItemsContainer from '../containers/PackedItemsContainer'
import UnpackedItemsContainer from '../containers/UnpackedItemsContainer'
import MarkAllAsUnpacked from './MarkAllAsUnpacked'

import './Application.css'

class Application extends Component {
  render () {
    return (
      <div className='Application'>
        <NewItemContainer />
        <CountDown />
        <UnpackedItemsContainer />
        <PackedItemsContainer />
        <MarkAllAsUnpacked />
      </div>
    )
  }
}

export default Application
