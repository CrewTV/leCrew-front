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
import { sampleCrews } from 'assets/samples/crew';
import { sampleAssets } from 'assets/samples/asset';

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState('data1');

  const { user } = useContext(UserContext);

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
                <CrewTable crews={sampleCrews} reducedDisplay={true} />
              </CardBody>
            </Card>
          </Col>
          <Col lg='6' md='12'>
            <Card className='card-tasks'>
              <CardHeader>
                <CardTitle tag='h4'>Mes actifs</CardTitle>
              </CardHeader>
              <CardBody>
                <AssetTable assets={sampleAssets} reducedDisplay={true} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
