function fibonacci(): void {
  let arrayFibonacci: number[] = [0, 1];

  for (let i = 0; i <= 48; i++) {
    arrayFibonacci.push(arrayFibonacci[i] + arrayFibonacci[i + 1]);
  }

  console.log(arrayFibonacci);
}

fibonacci();