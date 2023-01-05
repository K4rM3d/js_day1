const User = require("./28_myUserClass");

class Admin extends User {
  constructor(prenom, nom, age, user) {
    super(user);
    this.surname = prenom;
    this.name = nom;
    this.age = age;
    this.role = "administrateur";
  }
}

module.exports = Admin;
