import React, { useState, useEffect } from "react";
import { database } from "../firebaseConfig";
import { ref, get } from "firebase/database";
import "../styles/products.css";
import ARViewer from "../components/ARViewer"; // Import AR Viewer

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState({});
  const [arProduct, setArProduct] = useState(null); // Track product for AR

  useEffect(() => {
    const productsRef = ref(database, "/productdetails/-OKa-_SlH8WU3RJZ4TSX");

    get(productsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProducts(Object.values(snapshot.val()));
        } else {
          console.log("No data available in Firebase.");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching from Firebase:", error);
        setLoading(false);
      });

    const storedCart = JSON.parse(localStorage.getItem("cart")) || {};
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      newCart[product.id] = prevCart[product.id]
        ? { ...prevCart[product.id], quantity: prevCart[product.id].quantity + 1 }
        : { ...product, quantity: 1 };
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart, [id]: { ...prevCart[id], quantity: prevCart[id].quantity + 1 } };
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (prevCart[id].quantity > 1) {
        newCart[id].quantity -= 1;
      } else {
        delete newCart[id];
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
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

              {/* AR Button */}
              <button className="ar-button" onClick={() => setArProduct(product)}>
                View in AR
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Show AR Viewer if product is selected */}
      {arProduct && <ARViewer product={arProduct} onClose={() => setArProduct(null)} />}
    </div>
  );
};

export default Products;
