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

export default function CrewDescription({}) {
  // Mock data, to be replace by API call
  const initialCrews = [
    {
      id: 1,
      name: 'Crew #1',
      performance: 3.6,
      value: 45.8,
      image: require('assets/img/react-logo.png'),
    },
    {
      id: 2,
      name: 'Crew #2',
      performance: -4.8,
      value: 147.32,
      image: require('assets/img/angular-logo.png'),
    },
  ];

  const participants = [
    {
      owner: 'Jean',
      percentage: 42,
    },
    {
      owner: 'Benjamin',
      percentage: 21,
    },
    {
      owner: 'Emilie',
      percentage: 18,
    },
    {
      owner: 'Clémence',
      percentage: 19,
    },
  ];
  const { id } = useParams();
  // Replace by API call
  const crew = initialCrews.find((initialCrew) => initialCrew.id == id);
  const [bigChartData, setbigChartData] = React.useState('data1');

  return (
    <div className='content'>
      <Row>
        <Col xs='12'>
          <div className='d-flex flex-row'>
            <div className='crew-icon-image mr-2'>
              <img alt='...' src={crew.image} />
            </div>
            <h1 className='mt-2'>{crew.name}</h1>
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
                  <CrewParticipants
                    participants={participants}
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
                <CardBody>/* Values index view */</CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
