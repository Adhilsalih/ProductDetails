import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const FilterBar = () => {
  const {
    searchTerm,
    setSearchTerm,
    category,
    setCategory,
    sortOrder,
    setSortOrder
  } = useContext(ProductContext);

  return (
    <div>
     
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{margin:"3px 3px",}}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)} style={{margin:"4px 4px",backgroundColor:"grey"}}>
        <option value="all">All Categories</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} style={{margin:"4px 4px",backgroundColor:"grey"}}>
        <option value="">Sort By</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
      </div>
    
  );
};

export default FilterBar;
