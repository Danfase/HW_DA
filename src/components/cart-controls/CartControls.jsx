import React from "react";
import { useCart } from "../../context/CartContext";
import "./CartControls.css";

const CartControls = () => {
  const { clearCart } = useCart();

  return (
    <div className="cart-controls-container">
      <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default CartControls;
