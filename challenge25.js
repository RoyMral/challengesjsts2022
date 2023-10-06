/*
 * Reto #25
 * PIEDRA, PAPEL, TIJERA
 * Fecha publicación enunciado: 20/06/22
 * Fecha publicación resolución: 27/06/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que calcule quien gana más partidas al piedra, papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel) o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".
 */
function resultRPS(arrayPairs) {
  let win = "";
  let countPlayerOne = 0;
  let countPlayerTwo = 0;

  for (let i = 0; i < 3; i++) {
    switch (arrayPairs[i][0]) {
      case "R":
        arrayPairs[i][1] == "S" && (win = "Player 1");
        arrayPairs[i][1] == "P" && (win = "Player 2");
        arrayPairs[i][1] == "R" && (win = "Tie");
        break;
      case "S":
        arrayPairs[i][1] == "R" && (win = "Player 2");
        arrayPairs[i][1] == "P" && (win = "Player 1");
        arrayPairs[i][1] == "S" && (win = "Tie");
        break;
      case "P":
        arrayPairs[i][1] == "R" && (win = "Player 1");
        arrayPairs[i][1] == "P" && (win = "Tie");
        arrayPairs[i][1] == "S" && (win = "Player 2");
        break;
      default:
        break;
    }
    win == "Player 1" && countPlayerOne++;
    win == "Player 2" && countPlayerTwo++;
  }

  let result = countPlayerOne > countPlayerTwo ? "Player 1" : "Player 2";

  return result;
}

console.log(
  resultRPS([
    ["R", "S"],
    ["S", "R"],
    ["P", "S"],
  ])
);
