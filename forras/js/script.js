let sp = document.getElementById("selectPizza");
let db = document.getElementById("dbNumber");

function order() {
  if(sp.value == "Válasszon egyet!" || db.value == 0) {
    alert("Válasszon ki egy pizzát a listából és irja be a darabszámot!");
    return;
  }

  let sszam = rndBetween(1, 100);
  alert(`Rendelés száma: ${sszam}`);
}

function rndBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}