/**/

import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import CartOffcanvas from '../CartOffcanvas/CartOffcanvas'; // Importamos el componente CartOffcanvas
import { StoreContext } from '../../context/StoreContext'; // Importamos el contexto del almacenamiento

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [showCart, setShowCart] = useState(false); // Estado para controlar la visibilidad del offcanvas del carrito
  const { cartItems } = useContext(StoreContext); // Obtener el estado del carrito desde el contexto

  const toggleCart = () => {
    setShowCart(!showCart); // Función para abrir/cerrar el offcanvas del carrito
  };

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo' />
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" onClick={toggleCart} /> {/* Abrir el offcanvas del carrito al hacer clic en el ícono */}
          {Object.keys(cartItems).length > 0 && (
            <div className="dot">{Object.keys(cartItems).length}</div> // Mostrar el número de productos en el carrito
          )}
        </div>
        <Link to="/signup"><button>Sign In</button></Link>
      </div>
      <CartOffcanvas isOpen={showCart} closeCart={toggleCart} /> {/* Renderizar el offcanvas del carrito */}
    </div>
  );
};

export default Navbar;
