import React, { useContext, useEffect, useState } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import PropTypes from 'prop-types';
import UserContext from 'contexts/UserContext';
import { sampleAssets } from 'assets/samples/asset';
import { sampleUsers } from 'assets/samples/user';
import { formatNumber } from '../../utils/formating';
import { getAssetIndex } from 'assets/samples/asset';
import { addCrewAsset } from 'assets/samples/crew';

export default function AssetAddingForm({
  crew,
  setCrew,
  setAddAssetModal,
  setTriggerNotification,
}) {
  const { user } = useContext(UserContext);

  /* Object in the form:
  *   {
        {userId}: {boolean wether they take in the buying}
      }
  */
  const [checkParticipants, setCheckParticipants] = useState({});
  // Initialize the participation
  crew.membersInfo.forEach((memberInfo) => {
    checkParticipants[memberInfo.id] = true;
  });

  // Return an array of userIds from the checkParticinaptsObject
  const getParticipantIds = () => {
    let participantsIds = [];
    for (const [userId, participation] of Object.entries(checkParticipants)) {
      if (participation) participantsIds.push(userId);
    }
    return participantsIds;
  };

  const initialValues = {
    assetName: '',
    quantity: -1, // -1 by default to trigger the number validator
    buyerId: user.id, // The current user is placed as buyer per default
    participants: getParticipantIds(),
  };

  const validationSchema = Yup.object({
    assetName: Yup.string().required('Actif requis'),
    quantity: Yup.number()
      .required('Quantité requise')
      .min(0, 'La quantité doit être un nombre positif')
      .integer('La quantité doit être un nombre entier'),
    buyerId: Yup.number().required('Acheteur requis'),
    participants: Yup.array()
      .min(1, "Il faut au moins un participant pour valider l'ajout")
      .of(Yup.number())
      .required('Participants requis'),
  });

  const assetAddingFormOnSubmit = (values) => {
    const participantNumber = getParticipantIds().length;
    const rawAsset = sampleAssets.find(
      (sampleAsset) => sampleAsset.name === values.assetName
    );
    const newCrewAssetInfo = {
      id: rawAsset.id,
      quantity: values.quantity,
      performance: 0,
    };
    crew = addCrewAsset(crew, newCrewAssetInfo);

    const newUserAssetInfo = {
      id: rawAsset.id,
      quantity: values.quantity / participantNumber,
      performance: 0,
    };
    user.assetsInfo.push(newUserAssetInfo);

    const pricePerParticipant =
      (rawAsset.currentPrice * values.quantity) / participantNumber;
    // Update the balance for the crew members
    console.log(values.participants);
    crew.membersInfo.forEach((memberInfo, index) => {
      if (memberInfo.id === values.buyerId)
        crew.membersInfo[index].balance += pricePerParticipant;
      else if (checkParticipants[memberInfo.id])
        crew.membersInfo[index].balance -= pricePerParticipant;
    });

    setCrew(crew);
    setAddAssetModal(false);
    setTriggerNotification(true);
  };

  // Defining the options for the asset dropdown
  const assetOptions = sampleAssets.map((asset) => (
    <option key={asset.id} value={asset.name}>
      {asset.name} - {asset.currentPrice} € {`(${asset.exchange})`}
    </option>
  ));

  // Add default option for assets
  assetOptions.unshift(
    <option disabled value=''>
      Selectionner un actif
    </option>
  );
  // Defining the options for the asset dropdown
  const buyerOptions = crew.membersInfo.map((memberInfo) => {
    const associatedUser = sampleUsers.find(
      (sampleUser) => sampleUser.id === memberInfo.id
    );
    return (
      <option key={associatedUser.id} value={associatedUser.id}>
        {associatedUser.firstName}
      </option>
    );
  });

  // Add default option for buyer
  buyerOptions.unshift(
    <option disabled value=''>
      Selectionner un acheteur
    </option>
  );

  // Add or remove a participant from the participant object and return the array of corresponding participant Ids
  const handleParticipant = (participantId) => {
    checkParticipants[participantId] = !checkParticipants[participantId];
    setCheckParticipants(checkParticipants);
    return getParticipantIds();
  };

  const remainingPrice = (assetName, quantity) => {
    const asset = sampleAssets.find(
      (sampleAsset) => sampleAsset.name === assetName
    );
    const participantNumber = getParticipantIds().length;
    let pricePerParticipant;
    if (participantNumber === 0)
      pricePerParticipant = asset.currentPrice * quantity;
    else
      pricePerParticipant = (asset.currentPrice * quantity) / participantNumber;
    return `Prix par participant: ${formatNumber(pricePerParticipant)}`;
  };

  // Effect performed at first loading of the component
  useEffect(() => {
    // By default select the current user
    checkParticipants[user.id] = true;
  }, []);

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
            <FormGroup className={errors.buyerId ? 'has-error' : null}>
              <Label
                for={errors.buyerId ? 'error' : null}
                className='control-label'>
                Acheteur
              </Label>
              <Input
                className='fixed-field'
                type='select'
                name='select'
                id='assetSelector'
                defaultValue={values.buyerId}
                onChange={(e) => setFieldValue('buyerId', e.target.value)}>
                {buyerOptions}
              </Input>
              {errors.buyerId && (
                <div className='mt-1 text-danger'>{errors.buyerId}</div>
              )}
            </FormGroup>
            <FormGroup className={errors.participants ? 'has-error' : null}>
              <Label
                for={errors.participants ? 'error' : null}
                className='control-label'>
                Participant(s)
              </Label>
              <div className='d-flex flex-row'>
                {crew.membersInfo.map((member) => {
                  const userInfo = sampleUsers.find(
                    (sampleUser) => sampleUser.id === member.id
                  );
                  return (
                    <FormGroup check inline>
                      <Label check>
                        <Input
                          type='checkbox'
                          checked={checkParticipants[member.id]}
                          onChange={() =>
                            setFieldValue(
                              'participants',
                              handleParticipant(member.id)
                            )
                          }
                        />
                        {userInfo.firstName}
                        <span className='form-check-sign'>
                          <span className='check' />
                        </span>
                      </Label>
                    </FormGroup>
                  );
                })}
              </div>
              {errors.participants && (
                <div className='mt-1 text-danger'>{errors.participants}</div>
              )}
            </FormGroup>
            {!errors.assetName &&
              values.assetName.length > 0 &&
              !errors.quantity &&
              values.quantity > 0 && (
                <p>{remainingPrice(values.assetName, values.quantity)}</p>
              )}
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
  crew: PropTypes.object.isRequired,
  setCrew: PropTypes.func.isRequired,
  setAddAssetModal: PropTypes.func.isRequired,
  setTriggerNotification: PropTypes.func.isRequired,
};
