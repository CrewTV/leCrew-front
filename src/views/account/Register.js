import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from 'components/Register/RegisterForm';
import { Link } from 'react-router-dom';

export default function Register({}) {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center h-100'>
      <h1>Inscription</h1>
      <RegisterForm />
      <div className='d-flex flex-row mt-4'>
        <p className='mr-2'>Déja un compte ?</p>
        <Link to='/login'>Connexion</Link>
      </div>
    </div>
  );
}

Register.propTypes = {};
