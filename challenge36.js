/*
 * Reto #36
 * LOS ANILLOS DE PODER
 * Fecha publicación enunciado: 06/09/22
 * Fecha publicación resolución: 14/09/22
 * Dificultad: MEDIA
 *
 * Enunciado: ¡La Tierra Media está en guerra! En ella lucharán razas leales a Sauron
 * contra otras bondadosas que no quieren que el mal reine sobre sus tierras.
 * Cada raza tiene asociado un "valor" entre 1 y 5:
 * - Razas bondadosas: Pelosos (1), Sureños buenos (2), Enanos (3), Númenóreanos (4), Elfos (5)
 * - Razas malvadas: Sureños malos (2), Orcos (2), Goblins (2), Huargos (3), Trolls (5)
 * Crea un programa que calcule el resultado de la batalla entre los 2 tipos de ejércitos:
 * - El resultado puede ser que gane el bien, el mal, o exista un empate. Dependiendo de la
 *   suma del valor del ejército y el número de integrantes.
 * - Cada ejército puede estar compuesto por un número de integrantes variable de cada raza.
 * - Tienes total libertad para modelar los datos del ejercicio.
 * Ej: 1 Peloso pierde contra 1 Orco, 2 Pelosos empatan contra 1 Orco, 3 Pelosos ganan a 1 Orco.
 */
function ringPower(razaOne, cantidadOne, razaTwo, cantidadTwo) {
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

ringPower("Elfos", 1, "Trolls", 1);
