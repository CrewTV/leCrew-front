/* Sample data for Asset resource*/
const sampleAssets = [
  {
    id: 1,
    name: 'Apple',
    exchange: 'NASDAQ',
    currentPrice: 135.94,
    openPrice: 134.76,
    closingPrice: 134.76,
    dayPerformance: 0.78,
    image: require('assets/img/apple-logo.png'),
  },
  {
    id: 2,
    name: 'Orange',
    exchange: 'CAC40',
    currentPrice: 9.68,
    openPrice: 9.68,
    closingPrice: 9.59,
    dayPerformance: -0.12,
    image: require('assets/img/orange-logo.png'),
  },
];

module.exports = { sampleAssets };
