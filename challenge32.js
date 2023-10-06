/*
 * Reto #32
 * EL SEGUNDO
 * Fecha publicación enunciado: 08/08/22
 * Fecha publicación resolución: 15/08/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Dado un listado de números, encuentra el SEGUNDO más grande.
 */
function secondBig(array) {
  let arrayOrder = array.sort(function (a, b) {
    return b - a;
  });

  return arrayOrder[1];
}

console.log(secondBig([4, 6, 1, 8, 2]));
