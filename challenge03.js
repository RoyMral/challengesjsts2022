/*
 * Reto #3
 * ¿ES UN NÚMERO PRIMO?
 * Fecha publicación enunciado: 17/01/22
 * Fecha publicación resolución: 24/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function isPrime(num) {
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
