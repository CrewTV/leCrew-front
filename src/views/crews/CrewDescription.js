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
import { sampleCrews } from 'assets/samples/crew';
import AssetTable from 'components/Assets/AssetTable';
import AssetAddingForm from 'components/Assets/AssetAddingForm';
import CrewBalance from 'components/Crews/CrewBalance';
import { sampleAssets } from 'assets/samples/asset';
import ValorisationChart from 'components/Common/ValorisationChart';
import { valorisationCharts } from 'assets/samples/charts';
import { addCrewAsset } from 'assets/samples/crew';

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

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const validateSampleVote = (proceed = false) => {
    if (!proceed) {
      crew.votesInfo = [];
      setCrew(crew);
      forceUpdate();
      return;
    }
    const assetInfo = {
      id: 1,
      quantity: 1,
      performance: 0,
    };

    const newCrew = addCrewAsset(crew, assetInfo, 2);
    newCrew.votesInfo = [];
    setCrew(newCrew);
    setCrewAssetsInfo(crew.assetsInfo);
    forceUpdate();
  };

  // Trigger a notification when needed
  useEffect(() => {
    if (triggerNotification)
      notify('tr', 'success', 'Vote proposé avec succes');
    setTriggerNotification(false);
  }, [triggerNotification]);

  const assetAddingModal = () => {
    return (
      <Modal
        modalClassName='modal-default fade'
        size='xl'
        isOpen={addAssetModal}
        toggle={toggleAssetAddingModal}>
        <ModalHeader>
          <h3>Proposer un vote</h3>
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

  const deleteCrewAsset = (assetId) => {
    const crewAssetInfo = crew.assetsInfo.find(
      (crewAsset) => crewAsset.id === assetId
    );
    const rawAsset = sampleAssets.find(
      (sampleAsset) => sampleAsset.id === assetId
    );

    const priceByParticipant =
      (crewAssetInfo.quantity * rawAsset.currentPrice) /
      crew.membersInfo.length;

    crew.membersInfo.forEach((memberInfo, index) => {
      if (memberInfo.balance > 0)
        crew.membersInfo[index].balance -= priceByParticipant;
      else crew.membersInfo[index].balance += priceByParticipant;
    });

    crew.assetsInfo = crew.assetsInfo.filter(
      (assetInfo) => assetInfo.id !== assetId
    );

    setCrew(crew);
    setCrewAssetsInfo(crew.assetsInfo);
  };

  useEffect(() => {
    setCrew(crew);
  }, [crew]);

  return (
    <div className='content'>
      <div className='react-notification-alert-container'>
        <NotificationAlert ref={notificationAlertRef} />
      </div>
      <Row>
        <Col xs='12'>
          {assetAddingModal()}
          <div className='d-flex flex-row justify-content-between'>
            <div className='d-flex flex-row align-items-center'>
              <div className='crew-icon-image mr-2'>
                <img alt='...' src={crew.image} />
              </div>
              <h2 className='mt-2'>{crew.name}</h2>
            </div>
            <div className='float-right'>
              <button
                className='btn btn-success'
                onClick={() => toggleAssetAddingModal()}>
                Proposer un vote
              </button>
            </div>
          </div>
          <ValorisationChart
            title={'Valorisation du crew'}
            valorisation={
              <div className='d-flex flex-row align-items-baseline mr-1'>
                <h4>{crew.value} €</h4>
                <p
                  className={
                    crew.performance > 0 ? 'text-success' : 'text-danger'
                  }>
                  {crew.performance > 0 ? '+' : ''}
                  {crew.performance} %
                </p>
              </div>
            }
            chart={valorisationCharts}
          />
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
                    deleteCrewAsset={deleteCrewAsset}
                    reducedDisplay={true}
                    votesInfo={crew.votesInfo}
                    validateSampleVote={validateSampleVote}
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
