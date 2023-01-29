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
import { sampleAssets } from 'assets/samples/asset';

export default function AssetList({}) {
  const [assets, setAssets] = useState(sampleAssets);

  return (
    <div className='content'>
      <Row>
        <Col md='12'>
          <Card>
            <CardHeader>
              <CardTitle tag='h2'>Mes Actifs</CardTitle>
            </CardHeader>
            <CardBody>
              <div className='px-1'></div>
              <AssetTable assets={assets} fromDashboard={false} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

AssetList.propTypes = {};
