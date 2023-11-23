// SearchBar.js
import React, { useState } from 'react';
import { Input, Button } from 'antd';
import './StyleSheets/SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '20px' }}>
      <Input
        placeholder="Search for cars, brands, and more"
        value={query}
        onChange={handleInputChange}
        style={{ width: '500px', marginRight: '8px' }}
      />
      <Button type="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
