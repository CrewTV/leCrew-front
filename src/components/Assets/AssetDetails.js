import { chartExample2 } from 'variables/charts.js';
import { Line } from 'react-chartjs-2';
import { sampleassets } from 'assets/samples/asset';

export default function AssetDetails({ asset }) {
  return (
    <div className='d-flex flex-column align-items-start justify-content-around'>
      <div className='d-flex flex-row align-items-center mr-1'>
        <h3>{asset.currentPrice} €</h3>
        <h4
          className={asset.dayPerformance > 0 ? 'text-success' : 'text-danger'}>
          {asset.dayPerformance > 0 ? '+' : ''}
          {asset.dayPerformance} %
        </h4>
      </div>
      <div className='d-flex flex-row justify-content-between chart-area w-100 asset-details-chart'>
        <div className='d-flex flex-column justify-content-around'>
          <div className='d-flex flex-row'>
            <h4 className='mr-1'>Bourse:</h4>
            {asset.exchange}
          </div>
          <div className='d-flex flex-row'>
            <h4 className='mr-1'>Ouverture:</h4>
            {asset.openPrice} €
          </div>
          <div className='d-flex flex-row'>
            <h4 className='mr-1'>Cloture veille:</h4>
            {asset.closingPrice} €
          </div>
        </div>
        <div className='w-75'>
          <Line data={chartExample2.data} options={chartExample2.options} />
        </div>
      </div>
    </div>
  );
}
