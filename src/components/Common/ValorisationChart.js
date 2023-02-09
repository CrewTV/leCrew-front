import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col,
  ButtonGroup,
  Button,
} from 'reactstrap';
import classNames from 'classnames';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';

export default function ValorisationChart({ title, valorisation, chart }) {
  const [timeScale, setTimeScale] = useState('week');
  return (
    <Card className='card-chart'>
      <CardHeader>
        <div className='d-flex flex-row justify-content-between'>
          <Col className='text-left' sm='6'>
            <CardTitle tag='h3'>{title}</CardTitle>
          </Col>

          <div className='d-flex flex-row justify-content-between align-items-start'>
            {valorisation}
            <Col sm='6'>
              <ButtonGroup
                className='btn-group-toggle float-right'
                data-toggle='buttons'>
                <Button
                  tag='label'
                  className={classNames('btn-simple', {
                    active: timeScale === 'day',
                  })}
                  color='info'
                  id='0'
                  size='sm'
                  onClick={() => setTimeScale('day')}>
                  <span className='d-none d-sm-block d-md-block d-lg-block d-xl-block'>
                    Jour
                  </span>
                  <span className='d-block d-sm-none'>D</span>
                </Button>
                <Button
                  color='info'
                  id='1'
                  size='sm'
                  tag='label'
                  className={classNames('btn-simple', {
                    active: timeScale === 'week',
                  })}
                  onClick={() => setTimeScale('week')}>
                  <span className='d-none d-sm-block d-md-block d-lg-block d-xl-block'>
                    Semaine
                  </span>
                  <span className='d-block d-sm-none'>S</span>
                </Button>
                <Button
                  color='info'
                  id='2'
                  size='sm'
                  tag='label'
                  className={classNames('btn-simple', {
                    active: timeScale === 'month',
                  })}
                  onClick={() => setTimeScale('month')}>
                  <span className='d-none d-sm-block d-md-block d-lg-block d-xl-block'>
                    Mois
                  </span>
                  <span className='d-block d-sm-none'>M</span>
                </Button>
              </ButtonGroup>
            </Col>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className='chart-area'>
          <Line data={chart[timeScale]} options={chart.options} />
        </div>
      </CardBody>
    </Card>
  );
}
