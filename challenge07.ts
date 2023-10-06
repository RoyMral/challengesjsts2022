function countWords(sentence: string): void {
  let arraySentence = sentence
    .toLowerCase()
    .replace(/[.,;()"]/g, "")
    .split(/\s+/);

  let count: number = 0;
  let arrayRepeat: Array<string> = [];

  for (let i = 0; i < arraySentence.length; i++) {
    arraySentence.forEach(function (element) {
      if (!arrayRepeat.includes(arraySentence[i])) {
        arraySentence[i] == element && count++;
      }
    });

    if (count > 1) {
      arrayRepeat.push(arraySentence[i]);
      arrayRepeat.push(count.toString());
    }
    count = 0;
  }

  console.log(arrayRepeat);
}

countWords(
  "Hola, mi nombre es brais. Mi nombre completo es Brais Moure (MoureDev)."
);