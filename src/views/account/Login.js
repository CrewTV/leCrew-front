import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/dashboard');
  };
  return (
    <div>
      <h1>Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type='text' onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button
            type='submit'
            onClick={() => {
              setToken('token');
              navigateHome();
            }}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
