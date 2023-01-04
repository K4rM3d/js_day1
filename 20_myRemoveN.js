function myRemoveN(table, index) {
  if (index > table.length - 1) return table;
  table.splice(index, 1);
  return table;
}

module.exports = myRemoveN;
