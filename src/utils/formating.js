/*
 * Format number with only two decimals
 * Example: 2.665415 -> 2.67
 */
const formatNumber = (number) => {
  return number.toFixed(2);
};

module.exports = { formatNumber };
