/*
 * Reto #34
 * LOS NÚMEROS PERDIDOS
 * Fecha publicación enunciado: 22/08/22
 * Fecha publicación resolución: 29/08/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Dado un array de enteros ordenado y sin repetidos, crea una función que calcule
 * y retorne todos los que faltan entre el mayor y el menor.
 * - Lanza un error si el array de entrada no es correcto.
 */
function arrayComplete(array) {
  if (array.length < 2) {
    console.error("Arreglo inválido");
    return;
  }
  let arrayAscend = array.sort(function (a, b) {
    return a - b;
  });

  for (let i = arrayAscend[0]; i < arrayAscend[arrayAscend.length - 1]; i++) {
    if (!arrayAscend.includes(i)) {
      console.log(i);
    }
  }
}

arrayComplete([-5, 1]);
