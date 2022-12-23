import CrewTable from 'components/crews/CrewTable';
import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Col,
  Row,
} from 'reactstrap';

export default function CrewList({}) {
  const crews = [
    {
      name: 'Crew #1',
      performance: 3.6,
      image: require('assets/img/react-logo.png'),
    },
    {
      name: 'Crew #2',
      performance: -4.8,
      image: require('assets/img/angular-logo.png'),
    },
  ];

  return (
    <div className='content'>
      <Row>
        <Col md='12'>
          <Card>
            <CardHeader>
              <CardTitle tag='h2'>Mes Crews</CardTitle>
              <div className='float-right'>
                <button className='btn btn-success'>Créer un Crew</button>
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
