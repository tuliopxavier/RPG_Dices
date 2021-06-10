function sortear1(num) {
  let sorteio = Math.floor(Math.random() * num + 1);
  document.getElementById("sorteio").innerHTML = `Result: ${sorteio}`;
}
function sortear2(num) {
  let sorteio1 = Math.floor(Math.random() * num + 1);
  let sorteio2 = Math.floor(Math.random() * num + 1);
  document.getElementById(
    "sorteio"
  ).innerHTML = `Result: ${sorteio1} and ${sorteio2}`;
}
