import classNames from 'classnames';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from 'reactstrap';
export default function HomePage({ setToken }) {
  const navigate = useNavigate();

  return (
    <div className='d-flex flex-column h-100'>
      <div className='mx-5 my-2'>
        <div className='d-flex flex-row justify-content-between align-items-center'>
          <div
            className='d-flex flex-row align-items-center'
            style={{ width: '450px' }}>
            <h2>LeCrew</h2>
            <p className='ml-1'>In money we trust</p>
          </div>

          <div>
            <div
              className='d-flex flex-row justify-content-between'
              style={{ width: '350px' }}>
              <h4>Solution</h4>
              <h4>.</h4>
              <h4>Nos tarifs</h4>
              <h4>.</h4>
              <h4>La team</h4>
            </div>
          </div>
          <div
            className='d-flex flex-row  justify-content-end'
            style={{ width: '450px' }}>
            <button
              type='button'
              className='btn btn-default fixed-button animation-on-hover'
              onClick={() => navigate('/login')}>
              Connexion
            </button>
            <button
              type='button'
              className='btn btn-info fixed-button animation-on-hover'
              onClick={() => navigate('/register')}>
              Inscription
            </button>
          </div>
        </div>
        <div
          className='d-flex flex-column align-items-center'
          style={{ marginTop: '100px' }}>
          <h1>Investissez à plusieurs</h1>
          <h4>
            Créez ou rejoignez un Crew puis sélectionnez et achetez vos actifs
            ensemble
          </h4>
          <h4>Inscrivez-vous et co-investissez dès aujourd'hui</h4>
          <div className='d-flex flex-row align-items-center mt-3'>
            <Input
              className='fixed-field'
              type='text'
              placeholder='Adresse e-mail'
            />
            <button
              type='button'
              className='btn btn-info fixed-button animation-on-hover ml-2'>
              Démarer
            </button>
          </div>
        </div>
        <div
          className='d-flex flex-column align-items-center'
          style={{ marginTop: '100px' }}>
          <h2>Créez votre Crew avec vos amis</h2>
          <h4>
            LeCrew propose de créer des groupes appelés "Crews" dans lequel vous
            et vos partenaires peuvent co-investir
          </h4>
          <div className='d-flex flex-row justify-content-center align-items-center'>
            <div className='mr-5'>
              <div className='landing-box'>
                <h3>Créez un Crew</h3>
                <p>Choissez un nom et recrutez vos amis investisseur</p>
              </div>
              <div className='landing-box'>
                <h3>Rejoingez un Crew</h3>
                <p>Rejoingez des Crews déjà actifs</p>
              </div>
              <div className='landing-box'>
                <h3>Achetez des actifs</h3>
                <p>Réalisez vos premiers achats avec vos partenaires</p>
              </div>
            </div>
            <img
              src={require('assets/img/landingImage1.png')}
              className='landing-image'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

HomePage.propTypes = {};
