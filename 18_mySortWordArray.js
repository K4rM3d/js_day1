function mySortWordArray(string) {
  if (string.length === 0) return [];

  return string.split(" ").sort();
}

module.exports = mySortWordArray;
