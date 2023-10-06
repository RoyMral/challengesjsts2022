function secondBig(array: number[]) {
  let arrayOrder = array.sort(function (a, b) {
    return b - a;
  });

  return arrayOrder[1];
}

console.log(secondBig([4, 6, 1, 8, 2]));