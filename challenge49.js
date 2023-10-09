/*
 * Reto #49
 * EL DETECTOR DE HANDLES
 * Fecha publicación enunciado: 05/12/22
 * Fecha publicación resolución: 12/12/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que sea capaz de detectar y retornar todos los handles de un texto usando solamente Expresiones Regulares.
 * Debes crear una expresión regular para cada caso:
 * - Handle usuario: Los que comienzan por "@"
 * - Handle hashtag: Los que comienzan por "#"
 * - Handle web: Los que comienzan por "www.", "http://", "https://" y finalizan con un dominio (.com, .es...)
 */

function hanldesText(text) {
  let regArroba = new RegExp(/@[a-zA-Z0-9]*/g);
  let regHashtag = new RegExp(/#[a-zA-Z0-9]*/g);
  let regWeb = new RegExp(/https:\/\/[a-zA-Z0-9./]*/g);

  let foundArroba = text.match(regArroba);
  let foundHashtag = text.match(regHashtag);
  let foundWeb = text.match(regWeb);

  console.log(foundArroba);
  console.log(foundHashtag);
  console.log(foundWeb);
}

hanldesText(
  "En esta actividad de @mouredev, resolvemos #retos de #programacion desde https://retosdeprogramacion.com/semanales2022, que @braismoure aloja en www.github.com"
);
