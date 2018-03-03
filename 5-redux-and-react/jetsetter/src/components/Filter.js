import React from 'react';

import './Filter.css';

function Filter({ searchTerm, onChange }) {
  const handleChange = event => {
    const value = event.target.value;
    onChange(value);
  }

  return (
    <input
      className="Items-searchTerm"
      value={searchTerm}
      onChange={handleChange}
    />
  );
}

export default Filter;
