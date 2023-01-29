import React, { useContext } from 'react';
// nodejs library that concatenates classes
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

  // Recover the crew associated to the user
  const userCrews = user.crews.map((userCrew) =>
    sampleCrews.find((sampleCrew) => sampleCrew.id === userCrew.id)
  );

  // Recover the assets associated to the user
  const userAssets = user.assetsInfo.map((userAsset) =>
    sampleAssets.find((sampleAsset) => sampleAsset.id === userAsset.id)
  );

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
                      <CardTitle tag='h3'>{user.totalValue} €</CardTitle>
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
                <CrewTable crews={userCrews} reducedDisplay={true} />
              </CardBody>
            </Card>
          </Col>
          <Col lg='6' md='12'>
            <Card className='card-tasks'>
              <CardHeader>
                <CardTitle tag='h4'>Mes actifs</CardTitle>
              </CardHeader>
              <CardBody>
                <AssetTable
                  assetsInfo={user.assetsInfo}
                  reducedDisplay={true}
                  allowDelete={false}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
