import React, { useContext } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';

import PropTypes from 'prop-types';
import UserContext from 'contexts/UserContext';
import { sampleRawAssets } from 'assets/samples/asset';

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

  const assetOptions = sampleRawAssets.map((rawAsset) => (
    <option key={rawAsset.id} value={rawAsset.name}>
      {rawAsset.name} - {rawAsset.currentPrice} € {`(${rawAsset.exchange})`}
    </option>
  ));

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
            <Label
              for={errors.assetName ? 'error' : null}
              className='control-label'>
              Actif
            </Label>
            <Input
              type='select'
              name='select'
              id='assetSelector'
              defaultValue={''}>
              {assetOptions}
            </Input>
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
