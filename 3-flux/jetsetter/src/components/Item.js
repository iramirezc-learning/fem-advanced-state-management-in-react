import React, { Component } from 'react';

import { toggleItem, removeItem } from '../actions';

import './Item.css';

class Item extends Component {
  render() {
    const { item } = this.props;

    return (
      <article className="Item">
        <label htmlFor={item.id}>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={() => {
              toggleItem(item);
            }}
            id={item.id}
          />
          {item.value}
        </label>
        <button
          className="Item-remove"
          onClick={() => {
            removeItem(item);
          }}
        >
          Remove
        </button>
      </article>
    );
  }
}

export default Item;
