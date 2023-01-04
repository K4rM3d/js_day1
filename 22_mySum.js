function mySum(table) {
  // if (table.length === 0) return 0;
  let total = table.reduce((a, b) => a + b, 0);
  return total;
}

module.exports = mySum;
