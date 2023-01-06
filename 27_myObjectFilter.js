function myObjectFilter(tableObjet) {
  tableObjet = tableObjet.filter((table) => table.age > 17);

  let nomPrenom = tableObjet.map((table) => `${table.surname} ${table.name}`);
  // let tab = [];
  // for (i = 0; i < tableObjet.length; i++) {
  //   let newtable = [];
  //   newtable.push(tableObjet[i].surname);
  //   newtable.push(tableObjet[i].name);

  //   tab.push(newtable.join(" "));
  // }

  return nomPrenom;
}

module.exports = myObjectFilter;
