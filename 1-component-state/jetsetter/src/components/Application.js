import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

const defaultState = [
  { value: 'Pants', id: uniqueId(), packed: false },
  { value: 'Jacket', id: uniqueId(), packed: false },
  { value: 'iPhone Charger', id: uniqueId(), packed: false },
  { value: 'MacBook', id: uniqueId(), packed: false },
  { value: 'Sleeping Pills', id: uniqueId(), packed: true },
  { value: 'Underwear', id: uniqueId(), packed: false },
  { value: 'Hat', id: uniqueId(), packed: false },
  { value: 'T-Shirts', id: uniqueId(), packed: false },
  { value: 'Belt', id: uniqueId(), packed: false },
  { value: 'Passport', id: uniqueId(), packed: true },
  { value: 'Sandwich', id: uniqueId(), packed: true },
];

class Application extends Component {
  state = {
    // Set the initial state,
    items: defaultState,
  };
  findItemIndexAnd(item, callback) {
    const { items } = this.state;
    const itemIndex = items.findIndex(i => i.id === item.id);

    if (itemIndex >= 0 && typeof callback === 'function') {
      callback(itemIndex);
    }

    return itemIndex;
  }
  // How are we going to manipualte the state?
  // Ideally, users are going to want to add, remove,
  // and check off items, right?
  addNewItem = newItem => {
    this.setState({
      items: [...this.state.items, newItem],
    });
  };
  checkOff = item => {
    const { items } = this.state;

    item.packed = !item.packed;
    this.findItemIndexAnd(item, index => {
      items[index] = item;
      this.setState({ items });
    });
  };
  removeItem = item => {
    const { items } = this.state;

    this.findItemIndexAnd(item, index => {
      items.splice(index, 1);
      this.setState({ items });
    });
  };
  markAllAsUnpacked = () => {
    this.setState({
      items: this.state.items.map(i => {
        return { ...i, packed: false };
      }),
    });
  };
  render() {
    // Get the items from state
    const { items } = this.state;
    const unpackedItems = [];
    const packedItems = [];

    items.forEach(i => (i.packed ? packedItems.push(i) : unpackedItems.push(i)));
    return (
      <div className="Application">
        <NewItem onSubmit={this.addNewItem} />
        <CountDown />
        <Items title="Unpacked Items" items={unpackedItems} onCheckOff={this.checkOff} onRemove={this.removeItem} />
        <Items title="Packed Items" items={packedItems} onCheckOff={this.checkOff} onRemove={this.removeItem} />
        <button className="button full-width" onClick={this.markAllAsUnpacked}>
          Mark All As Unpacked
        </button>
      </div>
    );
  }
}

export default Application;
