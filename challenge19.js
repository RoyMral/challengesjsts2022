/*
 * Reto #19
 * CONVERSOR TIEMPO
 * Fecha publicación enunciado: 09/05/22
 * Fecha publicación resolución: 16/05/22
 * Dificultad: FACIL
 *
 * Enunciado: Crea una función que reciba días, horas, minutos y segundos (como enteros) y retorne su resultado en milisegundos.
 */

function timeToMilli(days, hours, minutes, seconds) {
  let daysInMilli = days * 24 * 60 * 60 * 1000;
  let hoursInMilli = hours * 60 * 60 * 1000;
  let minutesInMilli = minutes * 60 * 1000;
  let secondsInMilli = seconds * 1000;

  return daysInMilli + hoursInMilli + minutesInMilli + secondsInMilli;
}

console.log(timeToMilli(0, 0, 0, 10));
