function resultAsync(numOne: number, numTwo: number, time: number) {
  setTimeout(() => {
    console.log(numOne + numTwo);
  }, time * 1000);
}

resultAsync(5, 2, 10);