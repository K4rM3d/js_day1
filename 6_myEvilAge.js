function myEvilAge(evilAge) {
  evilAge = parseInt(evilAge);

  if (evilAge > 17) {
    return "Majeur";
  } else {
    return "Mineur";
  }
}
module.exports = myEvilAge;
