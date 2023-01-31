import React, { useState, useEffect } from 'react';
import NotificationAlert from 'react-notification-alert';
import { useParams } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';

import { Line } from 'react-chartjs-2';
import { chartExample1 } from 'variables/charts.js';
import { sampleCrews } from 'assets/samples/crew';
import AssetTable from 'components/Assets/AssetTable';
import AssetAddingForm from 'components/Assets/AssetAddingForm';
import CrewBalance from 'components/Crews/CrewBalance';

export default function CrewDescription({}) {
  /* Notifications utilitary */
  const notificationAlertRef = React.useRef(null);
  const notify = (place = 'tr', type = 'success', content) => {
    var type;
    var options = {};
    options = {
      place: place,
      message: <div>{content}</div>,
      type: type,
      icon: 'tim-icons icon-bell-55',
      autoDismiss: 5,
    };
    notificationAlertRef.current.notificationAlert(options);
  };

  // Recover the id in the query params
  const id = parseInt(useParams().id, 10);
  // Replace by API call
  const [crew, setCrew] = useState(
    sampleCrews.find((sampleCrew) => sampleCrew.id === id)
  );
  const [crewAssetsInfo, setCrewAssetsInfo] = useState(crew.assetsInfo);

  const [bigChartData, setbigChartData] = React.useState('data1');
  const [addAssetModal, setAddAssetModal] = useState(false);
  const [triggerNotification, setTriggerNotification] = useState(false);

  const toggleAssetAddingModal = () => {
    setAddAssetModal(!addAssetModal);
  };

  // Trigger a notification when needed
  useEffect(() => {
    if (triggerNotification)
      notify('tr', 'success', 'Actif ajouté avec succes');
    setTriggerNotification(false);
  }, [triggerNotification]);

  const assetAddingModal = () => {
    return (
      <Modal
        modalClassName='modal-default'
        size='xl'
        isOpen={addAssetModal}
        toggle={toggleAssetAddingModal}>
        <ModalHeader>
          <h3>Ajout d'actif</h3>
          <button
            aria-label='Close'
            className='close'
            onClick={toggleAssetAddingModal}>
            <i className='tim-icons icon-simple-remove' />
          </button>
        </ModalHeader>
        <ModalBody>
          <AssetAddingForm
            crew={crew}
            setCrew={setCrew}
            setTriggerNotification={setTriggerNotification}
            setAddAssetModal={setAddAssetModal}
          />
        </ModalBody>
      </Modal>
    );
  };

  return (
    <div className='content'>
      <div className='react-notification-alert-container'>
        <NotificationAlert ref={notificationAlertRef} />
      </div>
      <Row>
        <Col xs='12'>
          {assetAddingModal()}
          <div className='d-flex flex-row justify-content-between'>
            <div className='d-flex flex-row'>
              <div className='crew-icon-image mr-2'>
                <img alt='...' src={crew.image} />
              </div>
              <h1 className='mt-2'>{crew.name}</h1>
            </div>
            <div className='float-right'>
              <button
                className='btn btn-success'
                onClick={() => toggleAssetAddingModal()}>
                Ajouter un actif
              </button>
            </div>
          </div>
          <Card className='card-chart'>
            <CardHeader>
              <CardTitle tag={'h2'}>Valorisation totale du crew</CardTitle>
            </CardHeader>
            <CardBody>
              <div className='d-flex flex-row align-items-center justify-content-around'>
                <div className='d-flex flex-column align-items-center mr-1'>
                  <h3>{crew.value} €</h3>
                  <h4
                    className={
                      crew.performance > 0 ? 'text-success' : 'text-danger'
                    }>
                    {crew.performance > 0 ? '+' : ''}
                    {crew.performance} %
                  </h4>
                </div>
                <div className='chart-area w-75'>
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
          <Row>
            <Col lg='6' md='12'>
              <Card className='card-tasks'>
                <CardHeader>
                  <CardTitle tag='h4'>Participation du crew</CardTitle>
                </CardHeader>
                <CardBody>
                  <CrewBalance
                    participants={crew.membersInfo}
                    crewValue={crew.value}
                  />
                </CardBody>
              </Card>
            </Col>
            <Col lg='6' md='12'>
              <Card className='card-tasks'>
                <CardHeader>
                  <CardTitle tag='h4'>Actifs du crew</CardTitle>
                </CardHeader>
                <CardBody>
                  <AssetTable
                    assetsInfo={crewAssetsInfo}
                    setAssetsInfo={setCrewAssetsInfo}
                    reducedDisplay={true}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
