import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  return (
    <div className='d-flex flex-column align-items-center justify-content-center h-100'>
      <h1>Connexion</h1>
      <form>
        <div className='d-flex flex-column align-items-center'>
          <label>
            <p>Email</p>
            <input type='text' onChange={(e) => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Mot de passe</p>
            <input
              type='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div>
            <button
              type='button'
              className='btn btn-info fixed-button'
              onClick={() => {
                setToken(true);
                navigate('/dashboard');
              }}>
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
