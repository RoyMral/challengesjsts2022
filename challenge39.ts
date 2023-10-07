function quicksort(arrayNum: number[]): number[] {
  if (arrayNum.length < 1) {
    return [];
  }

  let arrayLeft = [];
  let arrayRight = [];
  let pivote = arrayNum[0];

  for (let i = 1; i < arrayNum.length; i++) {
    if (arrayNum[i] < pivote) {
      arrayLeft.push(arrayNum[i]);
    } else {
      arrayRight.push(arrayNum[i]);
    }
  }

  return quicksort(arrayLeft).concat([pivote], quicksort(arrayRight));
}

console.log(quicksort([3, 5, 1, 8, 9, 0]));