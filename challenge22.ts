function conjunts(arrayOne: number[], arrayTwo: number[], common: boolean): object {
  let commonArray: number[] = [];
  let noCommonArray: number [] = [];

  arrayOne.forEach((element) => {
    for (let i = 0; i < arrayTwo.length; i++) {
      element == arrayTwo[i] && commonArray.push(element);
    }
  });

  arrayOne.forEach((element) => {
    for (let i = 0; i < arrayTwo.length; i++) {
      if (!commonArray.includes(element)) {
        element != arrayTwo[i] && noCommonArray.push(element);
      }
    }
  });

  arrayTwo.forEach((element) => {
    for (let i = 0; i < arrayOne.length; i++) {
      if (!commonArray.includes(element)) {
        element != arrayOne[i] && noCommonArray.push(element);
      }
    }
  });

  let newCommonArray = new Set(commonArray);
  let newNoCommonArray = new Set(noCommonArray);

  if (common) {
    return newCommonArray;
  }

  return newNoCommonArray;
}

console.log(conjunts([1, 2, 3, 3, 4], [2, 2, 3, 3, 3, 4, 6], true));