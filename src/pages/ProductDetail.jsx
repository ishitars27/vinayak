// ProductDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetail.css";  // Correct (matches filename)



const ProductDetail = () => {
  const { id } = useParams();
  
  // Mock product data (replace with API call in real-world scenario)
  const product = {
    id,
    name: "Premium Bike Helmet",
    description: "A high-quality helmet with advanced safety features.",
    price: 120,
    image: "/gloves.jpg",
  };

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>Price: ${product.price}</h3>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
