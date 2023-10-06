/*
 * Reto #29
 * ORDENA LA LISTA
 * Fecha publicación enunciado: 18/07/22
 * Fecha publicación resolución: 26/07/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro adicional
 *   "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
 */
function ordenarArreglo(arreglo, orden) {
  let aux = 0;

  if (orden == "Asc") {
    for (let i = 0; i < arreglo.length; i++) {
      for (let j = i + 1; j < arreglo.length; j++) {
        if (arreglo[i] > arreglo[j]) {
          aux = arreglo[i];
          arreglo[i] = arreglo[j];
          arreglo[j] = aux;
        }
      }
    }
    return arreglo;
  }

  if (orden == "Desc") {
    for (let i = 0; i < arreglo.length; i++) {
      for (let j = i + 1; j < arreglo.length; j++) {
        if (arreglo[i] < arreglo[j]) {
          aux = arreglo[i];
          arreglo[i] = arreglo[j];
          arreglo[j] = aux;
        }
      }
    }
    return arreglo;
  }

  return arreglo;
}

console.log(ordenarArreglo([10, 4, 6, 8, 9], "Desc"));
