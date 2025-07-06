// src/components/SearchBar.jsx
import React, { useContext } from 'react';
import { ProductContext } from "../context/ProductContext"; // ✅ for components

const SearchBar = ({ currentPage }) => {
  return (
    <div >
      {currentPage && <p>Page {currentPage}</p>}
      {/* other search/filter UI */}
    </div>
  );
};


export default SearchBar;
