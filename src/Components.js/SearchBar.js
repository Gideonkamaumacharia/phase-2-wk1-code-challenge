
import React, { useState } from 'react';

function SearchBar({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
}

export default SearchBar;
