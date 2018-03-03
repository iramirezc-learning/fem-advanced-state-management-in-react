import React from 'react';

import './Item.css';

function Item({ item, onCheckOff, onRemove }) {
  return (
    <article className="Item">
      <label htmlFor={item.id}>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={onCheckOff}
          id={item.id}
        />
        {item.value}
      </label>
      <button className="Item-remove" onClick={onRemove}>
        Remove
        </button>
    </article>
  );
}

export default Item;
