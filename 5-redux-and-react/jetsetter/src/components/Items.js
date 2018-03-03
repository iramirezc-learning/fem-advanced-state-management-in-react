import React from 'react';
import Item from './Item';

function Items ({title, items, onCheckOff, onRemove, render}) {
  return (
    <section className="Items">
      <h2>
        {title} ({items.length})
      </h2>
      {render}
      {items
        .map(item => (
          <Item
            key={item.id}
            onCheckOff={() => onCheckOff(item)}
            onRemove={() => onRemove(item)}
            item={item}
          />
        ))}
    </section>
  );
}

export default Items;
