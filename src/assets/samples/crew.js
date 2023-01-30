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
        percentage: -18.4,
      },
      {
        id: 4,
        percentage: -38.4,
      },
    ],
  },
];

module.exports = { sampleCrews };
