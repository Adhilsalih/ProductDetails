import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = [...products];

    // Search filter
    if (searchTerm) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (category !== 'all') {
      result = result.filter(p => p.category === category);
    }

    // Sorting
    if (sortOrder === 'low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high') {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [products, searchTerm, category, sortOrder]);

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        loading,
        searchTerm,
        setSearchTerm,
        category,
        setCategory,
        sortOrder,
        setSortOrder,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
