import React, { useState, useEffect, useContext } from 'react';
import { Card, CardHeader, CardBody, CardTitle, Col, Row } from 'reactstrap';
import AssetTable from 'components/Assets/AssetTable';
import UserContext from 'contexts/UserContext';

export default function AssetList({}) {
  const { user } = useContext(UserContext);

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
              <AssetTable
                assetsInfo={user.assetsInfo}
                reducedDisplay={false}
                allowDelete={false}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

AssetList.propTypes = {};
