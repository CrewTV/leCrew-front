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
    },
    { name: 'Crew #2', performance: -4.8 },
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
                <Table>
                  <thead className='text-primary'>
                    <tr>
                      <th>Nom</th>
                      <th className='text-right'>Performance</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {crews.map((crew, index) => {
                      return (
                        <tr id={index}>
                          <td>
                            <h4>{crew.name}</h4>
                          </td>
                          <td className='text-right'>
                            <h4
                              className={
                                crew.performance > 0
                                  ? 'text-success'
                                  : 'text-danger'
                              }>
                              {crew.performance > 0 ? '+' : ''}
                              {crew.performance} %
                            </h4>
                          </td>
                          <td className='text-right'>
                            <button className='btn btn-info'>Details</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

CrewList.propTypes = {};
