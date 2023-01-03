function myEvilPow(par1, par2) {
  if (par2 === 1) {
    return par1;
  } else {
    return par1 * myEvilPow(par1, par2 - 1);
  }
}

module.exports = myEvilPow;
