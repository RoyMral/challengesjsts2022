/*
 * Reto #44
 * BUMERANES
 * Fecha publicación enunciado: 02/10/22
 * Fecha publicación resolución: 07/11/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que retorne el número total de bumeranes de un array de números
 * enteros e imprima cada uno de ellos.
 * - Un bumerán (búmeran, boomerang) es una secuencia formada por 3 números seguidos, en el que el
 *   primero y el último son iguales, y el segundo es diferente. Por ejemplo [2, 1, 2].
 * - En el array [2, 1, 2, 3, 3, 4, 2, 4] hay 2 bumeranes ([2, 1, 2] y [4, 2, 4]).
 */
function boomerang(array) {
  for (let i = 0; i < array.length; i++) {
    if (i >= array.length - 1 - 1) {
      break;
    }

    if (array[i] == array[i + 2]) {
      console.log(array[i], array[i + 1], array[i + 2]);
    }
  }
}

boomerang([2, 1, 2, 3, 3, 4, 2, 4]);
boomerang([2, 1, 2, 1, 2]);
