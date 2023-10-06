/*
 * Reto #15
 * ¿CUÁNTOS DÍAS?
 * Fecha publicación enunciado: 11/04/22
 * Fecha publicación resolución: 18/04/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Crea una función que calcule y retorne cuántos días hay entre dos cadenas de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se lanzará una excepción.
 */

function betweenDate(dateOne, dateTwo) {
  if (!dateOne.includes("/") || !dateTwo.includes("/")) {
    return false;
  }

  let aux = 0;
  let arrayDateOne = dateOne.split("/");
  let arrayDateTwo = dateTwo.split("/");

  aux = arrayDateOne[1];
  arrayDateOne[1] = arrayDateOne[0];
  arrayDateOne[0] = aux;
  let newDateOne = new Date(arrayDateOne.join("/"));

  aux = arrayDateTwo[1];
  arrayDateTwo[1] = arrayDateTwo[0];
  arrayDateTwo[0] = aux;
  let newDateTwo = new Date(arrayDateTwo.join("/"));

  let days = Math.floor(
    Math.abs((newDateOne - newDateTwo) * (1.15741 * Math.pow(10, -8)))
  );

  return days;
}

console.log(betweenDate("18/05/2022", "29/05/2022"));
