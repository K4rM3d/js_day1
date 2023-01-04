function myEvilPow(par1, par2) {
  if (par2 === 0) return 1;
  else if (par2 > 0) return par1 * myEvilPow(par1, par2 - 1);
  else return 1 / myEvilPow(par1, -par2);
}

module.exports = myEvilPow;
