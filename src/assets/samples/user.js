/* Sample data for user resource*/
const sampleUsers = [
  {
    id: 1,
    firstName: 'Robin',
    lastName: 'Hood',
    email: 'robin.hood@epita.fr',
    age: 21,
    totalValue: 128.14,
    crews: [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ],
    assetsInfo: [
      {
        id: 1,
        quantity: 0.6,
        performance: 4.3,
      },
      {
        id: 2,
        quantity: 2,
        performance: -0.6,
      },
    ],
  },
  {
    id: 2,
    firstName: 'Thibault',
    lastName: 'Boutet',
    email: 'thibault.boutet@epita.fr',
    age: 24,
    totalValue: 36.14,
    crews: [
      {
        id: 1,
      },
    ],
    assetsInfo: [
      {
        id: 1,
        quantity: 0.6,
        performance: 4.3,
      },
    ],
  },
  {
    id: 3,
    firstName: 'Marvin',
    lastName: 'Ambro',
    email: 'marvin.ambro@epita.fr',
    age: 48,
    totalValue: 87.28,
    crews: [
      {
        id: 1,
      },
    ],
    assetsInfo: [
      {
        id: 2,
        quantity: 4,
        performance: -0.6,
      },
    ],
  },
  {
    id: 4,
    firstName: 'Pénélope',
    lastName: 'Hood',
    email: 'penelope.hood@epita.fr',
    age: 34,
    totalValue: 10.54,
    crews: [
      {
        id: 1,
      },
    ],
    assetsInfo: [
      {
        id: 1,
        quantity: 0.6,
        performance: 4.3,
      },
    ],
  },
];

module.exports = { sampleUsers };
