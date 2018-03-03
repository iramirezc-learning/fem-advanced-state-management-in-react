import React from 'react';

import './NewItem.css';

function NewItem({ onSubmit, onChange, value }) {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(value);
    onChange('');
  };

  const handleChange = event => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <input
        className="NewItem-input"
        type="text"
        value={value}
        onChange={handleChange}
      />
      <input className="NewItem-submit button" type="submit" />
    </form>
  );
}

export default NewItem;
