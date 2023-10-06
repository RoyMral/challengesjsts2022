/*
 * Reto #22
 * CONJUNTOS
 * Fecha publicación enunciado: 01/06/22
 * Fecha publicación resolución: 07/06/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 */

function conjunts(arrayOne, arrayTwo, common) {
  let commonArray = [];
  let noCommonArray = [];

  arrayOne.forEach((element) => {
    for (let i = 0; i < arrayTwo.length; i++) {
      element == arrayTwo[i] && commonArray.push(element);
    }
  });

  arrayOne.forEach((element) => {
    for (let i = 0; i < arrayTwo.length; i++) {
      if (!commonArray.includes(element)) {
        element != arrayTwo[i] && noCommonArray.push(element);
      }
    }
  });

  arrayTwo.forEach((element) => {
    for (let i = 0; i < arrayOne.length; i++) {
      if (!commonArray.includes(element)) {
        element != arrayOne[i] && noCommonArray.push(element);
      }
    }
  });

  let newCommonArray = new Set(commonArray);
  let newNoCommonArray = new Set(noCommonArray);

  if (common) {
    return newCommonArray;
  }

  return newNoCommonArray;
}

console.log(conjunts([1, 2, 3, 3, 4], [2, 2, 3, 3, 3, 4, 6], true));
