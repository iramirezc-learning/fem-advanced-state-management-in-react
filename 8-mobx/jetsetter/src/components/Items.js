import React, { Component } from 'react';
import Item from './Item';

class Items extends Component {
  render() {
    const { title, items } = this.props;

    return (
      <section className="Items">
        <h2>
          {title} ({items.length})
        </h2>
        { this.props.children }
        {items
          .map(item => (
            <Item
              key={item.id}
              item={item}
            />
          ))}
      </section>
    );
  }
}

export default Items;
