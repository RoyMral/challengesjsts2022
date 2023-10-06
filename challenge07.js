/*
 * Reto #7
 * CONTANDO PALABRAS
 * Fecha publicación enunciado: 14/02/22
 * Fecha publicación resolución: 21/02/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
 */
function countWords(sentence) {
  let arraySentence = sentence
    .toLowerCase()
    .replace(/[.,;()"]/g, "")
    .split(/\s+/);

  let count = 0;
  let arrayRepeat = [];

  for (let i = 0; i < arraySentence.length; i++) {
    arraySentence.forEach(function (element) {
      if (!arrayRepeat.includes(arraySentence[i])) {
        arraySentence[i] == element && count++;
      }
    });

    if (count > 1) {
      arrayRepeat.push(arraySentence[i]);
      arrayRepeat.push(count);
    }
    count = 0;
  }

  console.log(arrayRepeat);
}

countWords(
  "Hola, mi nombre es brais. Mi nombre completo es Brais Moure (MoureDev)."
);
