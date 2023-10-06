/*
 * Reto #30
 * MARCO DE PALABRAS
 * Fecha publicación enunciado: 26/07/22
 * Fecha publicación resolución: 01/08/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba un texto y muestre cada palabra en una línea, formando
 * un marco rectangular de asteriscos.
 * - ¿Qué te parece el reto? Se vería así:
 *   **********
 *   * ¿Qué   *
 *   * te     *
 *   * parece *
 *   * el     *
 *   * reto?  *
 *   **********
 */
function drawFrame(text) {
  let lineUpDown = "**********";

  let words = text.split(" ");

  console.log(lineUpDown);

  let newLine = [];
  for (let i = 0; i <= 9; i++) {
    if (i == 0 || i == 9) {
      newLine.push("*");
    } else {
      newLine.push(" ");
    }
  }

  for (let i = 0; i < words.length; i++) {
    newLine[1] = words[i];
    console.log(newLine.join(""));
  }

  console.log(lineUpDown);
}

drawFrame("¿Qué te parece el reto?");
