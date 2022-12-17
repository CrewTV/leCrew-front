import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginForm from 'components/Login/LoginForm';
import { Link } from 'react-router-dom';

export default function Login({}) {
  const navigate = useNavigate();

  return (
    <div className='d-flex flex-column align-items-center justify-content-center h-100'>
      <h1>Connexion</h1>
      <LoginForm />
      <div className='d-flex flex-row mt-4'>
        <p className='mr-2'>Pas de compte ?</p>
        <Link to='/register'>M'inscrire</Link>
      </div>
    </div>
  );
}

Login.propTypes = {};
