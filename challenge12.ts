function isPalindrome(texto: string): boolean {
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