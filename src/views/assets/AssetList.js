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
  const initialAssets = [
    {
      id: 1,
      name: 'Apple',
      quantity: 0.6,
      value: 131.19,
      performance: 4.3,
      image: require('assets/img/apple-logo.png'),
      associatedCrews: ['Crew #1'], // Use Id instead of name in API call
    },
    {
      id: 2,
      name: 'Orange',
      quantity: 17,
      value: 9.88,
      performance: -1.8,
      image: require('assets/img/orange-logo.png'),
      associatedCrews: ['Crew #2'], // Use Id instead of name in API call
    },
  ];

  const [assets, setAssets] = useState(initialAssets);

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
