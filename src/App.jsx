import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import ProductList from "./components/product-list/ProductList";
import CartControls from "./components/cart-controls/CartControls";
import CartPage from "./pages/CartPage";
import "./style.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const categories = ["all", "men's clothing", "women's clothing", "electronics", "jewelery"];

  return (
    <div className="container">
      <h1>Store</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/cart">Cart</Link>
      </nav>
      <div className="category-buttons">
        {categories.map((cat) => (
          <button 
            key={cat} 
            onClick={() => setCategory(cat)} 
            className={category === cat ? "category-btn active" : "category-btn"}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <Routes>
        <Route path="/" element={
          <>
            <CartControls />
            <ProductList products={products} loading={loading} category={category} />
          </>
        } />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

const Root = () => (
  <CartProvider>
    <App />
  </CartProvider>
);

export default Root;
