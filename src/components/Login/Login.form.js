import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FormGroup, Input, Label } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { login } from '../../api/users';
import { setToken } from 'utils/token';

YupPassword(Yup);

export default function LoginForm({}) {
  const navigate = useNavigate();
  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email('Adresse mail invalide')
        .required('Adressse mail requise'),
      password: Yup.string().required('Mot de passe requis'),
    }),

    onSubmit: async (values) => {
      const token = await login(values);
      setToken(token);
      navigate('/');
      window.location.reload();
    },
  });

  return (
    <form onSubmit={loginFormik.handleSubmit}>
      <div className='d-flex flex-column align-items-center'>
        <FormGroup
          className={
            loginFormik.touched.email && loginFormik.errors.email
              ? 'has-error'
              : null
          }>
          <Label
            for={
              loginFormik.touched.email && loginFormik.errors.email
                ? 'error'
                : null
            }
            className='control-label'>
            Email
          </Label>
          <Input
            className='fixed_field'
            type='text'
            placeholder='Email'
            {...loginFormik.getFieldProps('email')}
          />
          {loginFormik.touched.email && loginFormik.errors.email ? (
            <div className='mt-1 text-danger'>{loginFormik.errors.email}</div>
          ) : null}
        </FormGroup>

        <FormGroup
          className={
            loginFormik.touched.password && loginFormik.errors.password
              ? 'has-error'
              : null
          }>
          <Label
            for={
              loginFormik.touched.password && loginFormik.errors.password
                ? 'error'
                : null
            }
            className='control-label'>
            Mot de passe
          </Label>
          <Input
            className='fixed_field'
            type='password'
            placeholder='Mot de passe'
            {...loginFormik.getFieldProps('password')}
          />
          {loginFormik.touched.password && loginFormik.errors.password ? (
            <div className='mt-1 text-danger'>
              {loginFormik.errors.password}
            </div>
          ) : null}
        </FormGroup>

        <div className='mt-50'>
          <button type='submit' className='btn btn-info fixed-button'>
            Me connecter
          </button>
        </div>
      </div>
    </form>
  );
}

LoginForm.propTypes = {};
