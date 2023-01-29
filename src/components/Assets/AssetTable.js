import React, { useContext } from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserContext from 'contexts/UserContext';
import { sampleAssets } from 'assets/samples/asset';

export default function AssetTable({
  assetsInfo,
  reducedDisplay,
  allowDelete,
}) {
  const { user } = useContext(UserContext);

  const assets = assetsInfo.map((assetInfo) =>
    sampleAssets.find((sampleAsset) => sampleAsset.id === assetInfo.id)
  );

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
          const assetInfo = assetsInfo[index];
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
                    assetInfo.performance > 0 ? 'text-success' : 'text-danger'
                  }>
                  {assetInfo.quantity * asset.currentPrice} € /
                  {assetInfo.performance > 0 ? '+' : ''}
                  {assetInfo.performance} %
                </p>
              </td>
              {!reducedDisplay && (
                <td className='text-center'>
                  <p>{assetInfo.quantity}</p>
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
              {allowDelete && (
                <td className='text-right'>
                  <button
                    type='button'
                    className='btn btn-warning btn-sm m-0 ml-1'>
                    <i className='tim-icons icon-trash-simple text-white' />
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
  assetsInfo: PropTypes.array.isRequired, // Information about the asset: id, quantity
  reducedDisplay: PropTypes.bool, // Designates wheter to display less information in the component
  allowDelete: PropTypes.bool, // Designates whether we want to allow the asset deletion in the component
};
