
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './productDetail.css';


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error('Error fetching product', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
  <div className="detail-container">
    <Link to="/" className="back-link">← Back to Products</Link>
    
    <div className="detail-wrapper">
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />

      <div className="detail-info">
        <h2 className="detail-title">{product.title}</h2>
        <p className="detail-category"><strong>Category:</strong> {product.category}</p>
        <p className="detail-price"><strong>Price:</strong> ₹{product.price}</p>
        <p className="detail-description">{product.description}</p>
      </div>
    </div>
  </div>
);

};

export default ProductDetail;
