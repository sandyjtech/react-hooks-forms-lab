import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {
  const [inputValue, setInputValue] = useState(search);

  function handleInputChange(event) {
    const value = event.target.value;
    setInputValue(value);
    onSearchChange(value);
  }

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        value={inputValue}
        placeholder="Search..."
        onChange={handleInputChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
