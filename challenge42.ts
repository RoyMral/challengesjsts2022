function convertTemperature(value: string) {
  let expC = /°C/g;
  let expF = /°F/g;
  let result = 0;

  if (value.match(expC)) {
    result = parseInt(value) * 1.8 + 32;

    return result;
  }

  if (value.match(expF)) {
    result = Math.round(((parseInt(value) - 32) / 1.8) * 100) / 100;

    return result;
  }

  return "Error, dato inválido";
}

console.log(convertTemperature("100°C"));