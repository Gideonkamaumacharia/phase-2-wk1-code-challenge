
import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(prev => {
        return prev.filter((item) => item.toLowerCase().includes(term.toLowerCase()))
    });

  };

  return (
    <input
      type="text"
      placeholder="Search your recent transaction "
      value={searchTerm}
      onChange={handleChange}
    />
  );
}

export default SearchBar;
