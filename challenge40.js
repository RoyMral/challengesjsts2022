/*
 * Reto #40
 * TRIÁNGULO DE PASCAL
 * Fecha publicación enunciado: 03/10/22
 * Fecha publicación resolución: 10/10/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea una función que sea capaz de dibujar el "Triángulo de Pascal" indicándole
 * únicamente el tamaño del lado.
 * - Aquí puedes ver rápidamente cómo se calcula el triángulo:
 *   https://commons.wikimedia.org/wiki/File:PascalTriangleAnimated2.gif
 */
function trianglePascal(size) {
  // let arrayNum = [];
  // for (let i = 0; i < size; i++) {
  //   let medio = Math.floor(size / 2);
  //   if (i != medio) {
  //     arrayNum[i] = " ";
  //   } else {
  //     arrayNum[medio] = 1;
  //   }
  // }
  // console.log(arrayNum.join(""));
  // let arrayNum = [];
  // for (let i = 0; i < size; i++) {
  //   arrayNum[i] = [];
  //   for (let j = 0; j < size; j++) {
  //     arrayNum[i][j] = 1;
  //   }
  // }
  // console.log(arrayNum);
  // Llama a la función para imprimir un triángulo con 5 filas
}
function imprimirTrianguloCentradoIncremental(numFilas) {
  const longitudTotal = numFilas * 2 - 1; // Longitud total del triángulo

  // Itera sobre cada fila
  for (let i = 1; i <= numFilas; i++) {
    const numAsteriscos = i; // Número de asteriscos en la fila
    let numEspacios = 0;

    if (numAsteriscos % 2 != 0) {
      numEspacios = (longitudTotal - numAsteriscos) / 2; // Número de espacios antes de los asteriscos
    } else {
      numEspacios = (longitudTotal - numAsteriscos) / 1.5;
    }

    // Construye la fila con los asteriscos y espacios centrados
    let fila =
      ".".repeat(numEspacios) +
      "1".repeat(numAsteriscos) +
      ".".repeat(numEspacios);

    // Imprime la fila
    console.log(fila);
  }
}

// Llama a la función para imprimir un triángulo centrado con incremento de uno en uno con 5 filas
imprimirTrianguloCentradoIncremental(5);

// trianglePascal(5);
