// // import React, { useContext } from "react";
// // import { ProductContext } from "../context/ProductContext";
// // import ProductCard from "./ProductCard";
// // import "./ProductList.css"; // Import your CSS

// // const ProductList = () => {
// //   const { filteredProducts, loading } = useContext(ProductContext);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div className="product-grid">
// //       {filteredProducts.map((product) => (
// //         <ProductCard key={product.id} product={product} />
// //       ))}
// //     </div>
// //   );
// // };

// // export default ProductList;


// import React, { useContext, useState } from "react";
// import { ProductContext } from "../context/ProductContext";
// import ProductCard from "./ProductCard";
// import "./ProductList.css";

// const ProductList = () => {
//   const { filteredProducts, loading } = useContext(ProductContext);

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 8;

//   // Calculate pagination
//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
//   const indexOfLast = currentPage * itemsPerPage;
//   const indexOfFirst = indexOfLast - itemsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     window.scrollTo({ top: 0, behavior: "smooth" }); // Optional: scroll to top
//   };

//   return (
//     <>
//       <div className="product-grid">
//         {currentProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index + 1}
//             onClick={() => handlePageChange(index + 1)}
//             className={currentPage === index + 1 ? "active" : ""}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ProductList;


// import React, { useContext } from 'react';
// import { ProductContext } from '../context/ProductContext';
// import ProductCard from './ProductCard';

// const ProductList = () => {
//   const { filteredProducts, loading } = useContext(ProductContext);

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="product-grid">
//       {filteredProducts.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default ProductList;


import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = () => {
  const { filteredProducts, loading } = useContext(ProductContext);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="product-list-wrapper">
      <div className="product-grid">
        {currentItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination UI */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
