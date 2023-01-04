function mySum(table) {
  if (table.length === 0) return 0;
  if (table.length === 1) return table[0];
  let total = table.reduce((a, b) => a + b);
  return total;
}

module.exports = mySum;
