/*
 * Reto #18
 * TRES EN RAYA
 * Fecha publicación enunciado: 02/05/22
 * Fecha publicación resolución: 09/05/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Crea una función que analice una matriz 3x3 compuesta por "X" y "O" y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta. O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta. Se podría representar con un vacío "", por ejemplo.
 */
function ticTacToe(matriz) {
  let arrayPositionsX = [];
  let arrayPositionsO = [];

  let arrayPositionWinners = [
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],
    ["00", "10", "20"],
    ["01", "11", "21"],
    ["02", "12", "22"],
    ["00", "11", "22"],
    ["02", "11", "20"],
  ];

  matriz.forEach(function (element, index) {
    for (let i = 0; i < 3; i++) {
      if (element[i] === "X") {
        arrayPositionsX.push(index.toString() + i);
      }
    }
  });

  matriz.forEach(function (element, index) {
    for (let i = 0; i < 3; i++) {
      if (element[i] === "O") {
        arrayPositionsO.push(index.toString() + i);
      }
    }
  });

  let result = "";

  arrayPositionWinners.forEach((element) => {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      if (arrayPositionsX.includes(element[i])) {
        count++;
      }
      if (count == 3) {
        result = "X";
      }
    }
  });

  arrayPositionWinners.forEach((element) => {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      if (arrayPositionsO.includes(element[i])) {
        count++;
      }
      if (count == 3) {
        result = "O";
      }
    }
  });

  return result;
}

console.log(
  ticTacToe([
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "X"],
  ])
);
/*
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],

*/
