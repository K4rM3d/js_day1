class User {
  constructor(prenom, nom, age) {
    this.surname = prenom;
    this.name = nom;
    this.age = age;
  }

  presentation() {
    return `Je m'apelle ${this.surname} ${this.name}, j'ai ${this.age} ans`;
  }
}

module.exports = User;
