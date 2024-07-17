//Footer.jsx

import React from "react"
import './Footer.css'
import { assets } from "../../assets/assets";

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat temporibus laboriosam a incidunt aliquam consequatur, magni, optio neque amet perferendis dolorem quidem nostrum voluptatibus dignissimos quod odit dolore, consequuntur libero.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET In Touch</h2>
                    <ul>
                        <li>999-999-999</li>
                        <li>contacto@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyrigth 2024 Tomato.com - All Rigth Reserved.</p>
        </div>
    )
}

export default Footer;