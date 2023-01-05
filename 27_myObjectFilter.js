function myObjectFilter(tableObjet) {
  tableObjet = tableObjet.filter((table) => table.age > 17);

  let tab = [];
  for (i = 0; i < tableObjet.length; i++) {
    let newtable = [];
    newtable.push(tableObjet[i].surname);
    newtable.push(tableObjet[i].name);

    tab.push(newtable.join(" "));
  }

  return tab;
}

module.exports = myObjectFilter;
