import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const handleAddToCart = () => {
    addToCart({ id, name, price, description, image });
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt={name} />
        {!cartItems[id] ? (
          <img
            className='add'
            onClick={handleAddToCart}
            src={assets.add_icon_white}
            alt="Add to Cart"
          />
        ) : (
          <div className='food-item-counter'>
            <img
              onClick={handleRemoveFromCart}
              src={assets.remove_icon_red}
              alt="Remove from Cart"
            />
            <p>{cartItems[id].quantity}</p>
            <img
              onClick={handleAddToCart}
              src={assets.add_icon_green}
              alt="Add to Cart"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
