function myAgeFilter(tables) {
  let result = tables.filter((table) => table > 17);
  return result;
}

module.exports = myAgeFilter;
