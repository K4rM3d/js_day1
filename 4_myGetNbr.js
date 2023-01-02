function getNbr(nbr) {
  let value;
  if (nbr > 0) {
    value = "+";
  } else if (nbr < 0) {
    value = "-";
  } else {
    value = "0";
  }

  return value;
}

module.exports = getNbr;
