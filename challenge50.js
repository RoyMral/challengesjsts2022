/*
 * Reto #50
 * LA ENCRIPTACIÓN DE KARACA
 * Fecha publicación enunciado: 12/12/22
 * Fecha publicación resolución: 19/12/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que sea capaz de encriptar y desencriptar texto utilizando el
 * algoritmo de encriptación de Karaca (debes buscar información sobre él).
 */
function karaca(text) {
  let reverseText = text.split("").reverse();

  for (let i = 0; i < reverseText.length; i++) {
    switch (reverseText[i]) {
      case "a":
      case "á":
        reverseText[i] = "0";
        break;
      case "e":
      case "é":
        reverseText[i] = "1";
        break;
      case "i":
      case "í":
        reverseText[i] = "2";
        break;
      case "o":
      case "ó":
        reverseText[i] = "3";
        break;
      case "u":
      case "ú":
        reverseText[i] = "4";
        break;

      default:
        break;
    }
  }

  reverseText.push("aca");

  console.log(reverseText.join(""));
}

karaca("placa");
