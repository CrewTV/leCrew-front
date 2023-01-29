import React, { useContext, useState } from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserContext from 'contexts/UserContext';
import { sampleAssets } from 'assets/samples/asset';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function AssetTable({ assetsInfo, reducedDisplay, crew }) {
  const { user } = useContext(UserContext);

  const assets = assetsInfo.map((assetInfo) =>
    sampleAssets.find((sampleAsset) => sampleAsset.id === assetInfo.id)
  );

  const [deleteAssetModal, setDeleteAssetModal] = useState(false);

  const toggleAssetDeletionModal = (assetId) => {
    setDeleteAssetModal(!deleteAssetModal);
  };

  const assetDeletion = (assetId) => {
    crew.assetsInfo = crew.assetsInfo.filter(
      (assetInfo) => assetInfo.id !== assetId
    );
    console.log('Crew:', crew);
    toggleAssetDeletionModal();
  };

  const assetDeletionModal = () => {
    return (
      <Modal
        modalClassName='modal-default'
        isOpen={deleteAssetModal}
        toggle={toggleAssetDeletionModal}>
        <ModalHeader>
          <h3>Attention</h3>
          <h4>Etes vous sûr de vouloir supprimer cet actif ?</h4>
          <button
            aria-label='Close'
            className='close'
            onClick={toggleAssetDeletionModal}>
            <i className='tim-icons icon-simple-remove' />
          </button>
        </ModalHeader>
        <ModalBody>
          <div></div>
        </ModalBody>
        <ModalFooter>
          <btn className='btn btn-info' onClick={toggleAssetDeletionModal}>
            Retour
          </btn>
          <btn className='btn btn-danger' onClick={assetDeletion}>
            Supprimer
          </btn>
        </ModalFooter>
      </Modal>
    );
  };

  return (
    <Table>
      {assetDeletionModal()}
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
              {crew && (
                <td className='text-right'>
                  <button
                    type='button'
                    className='btn btn-warning btn-sm m-0 ml-1'>
                    <i
                      className='tim-icons icon-trash-simple text-white'
                      onClick={() => toggleAssetDeletionModal(assetInfo.id)}
                    />
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
  crew: PropTypes.object, // Crew is defined only when the component is loaded from the CrewDescription component
};
