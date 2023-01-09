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
import AssetTable from 'components/Assets/AssetTable';

export default function AssetList({}) {
  // Mock data, to be replace by API call
  const initialCrews = [
    {
      id: 1,
      name: 'Apple',
      quantity: 0.6,
      value: 131.19,
      image: require('assets/img/react-logo.png'),
      associatedCrew: 'Crew #1', // Use Id instead of name in API call
    },
    {
      id: 2,
      name: 'Orange',
      quantity: 17,
      value: 9.88,
      image: require('assets/img/react-logo.png'),
      associatedCrew: 'Crew #2', // Use Id instead of name in API call
    },
  ];

  const [assets, setAssets] = useState(initialCrews);

  return (
    <div className='content'>
      <Row>
        <Col md='12'>
          <Card>
            <CardHeader>
              <CardTitle tag='h2'>Mes Actifs</CardTitle>
            </CardHeader>
            <CardBody>
              <div className='px-1 '></div>
              <AssetTable assets={assets} fromDashboard={false} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

AssetList.propTypes = {};
