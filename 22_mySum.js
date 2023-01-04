function mySum(table) {
  if (table.length < 2) return table;
  let total = table.reduce((a, b) => a + b);
  return total;
}

module.exports = mySum;
