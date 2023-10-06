/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 */

function isAnagram(firstWord, secondWord) {
  let count = 0;

  if (firstWord.length == secondWord.length) {
    for (const value of firstWord) {
      secondWord.includes(value) && count++;
    }

    if (count == firstWord.length) {
      return true;
    }
  }

  return false;
}

console.log(isAnagram("camino", "monica"));
