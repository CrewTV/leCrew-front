import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

export default function CrewCreationForm({
  crews,
  setCrews,
  setCreateCrewModal,
}) {
  const initialValues = {
    name: '',
    members: [],
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Nom du Crew Requis'),
    members: Yup.array().of(
      Yup.string()
        .required('Adresse mail requise')
        .email('Adresse mail invalide')
    ),
  });

  const crewFormOnSubmit = (values) => {
    // Api Call to create crew
    const newCrew = {
      ...values,
      value: 0,
      performance: 0,
      image: require('assets/img/angular-logo.png'),
    };
    crews.push(newCrew);
    setCrews(crews);
    setCreateCrewModal(false);
  };

  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => crewFormOnSubmit(values)}>
        {({ values, errors, setFieldValue }) => (
          <Form className='d-flex flex-column align-items-center justify-content-center'>
            <FormGroup className={errors.name ? 'has-error' : null}>
              <Label
                for={errors.email ? 'error' : null}
                className='control-label'>
                Nom du Crew
              </Label>
              <Input
                className='fixed_field'
                type='text'
                placeholder='Nom du Crew'
                onChange={(e) => setFieldValue('name', e.target.value)}
              />
              {errors.name ? (
                <div className='mt-1 text-danger'>{errors.name}</div>
              ) : null}
            </FormGroup>
            <FormGroup>
              {values.members.length > 0 && (
                <Label className='control-label'>Membres</Label>
              )}
              <FieldArray name='members'>
                {({ remove, push }) => (
                  <div className='d-flex flex-column justify-content-center'>
                    {values.members.length > 0 &&
                      values.members.map((_, index) => (
                        <div className='d-flex flex-row mb-2' key={index}>
                          <Input
                            className='fixed_field'
                            placeholder='Email'
                            type='email'
                            onChange={(e) =>
                              setFieldValue(`members.${index}`, e.target.value)
                            }
                          />
                          <button
                            type='button'
                            className='btn btn-warning btn-sm m-0 ml-1'
                            onClick={() => remove(index)}>
                            X
                          </button>
                        </div>
                      ))}
                    {errors.members ? (
                      <div className='mt-1 text-danger'>{errors.members}</div>
                    ) : null}
                    <button
                      type='button'
                      className='btn btn-success fixed-button'
                      onClick={() => push('')}>
                      Ajouter un membre
                    </button>
                  </div>
                )}
              </FieldArray>
            </FormGroup>

            <button type='submit' className='btn btn-info fixed-button'>
              Création
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

CrewCreationForm.propTypes = {
  crews: PropTypes.array.isRequired,
  setCrews: PropTypes.func.isRequired,
  setCreateCrewModal: PropTypes.func.isRequired,
};
