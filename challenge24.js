/*
 * Reto #24
 * ITERATION MASTER
 * Fecha publicación enunciado: 13/06/22
 * Fecha publicación resolución: 20/06/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno). ¿De cuántas maneras eres capaz de hacerlo? Crea el código para cada una de ellas.
 */

// Primera forma
for (let i = 1; i <= 100; i++) {
  console.log("***** " + i + " *****");
}

console.log("------------------------------------------------");
console.log("------------------------------------------------");
console.log("------------------------------------------------");
//Segunda forma
let count = 1;
while (count <= 100) {
  console.log("***** " + count + "*****");
  count++;
}
