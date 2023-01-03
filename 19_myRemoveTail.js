function myRemoveTail(table) {
  if (table.length === 1) return [""];

  table.pop();
  return table;
}

module.exports = myRemoveTail;
