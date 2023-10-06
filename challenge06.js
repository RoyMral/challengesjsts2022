/*
 * Reto #6
 * INVIRTIENDO CADENAS
 * Fecha publicación enunciado: 07/02/22
 * Fecha publicación resolución: 14/02/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa que invierta el orden de una cadena de texto sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function reverseWord(word) {
  const result = word.split("");
  let newResult = [];

  for (let i = result.length - 1; i >= 0; i--) {
    newResult.push(result[i]);
  }

  console.log(newResult.join(""));
}

reverseWord("Hola mundo");
