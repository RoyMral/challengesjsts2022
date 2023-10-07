/*
 * Reto #38
 * BINARIO A DECIMAL
 * Fecha publicación enunciado: 19/09/22
 * Fecha publicación resolución: 27/09/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa se encargue de transformar un número binario a decimal sin utilizar
 * funciones propias del lenguaje que lo hagan directamente.
 */
function binaryToDecimal(binary) {
  let arrayNum = [];
  let arrayBinary = binary.split("").reverse();

  arrayBinary.forEach((element, index) => {
    arrayNum.push(element * Math.pow(2, index));
  });

  console.log(
    arrayNum.reduce((acc, element) => {
      return acc + element;
    })
  );
}

binaryToDecimal("00110");
