function reverseWord(word: string): void {
  const result = word.split("");
  let newResult = [];

  for (let i = result.length - 1; i >= 0; i--) {
    newResult.push(result[i]);
  }

  console.log(newResult.join(""));
}

reverseWord("Hola mundo");