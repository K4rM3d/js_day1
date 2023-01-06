function myObjectValues(objet) {
  let table = [];
  for (const [key, value] of Object.entries(objet)) {
    table.push(`${key}: ${value}`);
  }
  table.pop();

  return table.join(", ");
}

module.exports = myObjectValues;
