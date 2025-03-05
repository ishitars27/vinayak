import React, { useState, useEffect } from "react";
import { database } from "../firebaseConfig";
import { ref, get } from "firebase/database";
import "../styles/products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState({});

  useEffect(() => {
    const productsRef = ref(database, "/productdetails/-OKa-_SlH8WU3RJZ4TSX");

    get(productsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const productList = Object.values(snapshot.val());
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

    // ✅ Load cart from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || {};
    setCart(storedCart);
  }, []);

  // ✅ Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[product.id]) {
        newCart[product.id].quantity += 1;
      } else {
        newCart[product.id] = { ...product, quantity: 1 };
      }
      localStorage.setItem("cart", JSON.stringify(newCart)); // ✅ Save instantly
      return newCart;
    });
  };

  // ✅ Increase quantity
  const increaseQuantity = (id) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart, [id]: { ...prevCart[id], quantity: prevCart[id].quantity + 1 } };
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  // ✅ Decrease quantity
  const decreaseQuantity = (id) => {
    setCart((prevCart) => {
      if (prevCart[id].quantity > 1) {
        const newCart = { ...prevCart, [id]: { ...prevCart[id], quantity: prevCart[id].quantity - 1 } };
        localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
      } else {
        const updatedCart = { ...prevCart };
        delete updatedCart[id];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }
    });
  };

  return (
    <div className="products-container">
      <h2>Our Products</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ₹{product.price}</p>

              {cart[product.id] ? (
                <div className="cart-actions">
                  <button onClick={() => decreaseQuantity(product.id)}>-</button>
                  <span>{cart[product.id].quantity}</span>
                  <button onClick={() => increaseQuantity(product.id)}>+</button>
                </div>
              ) : (
                <button className="add-to-cart" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
