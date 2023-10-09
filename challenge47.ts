function commonVowel(text: string): void {
  let vowel = "";
  let count = 0;
  let arrayText = text.toLowerCase().split("");

  let arrayA = arrayText.filter(function (letter) {
    return letter == "a" || letter == "á";
  });
  let arrayE = arrayText.filter(function (letter) {
    return letter == "e" || letter == "é";
  });
  let arrayI = arrayText.filter(function (letter) {
    return letter == "i" || letter == "í";
  });
  let arrayO = arrayText.filter(function (letter) {
    return letter == "o" || letter == "ó";
  });
  let arrayU = arrayText.filter(function (letter) {
    return letter == "u" || letter == "ú";
  });

  let mayor: any = [];

  if (arrayA.length > arrayE.length) {
    mayor = ["a", arrayA.length];
  } else {
    mayor = ["e", arrayE.length];
  }

  if (mayor[1] < arrayI.length) {
    mayor = ["i", arrayI.length];
  }

  if (mayor[1] < arrayO.length) {
    mayor = ["o", arrayO.length];
  }

  if (mayor[1] < arrayU.length) {
    mayor = ["u", arrayU.length];
  }

  console.log("Vocal más repetida: " + mayor[0]);
}

commonVowel("aaaaaeeeeiiioou");
console.log("********");
commonVowel(".-Aá?aaa BbEeew eEIiiOoUuuuuu:");