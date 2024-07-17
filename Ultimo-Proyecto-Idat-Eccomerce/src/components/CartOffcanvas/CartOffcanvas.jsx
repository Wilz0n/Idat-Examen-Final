import React, { useContext } from 'react';
import './CartOffcanvas.css';
import { StoreContext } from '../../context/StoreContext';

const CartOffcanvas = ({ isOpen, closeCart }) => {
  const { cartItems, removeFromCart } = useContext(StoreContext);

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className={`cart-offcanvas ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h3>Carrito</h3>
        <button className="close-btn" onClick={closeCart}>X</button>
      </div>
      <div className="cart-items">
        {Object.keys(cartItems).map((itemId) => (
          <div key={itemId} className="cart-item">
            <img src={cartItems[itemId].image} alt={cartItems[itemId].name} className="cart-item-image" />
            <div className="cart-item-info">
              <p className="cart-item-name">{cartItems[itemId].name}</p>
              <p className="cart-item-quantity">Cantidad: {cartItems[itemId].quantity}</p>
              <p className="cart-item-price">Precio: ${cartItems[itemId].price}</p>
            </div>
            <button className="cart-item-remove" onClick={() => handleRemoveItem(itemId)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartOffcanvas;
