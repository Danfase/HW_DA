import React from "react";
import { useCart } from "../../context/CartContext";
import "./ProductList.css";

const ProductList = ({ products, loading, category }) => {
  const { cart, addToCart, updateQuantity } = useCart();
  const filteredProducts = category === "all" ? products : products.filter((p) => p.category === category);

  return (
    <div className="product-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} width={100} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            {cart.some((item) => item.id === product.id) ? (
              <div className="cart-controls">
                <button onClick={() => updateQuantity(product.id, -1)}>-</button>
                <span>{cart.find((item) => item.id === product.id).quantity}</span>
                <button onClick={() => updateQuantity(product.id, 1)}>+</button>
              </div>
            ) : (
              <button className="add-to-cart" onClick={() => addToCart(product)}>Add to cart</button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
