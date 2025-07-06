// import React from 'react';
// import { Link } from 'react-router-dom';
// import './ProductCard.css';

// const ProductCard = ({ product }) => {
//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.title} />
//       <div className="product-title"style={{color:"black"}}>{product.title}</div>
//       <div className="product-price">₹{product.price}</div>
//       <Link to={`/product/${product.id}`}>
//         <button className="view-button">View Product</button>
//       </Link>
//     </div>
//   );
// };

// export default ProductCard;



import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const renderStars = (rate) => {
    const stars = [];
    const fullStars = Math.floor(rate);
    const halfStar = rate % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i}>★</span>);
    }
    if (halfStar) stars.push(<span key="half">☆</span>);
    return stars;
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-title">{product.title}</div>
      <div className="product-price">₹{product.price}</div>

      
      <div className="product-rating">
        {renderStars(product.rating?.rate)} ({product.rating?.rate})
      </div>

      <Link to={`/product/${product.id}`}>
        <button className="view-button">View Product</button>
      </Link>
    </div>
  );
};

export default ProductCard;
