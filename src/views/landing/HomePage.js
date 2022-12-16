import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage({ setToken }) {
  const navigate = useNavigate();

  return (
    <div className='d-flex flex-column align-items-center'>
      <h1>Bienvenue sur LeCrew</h1>
      <h4>La solution d'investissement groupé</h4>
      <div className='flex-row'>
        <button
          type='button'
          class='btn btn-info'
          onClick={() => navigate('/login')}>
          Login
        </button>
        <button
          type='button'
          class='btn btn-success'
          onClick={() => navigate('/register')}>
          Register
        </button>
      </div>
    </div>
  );
}

HomePage.propTypes = {};
