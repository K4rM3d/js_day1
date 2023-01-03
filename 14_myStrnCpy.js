function myStrnCpy(string, arg1) {
  let newString = "";

  if (arg1 > string.length) {
    arg1 = string.length;
  }

  for (i = 0; i <= arg1 - 1; i++) {
    newString += string[i];
  }

  return newString;
}
module.exports = myStrnCpy;
