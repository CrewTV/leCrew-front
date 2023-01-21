import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CrewTable({ crews, reducedDisplay }) {
  return (
    <Table>
      <thead className='text-primary'>
        <tr>
          <th>Nom</th>
          <th className={reducedDisplay ? 'text-right' : ''}>Valorisation</th>
          {!reducedDisplay && <th className='text-center'>Performance</th>}
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
              <td className={reducedDisplay ? 'text-right' : ''}>
                {crew.value} €
              </td>
              {!reducedDisplay && (
                <td className='text-center'>
                  <h4
                    className={
                      crew.performance > 0 ? 'text-success' : 'text-danger'
                    }>
                    {crew.performance > 0 ? '+' : ''}
                    {crew.performance} %
                  </h4>
                </td>
              )}
              {!reducedDisplay && (
                <td className='text-right'>
                  <button className='btn btn-info'>
                    <Link to={`/crew/${crew.id}`} className='fixed-link'>
                      Details
                    </Link>
                  </button>
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

CrewTable.propTypes = {
  crews: PropTypes.array.isRequired,
  reducedDisplay: PropTypes.bool, // Designates wheter to display less information in the component
};
