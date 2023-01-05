function myUserDescription(objet = { surname: prenom, name: nom, age: nbr }) {
  return `je m'apelle ${objet.surname} ${objet.name}, j'ai ${objet.age}`;
}

module.exports = myUserDescription;
