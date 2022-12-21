import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { register } from '../../api/users';
import { setToken } from 'utils/token';

YupPassword(Yup);

export default function RegisterForm({}) {
  const registerFormik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      age: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },

    validationSchema: Yup.object({
      firstname: Yup.string().required('Prénom requis'),
      lastname: Yup.string().required('Nom requis'),
      age: Yup.string().required('Age requis'),
      email: Yup.string()
        .email('Adresse mail invalide')
        .required('Adressse mail requise'),
      password: Yup.string()
        .min(10, 'Au minimum 10 caractères')
        .minLowercase(1, 'Au minimum une lettre minuscule')
        .minUppercase(1, 'Au minimum une lettre majuscule')
        .minSymbols(1, 'Au minimum un caractère spécial')
        .minNumbers(1, 'Au minimum un chiffre')
        .required('Mot de passe requis'),
      passwordConfirm: Yup.string()
        .min(10, 'Au minimum 10 caractères')
        .minLowercase(1, 'Au minimum une lettre minuscule')
        .minUppercase(1, 'Au minimum une lettre majuscule')
        .minSymbols(1, 'Au minimum un caractère spécial')
        .minNumbers(1, 'Au minimum un chiffre')
        .oneOf([Yup.ref('password')], 'Les mot des passes doivent correspondre')
        .required('Mot de passe requis'),
    }),

    onSubmit: async (values) => {
      const token = await register(values);
      setToken(token);
      window.location.reload();
    },
  });

  return (
    <form onSubmit={registerFormik.handleSubmit}>
      <div className='d-flex flex-column align-items-center'>
        <FormGroup
          className={
            registerFormik.touched.firstname && registerFormik.errors.firstname
              ? 'has-error'
              : null
          }>
          <Label
            for={
              registerFormik.touched.firstname &&
              registerFormik.errors.firstname
                ? 'error'
                : null
            }
            className='control-label'>
            Prénom
          </Label>
          <Input
            className='fixed_field'
            type='text'
            placeholder='Prénom'
            {...registerFormik.getFieldProps('firstname')}
          />
          {registerFormik.touched.firstname &&
          registerFormik.errors.firstname ? (
            <div className='mt-1 text-danger'>
              {registerFormik.errors.firstname}
            </div>
          ) : null}
        </FormGroup>

        <FormGroup
          className={
            registerFormik.touched.lastname && registerFormik.errors.lastname
              ? 'has-error'
              : null
          }>
          <Label
            for={
              registerFormik.touched.lastname && registerFormik.errors.lastname
                ? 'error'
                : null
            }
            className='control-label'>
            Nom
          </Label>
          <Input
            className='fixed_field'
            type='text'
            placeholder='Nom'
            {...registerFormik.getFieldProps('lastname')}
          />
          {registerFormik.touched.lastname && registerFormik.errors.lastname ? (
            <div className='mt-1 text-danger'>
              {registerFormik.errors.lastname}
            </div>
          ) : null}
        </FormGroup>

        <FormGroup
          className={
            registerFormik.touched.email && registerFormik.errors.email
              ? 'has-error'
              : null
          }>
          <Label
            for={
              registerFormik.touched.email && registerFormik.errors.email
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
            {...registerFormik.getFieldProps('email')}
          />
          {registerFormik.touched.email && registerFormik.errors.email ? (
            <div className='mt-1 text-danger'>
              {registerFormik.errors.email}
            </div>
          ) : null}
        </FormGroup>

        <FormGroup
          className={
            registerFormik.touched.age && registerFormik.errors.age
              ? 'has-error'
              : null
          }>
          <Label
            for={
              registerFormik.touched.age && registerFormik.errors.age
                ? 'error'
                : null
            }
            className='control-label'>
            Age
          </Label>
          <Input
            className='fixed_field'
            type='number'
            placeholder='Age'
            {...registerFormik.getFieldProps('age')}
          />
          {registerFormik.touched.age && registerFormik.errors.age ? (
            <div className='mt-1 text-danger'>{registerFormik.errors.age}</div>
          ) : null}
        </FormGroup>

        <FormGroup
          className={
            registerFormik.touched.password && registerFormik.errors.password
              ? 'has-error'
              : null
          }>
          <Label
            for={
              registerFormik.touched.password && registerFormik.errors.password
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
            {...registerFormik.getFieldProps('password')}
          />
          {registerFormik.touched.password && registerFormik.errors.password ? (
            <div className='mt-1 text-danger'>
              {registerFormik.errors.password}
            </div>
          ) : null}
        </FormGroup>

        <FormGroup
          className={
            registerFormik.touched.passwordConfirm &&
            registerFormik.errors.passwordConfirm
              ? 'has-error'
              : null
          }>
          <Label
            for={
              registerFormik.touched.passwordConfirm &&
              registerFormik.errors.passwordConfirm
                ? 'error'
                : null
            }
            className='control-label'>
            Confirmation de mot de passe
          </Label>
          <Input
            className='fixed_field'
            type='password'
            placeholder='Confirmation de mot de passe'
            {...registerFormik.getFieldProps('passwordConfirm')}
          />
          {registerFormik.touched.passwordConfirm &&
          registerFormik.errors.passwordConfirm ? (
            <div className='mt-1 text-danger'>
              {registerFormik.errors.passwordConfirm}
            </div>
          ) : null}
        </FormGroup>

        <div className='mt-50'>
          <button type='submit' className='btn btn-info fixed-button'>
            M'inscire
          </button>
        </div>
      </div>
    </form>
  );
}

RegisterForm.propTypes = {};
