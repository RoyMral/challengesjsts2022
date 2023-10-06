function arrayComplete(array: Array<number>) {
  if (array.length < 2) {
    console.error("Arreglo inválido");
    return;
  }
  let arrayAscend = array.sort(function (a, b) {
    return a - b;
  });

  for (let i = arrayAscend[0]; i < arrayAscend[arrayAscend.length - 1]; i++) {
    if (!arrayAscend.includes(i)) {
      console.log(i);
    }
  }
}

arrayComplete([-5, 1]);