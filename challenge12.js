/*
 * Reto #12
 * ¿ES UN PALÍNDROMO?
 * Fecha publicación enunciado: 21/03/22
 * Fecha publicación resolución: 28/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba un texto y retorne verdadero o falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */

function isPalindrome(texto) {
  let arrayText = texto.toLowerCase().split("");

  arrayText.forEach((element, index) => {
    if (element === " " || element == "." || element == ",") {
      // arrayText.splice(index, 1);
      arrayText[index] = "";
    }
  });

  arrayText.forEach((element, index) => {
    switch (element) {
      case "á":
        arrayText[index] = "a";
        break;
      case "é":
        arrayText[index] = "e";
        break;
      case "í":
        arrayText[index] = "i";
        break;
      case "ó":
        arrayText[index] = "o";
        break;
      case "ú":
        arrayText[index] = "u";
        break;

      default:
        break;
    }
  });

  let textClean = arrayText.join("");

  if (textClean === arrayText.reverse().join("")) {
    return true;
  }

  return false;
}

console.log(
  isPalindrome(
    "Adivina ya te opina, ya ni miles origina, ya ni cetro me domina, ya ni monarcas, a repaso ni mulato carreta, acaso nicotina, ya ni cita vecino, anima cocina, pedazo gallina, cedazo terso nos retoza de canilla goza, de pánico camina, ónice vaticina, ya ni tocino saca, a terracota luminosa pera, sacra nómina y ánimo de mortecina, ya ni giros elimina, ya ni poeta, ya ni vida"
  )
);
