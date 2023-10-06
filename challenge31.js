/*
 * Reto #31
 * AÑOS BISIESTOS
 * Fecha publicación enunciado: 01/08/22
 * Fecha publicación resolución: 08/08/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que imprima los 30 próximos años bisiestos siguientes a uno dado.
 * - Utiliza el menor número de líneas para resolver el ejercicio.
 */
function thirtyBisisest(year) {
  let count = 1;

  while (count <= 30) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      console.log(year);
      count++;
    }
    year++;
  }
}

thirtyBisisest(2010);
