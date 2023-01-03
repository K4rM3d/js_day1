function getNbr(nbr) {
  if (nbr > 0) {
    return "+";
  } else if (nbr < 0) {
    return "-";
  } else {
    return "0";
  }
}

module.exports = getNbr;

// ternaire
// return n === 0 ? "0" :
//        n > 0 ? "+" : "-"
