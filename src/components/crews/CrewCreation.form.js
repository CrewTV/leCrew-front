import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FormGroup, Input, Label } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { login } from '../../api/users';
import { setToken } from 'utils/token';

export default function CrewCreationForm({}) {
  const navigate = useNavigate();
  const crewFormik = useFormik({
    initialValues: {
      name: '',
      members: [],
    },

    validationSchema: Yup.object({
      name: Yup.string().required('Nom du Crew Requis'),
      members: Yup.array(),
    }),

    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={crewFormik.handleSubmit}>
      <div className='d-flex flex-column align-items-center'>
        <FormGroup
          className={
            crewFormik.touched.name && crewFormik.errors.name
              ? 'has-error'
              : null
          }>
          <Label
            for={
              crewFormik.touched.name && crewFormik.errors.name ? 'error' : null
            }
            className='control-label'>
            Nom du Crew
          </Label>
          <Input
            className='fixed_field'
            type='text'
            placeholder='Nom du Crew'
            {...crewFormik.getFieldProps('name')}
          />
          {crewFormik.touched.name && crewFormik.errors.name ? (
            <div className='mt-1 text-danger'>{crewFormik.errors.name}</div>
          ) : null}
        </FormGroup>

        <div className='mt-50'>
          <button type='submit' className='btn btn-info fixed-button'>
            Création
          </button>
        </div>
      </div>
    </form>
  );
}

CrewCreationForm.propTypes = {};
