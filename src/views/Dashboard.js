import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

import { Card, CardHeader, CardBody, CardTitle, Row, Col } from 'reactstrap';
import { valorisationCharts } from 'assets/samples/charts';
import CrewTable from 'components/Crews/CrewTable';
import AssetTable from 'components/Assets/AssetTable';
import { sampleCrews } from 'assets/samples/crew';
import ValorisationChart from 'components/Common/ValorisationChart';

function Dashboard(props) {
  const { user } = useContext(UserContext);

  // Recover the crew associated to the user
  const userCrews = user.crews.map((userCrew) =>
    sampleCrews.find((sampleCrew) => sampleCrew.id === userCrew.id)
  );

  return (
    <>
      <div className='content'>
        <Row>
          <Col xs='12'>
            <ValorisationChart
              title={'Valorisation'}
              valorisation={<h4>${user.totalValue} €</h4>}
              chart={valorisationCharts}
            />
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
