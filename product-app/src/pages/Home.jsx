// // src/pages/Home.jsx
// import React, { useContext } from 'react';
// import { ProductContext } from "../context/ProductContext"; // ✅ for components
// // import ProductList from './components/ProductList';
// // import SearchBar from './components/SearchBar';
// // import FilterBar from './components/FilterBar';
// import ProductList from "./components/ProductList";
// import SearchBar from "./components/SearchBar";
// import FilterBar from "./components/FilterBar";
// function Home() {
//     const { loading } = useContext(ProductContext);

//     return (
//         <div className="container">
//             <h1>Product Listing</h1>
//             <SearchBar />
//             <FilterBar />
//             {loading ? <p>Loading products...</p> : <ProductList />}
//         </div>
//     );
// }

// export default Home;


import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

const Home = () => {
  const { loading } = useContext(ProductContext);
const [searchTerm, setSearchTerm] = useState("");
const [selectedCategory, setSelectedCategory] = useState("");
const [sortOption, setSortOption] = useState("");

const handleSearch = (e) => {
  setSearchTerm(e.target.value);
};

const handleCategory = (e) => {
  setSelectedCategory(e.target.value);
};

const handleSort = (e) => {
  setSortOption(e.target.value);
};

  return (
   <div className="max-w-6xl mx-auto px-4 py-6">
  <h1 className="text-3xl font-bold mb-6 text-center" style={{backgroundColor:"lightslategray",padding:"2px opx",color:"blackz"}}>PRODUCTS</h1>
  <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
    <SearchBar />
    <FilterBar />
  </div>
  {loading ? <p className="text-center">Loading products...</p> : <ProductList />}
</div>

  );
};

export default Home;
