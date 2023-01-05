class User {
  constructor(prenom, nom, age) {
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
  }
  presentation() {
    return `Je m'apelle ${this.prenom} ${this.nom}, j'ai ${this.age} ans`;
  }
}

module.exports = User;
