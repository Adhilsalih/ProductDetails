// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import ProductDetail from './pages/Productdetail'
// import { ProductContext } from './context/ProductContext'
// import FilterBar from './components/FilterBar'
// import ProductList from './components/ProductList'
// import SearchBar from './components/SearchBar'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
    
//       <div>
//         {/* <ProductDetail/>
//         <ProductContext/> */}
//         <Home/>
//         {/* <FilterBar/>
//         <ProductCard/>
//         <ProductList/>
//         <SearchBar/> */}
       
// <Router>
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/product/:id" element={<ProductDetail />} />
//   </Routes>
// </Router>

//       </div>
    
//   )
// }

// export default App


// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <ProductProvider> {/* ✅ Provide context to entire app */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
