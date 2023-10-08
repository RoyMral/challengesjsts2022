function valueOhm(v = 0, r = 0, i = 0) {
  let result = 0;

  if (v != 0 && r != 0) {
    result = Math.round((v / r) * 100) / 100;
    return result;
  }
}

console.log(valueOhm(5.0, 4.0));