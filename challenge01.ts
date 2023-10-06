function isAnagram(firstWord: string, secondWord: string): boolean{
  let count: number = 0;

  if (firstWord.length == secondWord.length) {
    for (const value of firstWord) {
      secondWord.includes(value) && count++;
    }

    if (count == firstWord.length) {
      return true;
    }
  }

  return false;
}

console.log(isAnagram("camino", "monica"));