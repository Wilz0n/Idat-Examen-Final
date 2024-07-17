// pages/Cart/Cart.jsx

import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(StoreContext);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {Object.keys(cartItems).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {Object.keys(cartItems).map((itemId) => (
            <div key={itemId} className="cart-item">
              <p>{itemId}</p>
              <p>Quantity: {cartItems[itemId]}</p>
              <button onClick={() => removeFromCart(itemId)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
