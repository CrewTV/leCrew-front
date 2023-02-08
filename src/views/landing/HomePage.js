import classNames from 'classnames';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavItem,
} from 'reactstrap';

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
        <div className='d-flex flex-column align-items-center mt-5'>
          <h1>Investissez à plusieurs</h1>
          <h4>Créez ou rejoignez un Crew, co-investissez sur des actifs</h4>
          <h4>Prenez des décisions avec votre Crew, performez ensemble</h4>
        </div>
      </div>
    </div>
  );
}

HomePage.propTypes = {};
