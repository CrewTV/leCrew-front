import React, { useContext } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';

import PropTypes from 'prop-types';
import UserContext from 'contexts/UserContext';
import { sampleAssets } from 'assets/samples/asset';

export default function AssetAddingForm({
  crewId,
  setCrewAsset,
  setAssetAddingModal,
  setTriggerNotification,
}) {
  const { user } = useContext(UserContext);
  const initialValues = {
    assetName: '',
    quantity: 0,
    buyerId: user.id, // The current user is placed as buyer per default
    participants: [],
  };

  const validationSchema = Yup.object({
    assetName: Yup.string().required('Actif requis'),
    quantity: Yup.number()
      .required('Quantité requise')
      .min(0, 'La quantité doit être un nombre positif')
      .integer('La quantité doit être un nombre entier'),
    buyerId: Yup.number().required('Acheteur requis'),
    participants: Yup.array().of(Yup.number().required('Participants requis')),
  });

  const assetAddingFormOnSubmit = (values) => {
    setAssetAddingModal(false);
    setTriggerNotification(true);
  };

  const assetOptions = sampleAssets.map((asset) => (
    <option key={asset.id} value={asset.name}>
      {asset.name} - {asset.currentPrice} € {`(${asset.exchange})`}
    </option>
  ));

  // Add default option
  assetOptions.unshift(
    <option disabled value=''>
      Selectionner un actif
    </option>
  );

  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => assetAddingFormOnSubmit(values)}>
        {({ values, errors, setFieldValue }) => (
          <Form className='d-flex flex-column align-items-center justify-content-center'>
            <FormGroup className={errors.assetName ? 'has-error' : null}>
              <Label
                for={errors.assetName ? 'error' : null}
                className='control-label'>
                Actif
              </Label>
              <Input
                className='fixed-field'
                type='select'
                name='select'
                id='assetSelector'
                defaultValue={''}
                onChange={(e) => setFieldValue('assetName', e.target.value)}>
                {assetOptions}
              </Input>
              {errors.assetName && (
                <div className='mt-1 text-danger'>{errors.assetName}</div>
              )}
            </FormGroup>
            <FormGroup className={errors.quantity ? 'has-error' : null}>
              <Label
                for={errors.quantity ? 'error' : null}
                className='control-label'>
                Quantité
              </Label>
              <Input
                className='fixed-field'
                type='number'
                placeholder='Quantité'
                onChange={(e) => setFieldValue('quantity', e.target.value)}
              />
              {errors.quantity && (
                <div className='mt-1 text-danger'>{errors.quantity}</div>
              )}
            </FormGroup>
            <button type='submit' className='btn btn-info fixed-button'>
              Ajouter l'actif
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

AssetAddingForm.propTypes = {
  crewId: PropTypes.number.isRequired,
  setCrewAsset: PropTypes.func.isRequired,
  setAssetAddingModal: PropTypes.func.isRequired,
  setTriggerNotification: PropTypes.func.isRequired,
};
