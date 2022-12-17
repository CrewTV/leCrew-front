import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage({ setToken }) {
  const navigate = useNavigate();

  return (
    <div className='d-flex flex-column align-items-center justify-content-center h-100'>
      <h1>Bienvenue sur LeCrew</h1>
      <h4>La solution d'investissement groupé</h4>
      <div className='flex-row'>
        <button
          type='button'
          className='btn btn-info fixed-button'
          onClick={() => navigate('/login')}>
          Connexion
        </button>
        <button
          type='button'
          className='btn btn-success fixed-button'
          onClick={() => navigate('/register')}>
          Inscription
        </button>
      </div>
    </div>
  );
}

HomePage.propTypes = {};
