// src/context/ProductContext.jsx
// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// export const ProductContext = createContext();

// export const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [category, setCategory] = useState('all');
//   const [sortOrder, setSortOrder] = useState('');

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get('https://fakestoreapi.com/products');
//       setProducts(res.data);
//       setFiltered(res.data);
//     } catch (err) {
//       console.error('Error fetching products', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     filterAndSort();
//   }, [searchTerm, category, sortOrder, products]);

//   const filterAndSort = () => {
//     let data = [...products];

//     if (searchTerm) {
//       data = data.filter((p) =>
//         p.title.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     if (category !== 'all') {
//       data = data.filter((p) => p.category === category);
//     }

//     if (sortOrder === 'low') {
//       data.sort((a, b) => a.price - b.price);
//     } else if (sortOrder === 'high') {
//       data.sort((a, b) => b.price - a.price);
//     }

//     setFiltered(data);
//   };

//   return (
//     <ProductContext.Provider
//       value={{
//         products: filtered,
//         loading,
//         setSearchTerm,
//         setCategory,
//         setSortOrder,
//       }}
//     >
//       {children}
//     </ProductContext.Provider>
//   );
// };


// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// export const ProductContext = createContext();

// export const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [category, setCategory] = useState('all');
//   const [sortOrder, setSortOrder] = useState('');

//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products')
//       .then((res) => {
//         setProducts(res.data);
//         setFiltered(res.data);
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     let data = [...products];
//     if (searchTerm) {
//       data = data.filter((p) =>
//         p.title.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     if (category !== 'all') {
//       data = data.filter((p) => p.category === category);
//     }
//     if (sortOrder === 'low') {
//       data.sort((a, b) => a.price - b.price);
//     } else if (sortOrder === 'high') {
//       data.sort((a, b) => b.price - a.price);
//     }

//     setFiltered(data);
//   }, [products, searchTerm, category, sortOrder]);

//   return (
//   <ProductContext.Provider
//     value={{
//       products,
//       filteredProducts, // ← make sure this exists
//       loading,
//       // other values
//     }}
//   >
//     {children}
//   </ProductContext.Provider>
// );

// };


import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let data = [...products];
    if (searchTerm) {
      data = data.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (category !== 'all') {
      data = data.filter((p) => p.category === category);
    }
    if (sortOrder === 'low') {
      data.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high') {
      data.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(data);
  }, [products, searchTerm, category, sortOrder]);

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        loading,
        setSearchTerm,
        setCategory,
        setSortOrder,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
