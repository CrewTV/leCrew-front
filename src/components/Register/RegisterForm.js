import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Input } from 'reactstrap';

export default function RegisterForm({ setToken }) {
  const navigate = useNavigate();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  return (
    <form>
      <div className='d-flex flex-column align-items-center'>
        <label>
          <p>Prénom</p>
          <Input
            type='text'
            placeholder='Prénom'
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          <p>Nom</p>
          <Input
            type='text'
            placeholder='Nom'
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          <p>Email</p>
          <Input
            type='text'
            placeholder='Email'
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          <p>Mot de passe</p>
          <Input
            type='password'
            placeholder='Mot de passe'
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <p>Confirmation de mot de passe</p>
          <Input
            type='password'
            placeholder='Confirmation'
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
  );
}

RegisterForm.propTypes = {
  setToken: PropTypes.func.isRequired,
};
