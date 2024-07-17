/*SignUpForm*/

import React from 'react';
import './SignUpForm.css';

const SignUpForm = ({ switchToSignIn }) => {
  return (
    <div className="signup">
      <h2><i className="fas fa-user-plus"></i> Registrarse</h2>
      <form>
        <div className="form-row">
          <div className="form-group col">
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input type="text" id="nombre" name="nombre" placeholder="Nombre" />
            </div>
          </div>
          <div className="form-group col">
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input type="text" id="apellidos" name="apellidos" placeholder="Apellidos" />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col">
            <div className="input-group">
              <i className="fas fa-envelope"></i>
              <input type="email" id="email" name="email" placeholder="Correo Electrónico" />
            </div>
          </div>
          <div className="form-group col">
            <div className="input-group">
              <i className="fas fa-phone"></i>
              <input type="text" id="celular" name="celular" placeholder="Celular" />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="tipoDocumento">
            <i className="fas fa-id-card"></i> Tipo de Documento:
          </label>
          <select id="tipoDocumento" name="tipoDocumento">
            <option value="dni">DNI</option>
            <option value="carnet">Carnet de Extranjería</option>
            <option value="pasaporte">Pasaporte</option>
          </select>
        </div>

        <div className="form-group">
          <div className="input-group">
            <i className="fas fa-id-card"></i>
            <input type="text" id="numeroDocumento" name="numeroDocumento" placeholder="Número de Documento" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col">
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input type="password" id="password" name="password" placeholder="Contraseña" />
            </div>
          </div>
          <div className="form-group col">
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirmar Contraseña" />
            </div>
          </div>
        </div>

        <div className="terms">
          <input type="checkbox" id="terms" name="terms" />
          <label htmlFor="terms">Acepto los términos y condiciones así como la política de privacidad de datos personales</label>
        </div>

        <button type="submit" className="btn-signup">Registrarse</button>
      </form>

    </div>
  );
};

export default SignUpForm;
