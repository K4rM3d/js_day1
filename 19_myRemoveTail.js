function myRemoveTail(table) {
  table.pop();
  if (table.length > 0) return table;

  return [];
}

module.exports = myRemoveTail;
