const User = require("./28_myUserClass");

class Admin extends User {
  constructor(prenom, nom, age) {
    super(prenom, nom, age);
    this.role = "administrateur";
  }
}

module.exports = Admin;
