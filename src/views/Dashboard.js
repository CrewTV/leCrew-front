/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useContext } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2';
import UserContext from '../contexts/UserContext';

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from 'reactstrap';

// core components
import { chartExample1 } from 'variables/charts.js';
import CrewTable from 'components/Crews/CrewTable';
import AssetTable from 'components/Assets/AssetTable';

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState('data1');

  const { user } = useContext(UserContext);
  // Mock data, to be replace by API call
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
  const assets = [
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

  return (
    <>
      <div className='content'>
        <Row>
          <Col xs='12'>
            <Card className='card-chart'>
              <CardHeader>
                <Row>
                  <Col className='text-left' sm='6'>
                    <h5 className='card-category'>Valorisation totale</h5>
                    <CardTitle tag='h2'>Performance de la semaine</CardTitle>
                  </Col>
                  <Col sm='6'>
                    <div className='float-right'>
                      <CardTitle tag='h3'>128.14 €</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className='chart-area'>
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg='6' md='12'>
            <Card className='card-tasks'>
              <CardHeader>
                <CardTitle tag='h4'>Mes crews</CardTitle>
              </CardHeader>
              <CardBody>
                <CrewTable crews={crews} fromDashboard={true} />
              </CardBody>
            </Card>
          </Col>
          <Col lg='6' md='12'>
            <Card className='card-tasks'>
              <CardHeader>
                <CardTitle tag='h4'>Mes actifs</CardTitle>
              </CardHeader>
              <CardBody>
                <AssetTable assets={assets} fromDashboard={true} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
