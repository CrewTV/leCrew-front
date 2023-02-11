/* Sample data for Crew resource*/
const sampleCrews = [
  {
    id: 1,
    name: 'Crew #1',
    performance: 3.6,
    value: 45.8,
    image: require('assets/img/react-logo.png'),
    assetsInfo: [
      {
        id: 1,
        quantity: 2,
        performance: 4.3,
      },
      {
        id: 2,
        quantity: 12,
        performance: -0.6,
      },
    ],
    votesInfo: [
      {
        assetId: 1,
        quantity: 3,
        buyerId: 1,
        type: 'buy',
        date: '2023-03-02T22:18:26.625Z',
        delay: '24',
        pending: true,
      },
    ],
    membersInfo: [
      {
        id: 1,
        balance: 25.6,
      },
      {
        id: 2,
        balance: 20.2,
      },
      {
        id: 3,
        balance: -18.4,
      },
      {
        id: 4,
        balance: -38.4,
      },
    ],
  },
  {
    id: 2,
    name: 'Crew #2',
    performance: -4.8,
    value: 147.32,
    image: require('assets/img/angular-logo.png'),
    assetsInfo: [
      {
        id: 1,
        quantity: 1,
        performance: 4.3,
      },
      {
        id: 2,
        quantity: 6,
        performance: -0.6,
      },
    ],
    votesInfo: [],
    membersInfo: [
      {
        id: 1,
        balance: 25.6,
      },
      {
        id: 2,
        balance: 20.2,
      },
      {
        id: 3,
        balance: -18.4,
      },
      {
        id: 4,
        balance: -38.4,
      },
    ],
  },
];

const addCrewAsset = (crew, newAssetInfo) => {
  const index = crew.assetsInfo.findIndex(
    (assetInfo) => assetInfo.id === newAssetInfo.id
  );
  if (index === -1) crew.assetInfo.push(newAssetInfo);
  else crew.assetsInfo[index].quantity += newAssetInfo.quantity;
  return crew;
};

module.exports = { sampleCrews, addCrewAsset };
