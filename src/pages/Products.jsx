import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Navigation to product details
import { database } from "../firebaseConfig";
import { ref, get } from "firebase/database";
import "../styles/products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productsRef = ref(database, "/productdetails/-OKa-_SlH8WU3RJZ4TSX");

    get(productsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const productData = snapshot.val();
          const productList = Object.keys(productData).map((key) => ({
            id: key,
            ...productData[key],
          }));
          setProducts(productList);
        } else {
          console.log("No data available in Firebase.");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching from Firebase:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="products-container">
      <h2>Our Products</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {/* ✅ Clickable Product Card */}
              <Link to={`/products/${product.id}`} className="product-link">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ₹{product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
