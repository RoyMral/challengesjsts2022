/*
 * Reto #8
 * DECIMAL A BINARIO
 * Fecha publicación enunciado: 18/02/22
 * Fecha publicación resolución: 02/03/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa se encargue de transformar un número decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */
function decimalToBinary(num) {
  let arrayResidual = [];

  while (num > 0) {
    arrayResidual.push(num % 2);
    num = parseInt(num / 2);
  }

  console.log(Number(arrayResidual.reverse().join("")));
}

decimalToBinary(600);
