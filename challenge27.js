/*
 * Reto #27
 * VECTORES ORTOGONALES
 * Fecha publicación enunciado: 07/07/22
 * Fecha publicación resolución: 11/07/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa que determine si dos vectores son ortogonales.
 * - Los dos array deben tener la misma longitud.
 * - Cada vector se podría representar como un array. Ejemplo: [1, -2]
 */
function isOrthogonal(vectorOne, vectorTwo) {
  return vectorOne[0] * vectorTwo[0] + vectorOne[1] * vectorTwo[1] === 0;
}

console.log(isOrthogonal([1, 2], [2, 1]));
