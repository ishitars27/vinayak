import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { database } from "../firebaseConfig";
import { ref, get } from "firebase/database";
import "../styles/ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams(); // ✅ Get Product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productRef = ref(database, `/productdetails/-OKa-_SlH8WU3RJZ4TSX/${id-1}`);

    get(productRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct(snapshot.val());
        } else {
          console.log("Product not found!");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>Price: ₹{product.price}</h3>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
