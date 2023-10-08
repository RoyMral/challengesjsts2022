/*
 * Reto #43
 * TRUCO O TRATO
 * Fecha publicación enunciado: 24/10/22
 * Fecha publicación resolución: 02/11/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Este es un reto especial por Halloween.
 * Deberemos crear un programa al que le indiquemos si queremos realizar "Truco o Trato" y
 * un listado (array) de personas con las siguientes propiedades:
 * - Nombre de la niña o niño
 * - Edad
 * - Altura en centímetros
 *
 * Si las personas han pedido truco, el programa retornará sustos (aleatorios)
 * siguiendo estos criterios:
 * - Un susto por cada 2 letras del nombre por persona
 * - Dos sustos por cada edad que sea un número par
 * - Tres sustos por cada 100 cm de altura entre todas las personas
 * - Sustos: 🎃 👻 💀 🕷 🕸 🦇
 *
 * Si las personas han pedido trato, el programa retornará dulces (aleatorios)
 * siguiendo estos criterios:
 * - Un dulce por cada letra de nombre
 * - Un dulce por cada 3 años cumplidos hasta un máximo de 10 años por persona
 * - Dos dulces por cada 50 cm de altura hasta un máximo de 150 cm por persona
 * - Dulces: 🍰 🍬 🍡 🍭 🍪 🍫 🧁 🍩
 */
function trickOrTreat(request, person) {
  //condiciones para TRICK
  if (request == "TRICK") {
    for (let i = 0; i < Math.floor(person[0].length / 2); i++) {
      console.log("👻");
    }

    if (person[1] % 2 == 0) {
      console.log("🕷");
      console.log("🕷");
    }

    let sustoHeight = "🦇\n".repeat(Math.floor(person[2] / 100) * 3);

    console.log(sustoHeight);
  }

  //Condiciones para Treat
  if (request == "TREAT") {
    for (let i = 0; i < person[0].length; i++) {
      console.log("🍬");
    }

    let dulcesAge = "";

    if (person[1] > 10) {
      dulcesAge = "🍭".repeat(Math.floor(10 / 3));
    } else {
      dulcesAge = "🍭".repeat(Math.floor(person[1] / 3));
    }

    console.log(dulcesAge);

    let dulcesHeight = "🧁\n".repeat(Math.floor(person[2] / 50) * 2);

    console.log(dulcesHeight);
  }
}

trickOrTreat("TRICK", ["Brais", 36, 177]);
trickOrTreat("TREAT", ["Brais", 35, 177]);
