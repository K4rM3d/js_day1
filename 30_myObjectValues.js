function myObjectValues(objet) {
  objet = Object.entries(objet)
    .filter(([_, value]) => ["string", "number"].includes(typeof value))
    .map(([key, value]) => `${key}: ${value}`)
    .join(", ");

  return objet;
}

module.exports = myObjectValues;

console.log(
  myObjectValues({
    name: "Ganster",
    surname: "Guilian",
    age: 24,
    presentation: () => {},
    lqlq: () => {},
  })
);
