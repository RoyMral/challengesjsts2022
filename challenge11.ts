function removeCharacters(str1: string, str2: string) {
  let arrayStr1 = str1.toLowerCase().split("");
  let arrayStr2 = str2.toLowerCase().split("");
  let arrayRepeat: Array<any> = [];

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
