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
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from 'variables/charts.js';

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState('data1');
  const setBgChartData = (name) => {
    setbigChartData(name);
  };

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
                      <h3>125.41€</h3>
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
              <CardBody></CardBody>
            </Card>
          </Col>
          <Col lg='6' md='12'>
            <Card className='card-tasks'>
              <CardHeader>
                <CardTitle tag='h4'>Mes actifs</CardTitle>
              </CardHeader>
              <CardBody></CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
