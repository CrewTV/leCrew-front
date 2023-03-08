const { sampleAssets } = require('./asset');

/* Sample data for Crew resource*/
const sampleCrews = [
  {
    id: 1,
    name: 'Crew #1',
    performance: 3.6,
    value: 388.04,
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
        quantity: 1,
        buyerId: 2,
        delay: '1',
        type: 'buy',
        pending: true,
        votes: 3,
        declined: false,
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
    value: 194.02,
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
        balance: -81.6,
      },
      {
        id: 2,
        balance: 54.8,
      },
      {
        id: 3,
        balance: -18.4,
      },
      {
        id: 4,
        balance: 46.2,
      },
    ],
  },
];

const addCrewAsset = (crew, newAssetInfo, buyderId) => {
  const index = crew.assetsInfo.findIndex(
    (assetInfo) => assetInfo.id === newAssetInfo.id
  );
  if (index === -1) crew.assetInfo.push(newAssetInfo);
  else crew.assetsInfo[index].quantity += newAssetInfo.quantity;
  const totalPrice = newAssetInfo.quantity * sampleAssets[0].currentPrice;
  crew.membersInfo.forEach((memberInfo) => {
    if (memberInfo.id !== buyderId)
      memberInfo.balance -= totalPrice / crew.membersInfo.length;
    else memberInfo.balance += totalPrice / crew.membersInfo.length;
  });
  return crew;
};

module.exports = { sampleCrews, addCrewAsset };
