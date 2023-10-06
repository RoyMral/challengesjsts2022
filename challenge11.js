/*
 * Reto #11
 * ELIMINANDO CARACTERES
 * Fecha publicación enunciado: 14/03/22
 * Fecha publicación resolución: 21/03/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba dos cadenas como parámetro (str1, str2) e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.
 */
function removeCharacters(str1, str2) {
  let arrayStr1 = str1.toLowerCase().split("");
  let arrayStr2 = str2.toLowerCase().split("");
  let arrayRepeat = [];

  arrayStr1.forEach((element) => {
    if (!arrayRepeat.includes(element)) {
      arrayStr2.includes(element) && arrayRepeat.push(element);
    }
  });

  if (arrayRepeat.includes(" ")) {
    let index = arrayRepeat.indexOf(" ");

    arrayRepeat.splice(index, 1);
  }

  let out1 = arrayStr1.filter(function (element) {
    return !arrayRepeat.includes(element);
  });

  let out2 = arrayStr2.filter(function (element) {
    return !arrayRepeat.includes(element);
  });

  console.log(out1.join(" "));
  console.log(out2.join(" "));

  // console.log(arrayStr1);
  // console.log(arrayStr2);
}

removeCharacters(
  'Usa el canal de nuestro discord (https://mouredev.com/discord) "\uD83D\uDD01reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad',
  "Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada."
);
