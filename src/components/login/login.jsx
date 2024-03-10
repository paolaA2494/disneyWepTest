import '../../styles/login.scss';
import Logo from '../../assets/images/logo.png';
import validator from 'validator';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';




function Login() {

  const [emailError, setEmailError] = useState('')


  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('')
    } else {
      setEmailError('Ingrese un correo válido')
    }
  }

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
  };


  
  return (
    <div className="login">
     <img className="login_image" src={Logo} alt='logo'/>
     <h3 className='login_title'>Por favor, Regístrese</h3>
     <form className='login_form' onSubmit={handleSubmit}>
      <div className='login_form--input'>
        <label>Correo Electrónico</label>
        <input 
        type='email' 
        required 
        onChange={(e) => validateEmail(e)}
        />
        <span>{emailError}</span>
      </div>
      <div className='login_form--input'>
        <label>Contraseña</label>
        <input type='password' required/>
      </div>
      <div className='login_form--button'>
      <button type='submit'>Iniciar Sesión</button>
      </div>
     </form>
     <p className="mt-5 mb-3 text-center"> Disney App © 2024</p>
    </div>
  );
}

export default Login;
