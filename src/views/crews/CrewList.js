import CrewCreationForm from 'components/crews/CrewCreation.form';
import CrewTable from 'components/crews/CrewTable';
import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';

export default function CrewList({}) {
  const crews = [
    {
      name: 'Crew #1',
      performance: 3.6,
      value: 45.8,
      image: require('assets/img/react-logo.png'),
    },
    {
      name: 'Crew #2',
      performance: -4.8,
      value: 147.32,
      image: require('assets/img/angular-logo.png'),
    },
  ];

  const [createCrewModal, setCreateCrewModal] = useState(false);

  const toggleCreateCrewModal = () => {
    setCreateCrewModal(!createCrewModal);
  };

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
          <CrewCreationForm />
        </ModalBody>
      </Modal>
    );
  };

  return (
    <div className='content'>
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
