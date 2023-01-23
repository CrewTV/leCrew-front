/* Sample data for user resource*/
const sampleUser = {
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
};

module.exports = { sampleUser };
