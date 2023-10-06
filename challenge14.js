/*
 * Reto #14
 * ¿ES UN NÚMERO DE ARMSTRONG?
 * Fecha publicación enunciado: 04/04/22
 * Fecha publicación resolución: 11/04/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Escribe una función que calcule si un número dado es un número de Amstrong (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información al respecto.
 */

function isArmstrong(num) {
  let arrayNum = num.toString().split("");

  for (let i = 2; i <= 9; i++) {
    let value = 0;
    let arrayNum2 = [];

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
