import { chartExample2 } from 'variables/charts.js';
import { Line } from 'react-chartjs-2';

export default function AssetDetails({ assetId }) {
  // Mock data, to be replace by API call
  const initialRawAssets = [
    {
      id: 1,
      name: 'Apple',
      exchange: 'NASDAQ',
      currentPrice: 135.94,
      openPrice: 134.76,
      closingPrice: 134.76,
      performance: 0.36,
    },
    {
      id: 2,
      name: 'Orange',
      exchange: 'CAC40',
      currentPrice: 9.68,
      openPrice: 9.68,
      closingPrice: 9.59,
      performance: 1.2,
    },
  ];

  const rawAsset = initialRawAssets.find(
    (initAssset) => initAssset.id === assetId
  );

  return (
    <div className='d-flex flex-column align-items-start justify-content-around'>
      <div className='d-flex flex-row align-items-center mr-1'>
        <h3>{rawAsset.currentPrice} €</h3>
        <h4
          className={rawAsset.performance > 0 ? 'text-success' : 'text-danger'}>
          {rawAsset.performance > 0 ? '+' : ''}
          {rawAsset.performance} %
        </h4>
      </div>
      <div className='d-flex flex-row justify-content-between chart-area w-100 asset-details-chart'>
        <div className='d-flex flex-column justify-content-around'>
          <div className='d-flex flex-row'>
            <h4 className='mr-1'>Bourse:</h4>
            {rawAsset.exchange}
          </div>
          <div className='d-flex flex-row'>
            <h4 className='mr-1'>Ouverture:</h4>
            {rawAsset.openPrice} €
          </div>
          <div className='d-flex flex-row'>
            <h4 className='mr-1'>Cloture veille:</h4>
            {rawAsset.closingPrice} €
          </div>
        </div>
        <div className='w-75'>
          <Line data={chartExample2.data} options={chartExample2.options} />
        </div>
      </div>
    </div>
  );
}
