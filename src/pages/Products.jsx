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
      <h2 id="our-products">Our Products</h2>
      {loading ? (
        <p>Loading products... <i class="fa-solid fa-spinner"></i></p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {/* ✅ Clickable Product Card */}
              <Link to={`/products/${product.id}`} className="product-link">
                <img src={product.image} alt={product.name} />
                <h3 id="card-name">{product.name}</h3>
                <p id="card-para">{product.description}</p>
                <p id="cardprice">Price: ₹{product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
