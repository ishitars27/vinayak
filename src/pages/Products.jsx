import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Navigation to product details
import { database } from "../firebaseConfig";
import { ref, get } from "firebase/database";
import "../styles/products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]); // ✅ State for cart items

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

    // ✅ Load cart from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // ✅ Function to add product to cart
  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // ✅ Save to local storage
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="products-container">
      <h2 id="our-products">Our Products</h2>
      {loading ? (
        <p>Loading products... <i className="fa-solid fa-spinner"></i></p>
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
              {/* ✅ Add to Cart Button */}
              <button onClick={() => handleAddToCart(product)} className="add-to-cart-btn">
                Add to Cart 🛒
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
