// // src/components/FilterBar.jsx
// import React, { useContext } from 'react';
// import { ProductContext } from "../context/ProductContext"; // ✅ for components


// const FilterBar = () => {
//   const { setCategory, setSortOrder } = useContext(ProductContext);

//   return (
//    <div className="container my-3">
//   <div className="row g-2 align-items-center">
//     <div className="col-md-6">
//       <input
//         type="text"
//         className="form-control"
//         placeholder="Search products..."
//         onChange={handleSearch}
//       />
//     </div>
//     <div className="col-md-3">
//       <select className="form-select" onChange={handleCategory}>
//         <option value="">All Categories</option>
//         {/* other options */}
//       </select>
//     </div>
//     <div className="col-md-3">
//       <select className="form-select" onChange={handleSort}>
//         <option value="">Sort By</option>
//         {/* other options */}
//       </select>
//     </div>
//   </div>
// </div>

//   );
// };

// export default FilterBar;


// import React from "react";

// const FilterBar = ({ handleSearch, handleCategory, handleSort }) => {
//   return (
//     <div className="container my-3">
//       <div className="row g-2 align-items-center">
//         <div className="col-md-6">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search products..."
//             onChange={handleSearch}
//           />
//         </div>
//         <div className="col-md-3">
//           <select className="form-select" onChange={handleCategory}>
//             <option value="">All Categories</option>
//             <option value="electronics">Electronics</option>
//             <option value="jewelery">Jewelery</option>
//             <option value="men's clothing">Men's Clothing</option>
//             <option value="women's clothing">Women's Clothing</option>
//           </select>
//         </div>
//         <div className="col-md-3">
//           <select className="form-select" onChange={handleSort}>
//             <option value="">Sort By</option>
//             <option value="low-to-high">Price: Low to High</option>
//             <option value="high-to-low">Price: High to Low</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterBar;


import React from "react";

const FilterBar = ({ handleSearch, handleCategory, handleSort }) => {
  return (
    <div className="container my-4">
      <div className="row gy-2 gx-3 align-items-center">
        {/* Search Input */}
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="searchInput"
              placeholder="Search products..."
              onChange={handleSearch}
            />
            <label htmlFor="searchInput">Search products...</label>
          </div>
        </div>

        {/* Category Dropdown */}
        <div className="col-sm-6 col-md-3 col-lg-4">
          <div className="form-floating">
            <select
              className="form-select"
              id="categorySelect"
              onChange={handleCategory}
            >
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
            </select>
            <label htmlFor="categorySelect">Filter by Category</label>
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="col-sm-6 col-md-3 col-lg-4">
          <div className="form-floating">
            <select
              className="form-select"
              id="sortSelect"
              onChange={handleSort}
            >
              <option value="">Sort By</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
            <label htmlFor="sortSelect">Sort</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
