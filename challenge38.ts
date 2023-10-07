function binaryToDecimal(binary: string): void {
  let arrayNum: Array<number> = [];
  let arrayBinary = binary.split("").reverse();

  arrayBinary.forEach((element, index) => {
    arrayNum.push(Number(element) * Math.pow(2, index));
  });

  console.log(
    arrayNum.reduce((acc, element) => {
      return acc + element;
    })
  );
}

binaryToDecimal("00110");