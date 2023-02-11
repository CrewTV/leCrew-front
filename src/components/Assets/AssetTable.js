import React, { useContext, useState } from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserContext from 'contexts/UserContext';
import { sampleAssets } from 'assets/samples/asset';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { sampleUsers } from 'assets/samples/user';

export default function AssetTable({
  assetsInfo,
  reducedDisplay,
  deleteCrewAsset,
  votesInfo,
}) {
  const { user } = useContext(UserContext);

  const assets = assetsInfo.map((assetInfo) =>
    sampleAssets.find((sampleAsset) => sampleAsset.id === assetInfo.id)
  );

  const [deleteAssetModal, setDeleteAssetModal] = useState(false);
  const [assetToDelete, setAssetToDelete] = useState(null);

  const toggleAssetDeletionModal = () => {
    setDeleteAssetModal(!deleteAssetModal);
  };

  const assetDeletion = () => {
    deleteCrewAsset(assetToDelete);
    toggleAssetDeletionModal();
  };

  const assetDeletionModal = () => {
    return (
      <Modal
        modalClassName='modal-default'
        isOpen={deleteAssetModal}
        toggle={toggleAssetDeletionModal}>
        <ModalHeader>
          <h5>Attention</h5>
          <p>Etes vous sûr de vouloir supprimer cet actif ?</p>
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
    <div className='d-flex flex-column'>
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
          {assets.length === 0 ? (
            <div className='d-flex align-items-center justify-content-center'>
              <h4>Aucun actif</h4>
            </div>
          ) : (
            assets.map((asset, index) => {
              const assetInfo = assetsInfo[index];
              return (
                <tr key={index}>
                  <td>
                    <div className='d-flex flex-row'>
                      <div className='photo mr-2'>
                        <img alt='...' src={asset.image} />
                      </div>
                      <h5>{asset.name}</h5>
                    </div>
                  </td>

                  <td className={reducedDisplay ? 'text-right' : 'text-center'}>
                    <p
                      className={
                        assetInfo.performance > 0
                          ? 'text-success'
                          : 'text-danger'
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
                      <Link to={`/asset/${asset.id}`} className='fixed-link'>
                        <button className='btn btn-info'>Détails</button>
                      </Link>
                    </td>
                  )}
                  {deleteCrewAsset && (
                    <td className='text-right'>
                      <button
                        type='button'
                        className='btn btn-warning btn-sm m-0 ml-1'>
                        <i
                          className='tim-icons icon-trash-simple text-white'
                          onClick={() => {
                            setAssetToDelete(assetInfo.id);
                            toggleAssetDeletionModal();
                          }}
                        />
                      </button>
                    </td>
                  )}
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
      {votesInfo && (
        <div className='mt-4'>
          <h4>Votes en cours</h4>
          <Table>
            <thead className='text-primary'>
              <tr>
                <th>Actif</th>
                <th>Quantité</th>
                <th>Acheteur</th>
                <th>Délai restant</th>
              </tr>
            </thead>
            <tbody>
              {votesInfo.length === 0 ? (
                <div className='d-flex align-items-center justify-content-center'>
                  <h4>Aucun vote en cours</h4>
                </div>
              ) : (
                votesInfo.map((voteInfo, index) => {
                  const associatedAsset = sampleAssets.find(
                    (sampleAsset) => sampleAsset.id === voteInfo.assetId
                  );
                  const associatedBuyer = sampleUsers.find(
                    (sampleUser) => sampleUser.id === voteInfo.buyerId
                  );
                  return (
                    <tr key={index}>
                      <td>{associatedAsset.name}</td>
                      <td>{voteInfo.quantity}</td>
                      <td>{associatedBuyer.firstName}</td>
                      <td>{voteInfo.delay} h</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
}

AssetTable.propTypes = {
  assetsInfo: PropTypes.array.isRequired, // Information about the asset: id, quantity
  setAssetsInfo: PropTypes.func, // Asset info setter, only defined when we need to udpate the asset information
  reducedDisplay: PropTypes.bool, // Designates wheter to display less information in the component
  votesInfo: PropTypes.array, // Information about the votes, only defined on crew description
};
