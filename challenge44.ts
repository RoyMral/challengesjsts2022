function boomerang(array: number[]): void {
  for (let i = 0; i < array.length; i++) {
    if (i >= array.length - 1 - 1) {
      break;
    }

    if (array[i] == array[i + 2]) {
      console.log(array[i], array[i + 1], array[i + 2]);
    }
  }
}

boomerang([2, 1, 2, 3, 3, 4, 2, 4]);
boomerang([2, 1, 2, 1, 2]);