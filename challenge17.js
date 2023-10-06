/*
 * Reto #17
 * LA CARRERA DE OBSTÁCULOS
 * Fecha publicación enunciado: 25/04/22
 * Fecha publicación resolución: 02/05/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea una función que evalúe si un/a atleta ha superado correctamente una
 * carrera de obstáculos.
 * - La función recibirá dos parámetros:
 *      - Un array que sólo puede contener String con las palabras "run" o "jump"
 *      - Un String que represente la pista y sólo puede contener "_" (suelo) o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *      - Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla) será correcto y no
 *        variará el símbolo de esa parte de la pista.
 *      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
 *      - Si hace "run" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.
 */

function isWin(arrayActions, strPista) {
  const action = {
    run: "_",
    jump: "|",
  };

  let converPista = [];
  let newPista = [];

  converPista = arrayActions.map(function (element) {
    if (element == "run") {
      return action.run;
    }

    if (element == "jump") {
      return action.jump;
    }
  });

  for (let i = 0; i < strPista.length; i++) {
    if (converPista[i] == strPista[i]) {
      newPista.push(strPista[i]);
    } else if (converPista[i] == action.run && strPista[i] == action.jump) {
      newPista.push("/");
    } else if (converPista[i] == action.jump && strPista[i] == action.run) {
      newPista.push("X");
    }
  }

  console.log("Pista: " + newPista.join(""));

  if (newPista.join("") == strPista) {
    return true;
  }

  return false;
}

console.log(isWin(["run", "jump", "run", "jump", "run"], "_|_|_"));
