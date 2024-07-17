// components/SignUp/SignUp.jsx

import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="signup">
      <h2><i className="fas fa-sign-in-alt"></i> Iniciar Sesión</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Correo o nombre de usuario:</label>
          <div className="input-group">
            <div className="input-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <input type="text" id="username" name="username" placeholder="Ingrese su usuario o correo" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <div className="input-group">
            <div className="input-icon">
              <i className="fas fa-lock"></i>
            </div>
            <input type="password" id="password" name="password" placeholder="Ingrese contraseña" />
          </div>
        </div>

        <button type="submit" className="btn-signin">Iniciar Sesión</button>
      </form>

      <div className="other-signin-options">
        <p>O inicia sesión con:</p>
        <div className="signin-icons">
          <button className="signin-option facebook">
            <i className="fab fa-facebook"></i>
            <span>Facebook</span>
          </button>
          <button className="signin-option google">
            <i className="fab fa-google"></i>
            <span>Google</span>
          </button>
          <button className="signin-option hotmail">
            <i className="fab fa-windows"></i>
            <span>Hotmail</span>
          </button>
        </div>
      </div>

      <button className="btn-register">Registrarse</button>
    </div>
  );
};

export default SignUp;
