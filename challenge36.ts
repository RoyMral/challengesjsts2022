function ringPower(razaOne: string, cantidadOne: number, razaTwo: string, cantidadTwo: number): void {
  const ejercitos = {
    Bondadosos: [
      { nombre: "Pelosos", value: 1 },
      { nombre: "Surenos buenos", value: 2 },
      { nombre: "Enanos", value: 3 },
      { nombre: "Numenoreanos", value: 4 },
      { nombre: "Elfos", value: 5 },
    ],
    Malvados: [
      { nombre: "Surenos malos", value: 2 },
      { nombre: "Orcos", value: 2 },
      { nombre: "Goblins", value: 2 },
      { nombre: "Huargos", value: 3 },
      { nombre: "Trolls", value: 5 },
    ],
  };

  //Determinar unidades para calcular batalla
  let valorOne = 0;
  ejercitos.Bondadosos.forEach(function (ele) {
    if (ele.nombre == razaOne) {
      valorOne = ele.value * cantidadOne;
    }
  });

  let valorTwo = 0;
  ejercitos.Malvados.forEach(function (ele) {
    if (ele.nombre == razaTwo) {
      valorTwo = ele.value * cantidadTwo;
    }
  });

  let result = valorOne - valorTwo;

  switch (true) {
    case result == 0:
      console.log("EMPATE");
      break;
    case result > 0:
      console.log("Ganan ", razaOne);
      break;
    case result < 0:
      console.log("Ganan ", razaTwo);
      break;

    default:
      break;
  }
}

ringPower("Elfos", 1, "Trolls", 2);