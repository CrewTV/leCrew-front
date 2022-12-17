import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from 'components/Register/RegisterForm';

export default function Register({ setToken }) {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center h-100'>
      <h1>Inscription</h1>
      <RegisterForm />
    </div>
  );
}

Register.propTypes = {
  setToken: PropTypes.func.isRequired,
};
