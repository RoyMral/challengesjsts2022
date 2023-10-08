/*
 * Reto #41
 * LA LEY DE OHM
 * Fecha publicación enunciado: 10/10/22
 * Fecha publicación resolución: 17/10/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que calcule el valor del parámetro perdido correspondiente a la ley de Ohm.
 * - Enviaremos a la función 2 de los 3 parámetros (V, R, I), y retornará el valor del tercero (redondeado a 2 decimales).
 * - Si los parámetros son incorrectos o insuficientes, la función retornará la cadena de texto "Invalid values".
 */
function valueOhm(v = 0, r = 0, i = 0) {
  let result = 0;

  if (v != 0 && r != 0) {
    result = Math.round((v / r) * 100) / 100;
    return result;
  }
}

console.log(valueOhm(5.0, 4.0));
