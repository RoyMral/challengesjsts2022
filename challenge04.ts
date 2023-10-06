interface Polygon{
  height: number,
  base: number,
  area?(): number,
  printArea?(): string
}

const triangle: Polygon = {
  base: 10,
  height: 5
}

const square: Polygon = {
  base: 4,
  height: 4
}

const rectangle: Polygon = {
  base: 5,
  height: 7
}


function Triangle(triangle: Polygon): void{
  function area() {
    return (triangle.base * triangle.height) / 2;
  }

  // function printArea(){

  //   return "El area del Triángulo es: " + area();
  // }

  console.log("El area del Triángulo es: ", area());
  

}

function Square(square: Polygon): void{
  function area() {
    return square.base * square.height;
  }

  console.log("El area del Cuadrado es: ", area());
}

function Rectangle(rectangle: Polygon): void {
  function area() {
    return rectangle.base * rectangle.height;
  }
  
    console.log("El area del Rectángulo es:", area());
    
  
}

function areaPolygon(polygon: any): void{
  polygon;
}

areaPolygon(Triangle(triangle));
areaPolygon(Square(square));
areaPolygon(Rectangle(rectangle));