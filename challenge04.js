/*
 * Reto #4
 * ÁREA DE UN POLÍGONO
 * Fecha publicación enunciado: 24/01/22
 * Fecha publicación resolución: 31/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function Triangle(base, height) {
  function area() {
    return (base * height) / 2;
  }

  console.log("El area del Triángulo es: ", area());
}

function Square(side) {
  function area() {
    return side * side;
  }

  console.log("El area del Cuadrado es: ", area());
}

function Rectangle(base, height) {
  function area() {
    return base * height;
  }

  console.log("El area del Rectángulo es: ", area());
}

function areaPolygon(polygon) {
  return polygon;
}

areaPolygon(Triangle(10, 5));
areaPolygon(Square(4));
areaPolygon(Rectangle(5, 7));
