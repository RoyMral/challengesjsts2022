function decimalToBinary(num: number): void{
  let arrayResidual = [];

  while (num > 0) {
    arrayResidual.push(num % 2);
    num = Math.floor(num / 2);
  }

  console.log(Number(arrayResidual.reverse().join("")));
}

decimalToBinary(600);