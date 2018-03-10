import React, { Component } from 'react';
import { connect } from 'react-redux';

import CountDown from './CountDown';
import MarkAllAsUnpackedContainer from '../containers/MarkAllAsUnpackedContainer'
import NewItemContainer from '../containers/NewItemContainer'
import PackedFilterContainer from '../containers/PackedFilterContainer'
import PackedItemsContainer from '../containers/PackedItemsContainer'
import UnpackedFilterContainer from '../containers/UnpackedFilterContainer'
import UnpackedItemsContainer from '../containers/UnpackedItemsContainer'

// import { getAllItems } from '../actions/items-actions';

import './Application.css';

// I was trying to fetch all items when application
// was mounted, but is a better idea to trigger that
// after the store created in store/index.js
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onComponentDidMount() {
//       dispatch(getAllItems())
//     }
//   }
// }

class Application extends Component {
  componentDidMount() {
    console.log('ApplicationDidMount');
    const { onComponentDidMount } = this.props;

    typeof onComponentDidMount === 'function' && onComponentDidMount()
  }
  render() {
    return (
      <div className="Application">
        <NewItemContainer />
        <CountDown />
        <UnpackedItemsContainer render={<UnpackedFilterContainer />} />
        <PackedItemsContainer render={<PackedFilterContainer />} />
        <MarkAllAsUnpackedContainer />
      </div>
    );
  }
}

export default connect(null, null)(Application);
