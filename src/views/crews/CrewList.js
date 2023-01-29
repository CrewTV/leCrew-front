import CrewCreationForm from 'components/Crews/CrewCreation.form';
import CrewTable from 'components/Crews/CrewTable';
import NotificationAlert from 'react-notification-alert';
import React, { useState, useEffect } from 'react';
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

export default function CrewList({}) {
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

  const [crews, setCrews] = useState(sampleCrews);
  const [createCrewModal, setCreateCrewModal] = useState(false);
  const [triggerNotification, setTriggerNotification] = useState(false);

  const toggleCreateCrewModal = () => {
    setCreateCrewModal(!createCrewModal);
  };

  // Trigger a notification when needed
  useEffect(() => {
    if (triggerNotification) notify('tr', 'success', 'Crew crée avec succès');
    setTriggerNotification(false);
  }, [triggerNotification]);

  const crewCreationModal = () => {
    return (
      <Modal
        modalClassName='modal-default'
        size='lg'
        isOpen={createCrewModal}
        toggle={toggleCreateCrewModal}>
        <ModalHeader>
          <h3>Création de Crew</h3>
          <button
            aria-label='Close'
            className='close'
            onClick={toggleCreateCrewModal}>
            <i className='tim-icons icon-simple-remove' />
          </button>
        </ModalHeader>
        <ModalBody>
          <CrewCreationForm
            crews={crews}
            setCrews={setCrews}
            setCreateCrewModal={setCreateCrewModal}
            setTriggerNotification={setTriggerNotification}
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
        <Col md='12'>
          {crewCreationModal()}
          <Card>
            <CardHeader>
              <CardTitle tag='h2'>Mes Crews</CardTitle>
              <div className='float-right'>
                <button
                  className='btn btn-success'
                  onClick={() => toggleCreateCrewModal()}>
                  Créer un Crew
                </button>
              </div>
            </CardHeader>
            <CardBody>
              <div className='px-1 '>
                <CrewTable crews={crews} fromDashboard={false} />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

CrewList.propTypes = {};
