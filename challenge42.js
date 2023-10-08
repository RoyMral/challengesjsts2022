/*
 * Reto #42
 * CONVERSOR DE TEMPERATURA
 * Fecha publicación enunciado: 17/10/22
 * Fecha publicación resolución: 24/10/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que transforme grados Celsius en Fahrenheit y viceversa.
 * - Para que un dato de entrada sea correcto debe poseer un símbolo "°" y su unidad ("C" o "F").
 * - En caso contrario retornará un error.
 */
function convertTemperature(value) {
  let expC = /°C/g;
  let expF = /°F/g;
  let result = 0;

  if (value.match(expC)) {
    result = parseInt(value) * 1.8 + 32;

    return result;
  }

  if (value.match(expF)) {
    result = Math.round(((parseInt(value) - 32) / 1.8) * 100) / 100;

    return result;
  }

  return "Error, dato inválido";
}

console.log(convertTemperature("100°C"));
