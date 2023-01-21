import React, { useContext } from 'react';
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

import { Line, Bar } from 'react-chartjs-2';
import { chartExample1 } from 'variables/charts.js';
import CrewParticipants from 'components/Crews/CrewParticipations';
import AssetDetails from 'components/Assets/AssetDetails';

export default function AssetDesription({}) {
  // Mock data, to be replace by API call
  const initialAssets = [
    {
      id: 1,
      name: 'Apple',
      quantity: 0.6,
      value: 131.19,
      performance: 4.3,
      image: require('assets/img/apple-logo.png'),
      associatedCrew: 'Crew #1', // Use Id instead of name in API call
    },
    {
      id: 2,
      name: 'Orange',
      quantity: 17,
      value: 9.88,
      performance: -1.8,
      image: require('assets/img/orange-logo.png'),
      associatedCrew: 'Crew #2', // Use Id instead of name in API call
    },
  ];

  // Recover the id in the query params
  const id = parseInt(useParams().id, 10);
  // Replace by API call
  const asset = initialAssets.find((initialAsset) => initialAsset.id === id);
  const [bigChartData, setbigChartData] = React.useState('data1');

  return (
    <div className='content'>
      <Row>
        <Col xs='12'>
          <div className='d-flex flex-row align-items-center'>
            <div className='crew-icon-image mr-2'>
              <img alt='...' src={asset.image} />
            </div>
            <h1 className='mt-2'>{asset.name}</h1>
          </div>
          <Card className='card-chart'>
            <CardHeader>
              <CardTitle tag={'h2'}>Valorisation totale de l'actif</CardTitle>
            </CardHeader>
            <CardBody>
              <div className='d-flex flex-row align-items-center justify-content-around'>
                <div className='d-flex flex-column align-items-center mr-1'>
                  <h3>{asset.value} €</h3>
                  <h4
                    className={
                      asset.performance > 0 ? 'text-success' : 'text-danger'
                    }>
                    {asset.performance > 0 ? '+' : ''}
                    {asset.performance} %
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
                  <CardTitle tag='h3'>Détails</CardTitle>
                </CardHeader>
                <CardBody>
                  <AssetDetails assetId={id} />
                </CardBody>
              </Card>
            </Col>
            <Col lg='6' md='12'>
              <Card className='card-tasks'>
                <CardHeader>
                  <CardTitle tag='h3'></CardTitle>
                </CardHeader>
                <CardBody>/*Répartition dans les crew*/</CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
