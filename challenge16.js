/*
 * Reto #16
 * EN MAYÚSCULA
 * Fecha publicación enunciado: 18/04/22
 * Fecha publicación resolución: 25/04/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 */

function mayusFirstLetter(text) {
  let arrayText = text.toLowerCase().split(" ");
  let newArrayText = [];

  arrayText.forEach((element) => {
    let arrayElement = element.split("");

    if (isLetter(element, 0) || element[0] == "ñ") {
      arrayElement[0] = element[0].toUpperCase();
      newArrayText.push(arrayElement.join(""));
    } else if (isLetter(element, 1)) {
      arrayElement[1] = element[1].toUpperCase();
      newArrayText.push(arrayElement.join(""));
    }
  });

  return newArrayText.join(" ");
}

function isLetter(word, index) {
  if (word.charCodeAt(index) >= 97 && word.charCodeAt(index) <= 122) {
    return true;
  }

  return false;
}

console.log(mayusFirstLetter("¿hola      qué tal estás?"));
