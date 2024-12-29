import React from 'react';

const SearchBar = ({ searchQuery, onSearch }) => {
  return (
    <div className="flex  items-center space-y-2 mb-4">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
        className="w-50 bg-transparent backdrop-brightness-50 border rounded  px-4 py-2"
      />
    </div>
  );
};

export default SearchBar;
