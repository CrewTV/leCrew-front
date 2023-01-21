/* Sample data for Asset resource*/
const sampleAssets = [
  {
    id: 1,
    name: 'Apple',
    quantity: 0.25,
    value: 33.99,
    performance: 4.3,
    image: require('assets/img/apple-logo.png'),
    associatedCrews: [1],
  },
  {
    id: 2,
    name: 'Orange',
    quantity: 17,
    value: 9.88,
    performance: -1.8,
    image: require('assets/img/orange-logo.png'),
    associatedCrews: [2],
  },
];

const sampleRawAssets = [
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

module.exports = { sampleAssets, sampleRawAssets };
