function isPrime(num: number): boolean {
  if (num < 2) {
    return false;
  }

  if (num <= 3) {
    return true;
  }

  let count = 0;
  for (let i = 2; i <= num; i++) {
    num % i == 0 && count++;
  }

  if (count > 1) {
    return false;
  }

  return true;
}

for (let j = 1; j <= 100; j++) {
  isPrime(j) && console.log(j);
}