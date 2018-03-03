import React, { Component } from 'react';

import withItems from './WithItemsHOC';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';
import { markAllAsUnpacked } from '../actions';

import './Application.css';

export default withItems(
  class Application extends Component {
    state = { items: this.props.items };

    getPackedItems = () => {
      return this.state.items.filter(item => item.packed);
    };

    getUnpackedItems = () => {
      return this.state.items.filter(item => !item.packed);
    };

    componentWillReceiveProps(nextProps) {
      this.setState({ items: nextProps.items });
    }

    render() {
      return (
        <div className="Application">
          <NewItem />
          <CountDown />
          <Items title="Unpacked Items" items={this.getPackedItems()} />
          <Items title="Packed Items" items={this.getUnpackedItems()} />
          <button className="button full-width" onClick={markAllAsUnpacked}>
            Mark All As Unpacked
          </button>
        </div>
      );
    }
  }
);
