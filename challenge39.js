/*
 * Reto #39
 * TOP ALGORITMOS: QUICK SORT
 * Fecha publicación enunciado: 27/09/22
 * Fecha publicación resolución: 03/10/22
 * Dificultad: MEDIA
 *
 * Enunciado: Implementa uno de los algoritmos de ordenación más famosos: el "Quick Sort",
 * creado por C.A.R. Hoare.
 * - Entender el funcionamiento de los algoritmos más utilizados de la historia nos ayuda a
 *   mejorar nuestro conocimiento sobre ingeniería de software. Dedícale tiempo a entenderlo,
 *   no únicamente a copiar su implementación.
 * - Esta es una nueva serie de retos llamada "TOP ALGORITMOS", donde trabajaremos y entenderemos
 *   los más famosos de la historia.
 */
function quicksort(arrayNum) {
  if (arrayNum.length < 1) {
    return [];
  }

  let arrayLeft = [];
  let arrayRight = [];
  let pivote = arrayNum[0];

  for (let i = 1; i < arrayNum.length; i++) {
    if (arrayNum[i] < pivote) {
      arrayLeft.push(arrayNum[i]);
    } else {
      arrayRight.push(arrayNum[i]);
    }
  }

  return [].concat(quicksort(arrayLeft), pivote, quicksort(arrayRight));
}

console.log(quicksort([3, 5, 1, 8, 9, 0]));
