function mySortWordArray(string) {
  if (string.length === 0) return [];

  string = string.split(" ");
  return string.sort();
}

module.exports = mySortWordArray;
