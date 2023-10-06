function mayusFirstLetter(text: string): string{
  let arrayText = text.toLowerCase().split(" ");
  let newArrayText: Array<string> = [];

  arrayText.forEach((element) => {
    let arrayElement = element.split("");

    if (isLetter(element, 0) || element[0] == "ñ") {
      
      arrayElement[0] = element[0].toUpperCase();
      newArrayText.push(arrayElement.join(""));
    } else if (isLetter(element, 1)) {
      arrayElement[1] = element[1].toUpperCase();
      newArrayText.push(arrayElement.join(""));
    }
  });

  return newArrayText.join(" ");
}

function isLetter(word: string, index: number): boolean{
  if (word.charCodeAt(index) >= 97 && word.charCodeAt(index) <= 122) {
    return true;
  }

  return false;
}

console.log(mayusFirstLetter("¿hola      qué tal estás?"));