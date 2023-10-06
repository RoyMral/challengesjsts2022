function isArmstrong(num: number): boolean{
  let arrayNum = num.toString().split("");

  for (let i = 2; i <= 9; i++) {
    let value = 0;
    let arrayNum2: Array<number> = [];

    arrayNum.map((element) => {
      value = Number(element);
      value = Math.pow(value, i);
      arrayNum2.push(value);
    });

    const sumTotal = arrayNum2.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    if (sumTotal == num) {
      return true;
    }
  }

  return false;
}

console.log(isArmstrong(4210818));