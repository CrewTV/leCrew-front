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
  },
];

const sampleCrewMembers = [
  {
    owner: 'Jean',
    percentage: 42,
  },
  {
    owner: 'Benjamin',
    percentage: 21,
  },
  {
    owner: 'Emilie',
    percentage: 18,
  },
  {
    owner: 'Clémence',
    percentage: 19,
  },
];

module.exports = { sampleCrews, sampleCrewMembers };
