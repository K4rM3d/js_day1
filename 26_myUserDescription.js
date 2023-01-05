function myUserDescription(objet = { surname: medar, name: karim, age: 30 }) {
  return `Je m'apelle ${objet.surname} ${objet.name}, j'ai ${objet.age} ans`;
}

module.exports = myUserDescription;
