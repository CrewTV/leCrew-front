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
import AssetDetails from 'components/Assets/AssetDetails';
import { sampleAssets } from 'assets/samples/asset';
import CrewTable from 'components/Crews/CrewTable';
import { sampleCrews } from 'assets/samples/crew';
import { formatNumber } from 'utils/formating';
import ValorisationChart from 'components/Common/ValorisationChart';
import { valorisationCharts } from 'assets/samples/charts';

export default function AssetDesription({}) {
  // Recover the id in the query params
  const id = parseInt(useParams().id, 10);

  // Replace by API call
  const asset = sampleAssets.find((sampleAsset) => sampleAsset.id === id);
  const associatedCrews = sampleCrews.filter((sampleCrew) =>
    sampleCrew.assetsInfo.find((assetInfo) => assetInfo.id === asset.id)
  );
  let totalValue = 0;
  let totalQuantity = 0;
  let totalPerformance = 0;
  associatedCrews.forEach((crew) => {
    const info = crew.assetsInfo.find((assetInfo) => assetInfo.id === asset.id);
    totalValue += info.quantity * asset.currentPrice;
    totalQuantity += info.quantity;
    totalPerformance += info.performance;
  });
  totalPerformance /= totalQuantity;

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
          <ValorisationChart
            title={'Ma valorisation'}
            valorisation={
              <div>
                <div className='d-flex flex-row align-items-center'>
                  <h3>{totalValue} € /</h3>
                  <p
                    className={
                      totalPerformance > 0 ? 'text-success' : 'text-danger'
                    }>
                    {totalPerformance > 0 ? '+' : ''}
                    {formatNumber(totalPerformance)} %
                  </p>
                </div>
                Quantité: {totalQuantity}
              </div>
            }
            chart={valorisationCharts}
          />
          <Row>
            <Col lg='6' md='12'>
              <Card className='card-tasks'>
                <CardHeader>
                  <CardTitle tag='h3'>Détails de l'actif</CardTitle>
                </CardHeader>
                <CardBody>
                  <AssetDetails asset={asset} />
                </CardBody>
              </Card>
            </Col>
            <Col lg='6' md='12'>
              <Card className='card-tasks'>
                <CardHeader>
                  <CardTitle tag='h3'>Mes crews associés</CardTitle>
                </CardHeader>
                <CardBody>
                  <CrewTable crews={associatedCrews} reducedDisplay={true} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
