import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function AssetTable({ assets, reducedDisplay }) {
  return (
    <Table>
      <thead className='text-primary'>
        <tr>
          <th>Nom</th>
          <th className={reducedDisplay ? 'text-right' : 'text-center'}>
            Valorisation
          </th>
          {!reducedDisplay && <th className='text-center'>Quantité</th>}
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

              <td className={reducedDisplay ? 'text-right' : 'text-center'}>
                <p
                  className={
                    asset.performance > 0 ? 'text-success' : 'text-danger'
                  }>
                  {asset.value} € / {asset.performance > 0 ? '+' : ''}
                  {asset.performance} %
                </p>
              </td>
              {!reducedDisplay && (
                <td className='text-center'>
                  <p>{asset.quantity}</p>
                </td>
              )}
              {!reducedDisplay && (
                <td className='text-right'>
                  <button className='btn btn-info'>
                    <Link to={`/asset/${asset.id}`} className='fixed-link'>
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

AssetTable.propTypes = {
  assets: PropTypes.array.isRequired,
  reducedDisplay: PropTypes.bool, // Designates wheter to display less information in the component
};
