import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

export default function CrewTable({ crews, fromDashboard }) {
  return (
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
            <tr key={index}>
              <td>
                <div className='d-flex flex-row align-items-baseline'>
                  <div className='photo mr-2'>
                    <img alt='...' src={crew.image} />
                  </div>
                  <h4>{crew.name}</h4>
                </div>
              </td>
              <td className='text-right'>
                <h4
                  className={
                    crew.performance > 0 ? 'text-success' : 'text-danger'
                  }>
                  {crew.performance > 0 ? '+' : ''}
                  {crew.performance} %
                </h4>
              </td>
              {!fromDashboard ? (
                <td className='text-right'>
                  <button className='btn btn-info'>Details</button>
                </td>
              ) : null}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

CrewTable.propTypes = {
  crews: PropTypes.array.isRequired,
  fromDashboard: PropTypes.bool, // Designates wheter the component is loaded from the dashboard
};