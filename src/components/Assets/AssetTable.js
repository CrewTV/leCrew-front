import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function AssetTable({ assets, fromDashboard }) {
  return (
    <Table>
      <thead className='text-primary'>
        <tr>
          <th>Nom</th>
          <th>Crew</th>
          <th className={fromDashboard ? 'text-right' : 'text-center'}>
            Valorisation
          </th>
          {!fromDashboard && <th className='text-center'>Quantité</th>}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {assets.map((asset, index) => {
          return (
            <tr key={index}>
              <td>
                <div className='d-flex flex-row align-items-baseline'>
                  <div className='photo mr-2'>
                    <img alt='...' src={asset.image} />
                  </div>
                  <h4>{asset.name}</h4>
                </div>
              </td>
              <td>{asset.associatedCrew}</td>
              <td className={fromDashboard ? 'text-right' : 'text-center'}>
                {asset.value} €
              </td>
              {!fromDashboard && (
                <td className='text-center'>
                  <h4>{asset.quantity}</h4>
                </td>
              )}
              {!fromDashboard && (
                <td className='text-right'>
                  <button className='btn btn-info'>Details</button>
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

AssetTable.propTypes = {
  assets: PropTypes.array.isRequired,
  fromDashboard: PropTypes.bool, // Designates wheter the component is loaded from the dashboard
};
