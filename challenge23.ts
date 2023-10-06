function mcd(numOne: number, numTwo: number): void{
  let arrayMCD = [];

  for (let i = 2; i < 9; i++) {
    while (numOne % i == 0 && numTwo % i == 0) {
      numOne = numOne / i;
      numTwo = numTwo / i;
      arrayMCD.push(i);
    }
  }

  console.log(
    arrayMCD.reduce(function (accumulator, currentValue) {
      return accumulator * currentValue;
    })
  );
}

function mcm(numOne: number, numTwo: number): void{
  let arrayDivisorOne: Array<number> = [];
  let arrayDivisorTwo: Array <number> = [];

  for (let i = 2; i < 9; i++) {
    while (numOne % i == 0) {
      numOne = numOne / i;
      arrayDivisorOne.push(i);
    }
  }

  for (let j = 2; j < 9; j++) {
    while (numTwo % j == 0) {
      numTwo = numTwo / j;
      arrayDivisorTwo.push(j);
    }
  }

  let arrayIndex: Array<number> = [];

  if (arrayDivisorOne.length < arrayDivisorTwo.length) {
    arrayDivisorOne.forEach((element, index) => {
      arrayDivisorTwo.forEach((ele, i) => {
        if (index == i && element == ele) {
          arrayIndex.push(i);
        }
      });
    });
  }

  if (arrayDivisorTwo.length < arrayDivisorOne.length) {
    arrayDivisorOne.forEach((element, index) => {
      arrayDivisorTwo.forEach((ele, i) => {
        if (index == i && element == ele) {
          arrayIndex.push(i);
        }
      });
    });
  }

  let newArrayDivisorOne = arrayDivisorOne.filter((element, index) => {
    return index != arrayIndex[index];
  });

  console.log(
    newArrayDivisorOne.reduce((acc, element) => {
      return acc * element;
    }) *
      arrayDivisorTwo.reduce(function (accumulator, currentValue) {
        return accumulator * currentValue;
      })
  );
}

mcd(56, 180);
mcm(56, 180);