function myRemoveDuplicate(table) {
  let unique = [...new Set(table)];
  return unique;
}

module.exports = myRemoveDuplicate;
