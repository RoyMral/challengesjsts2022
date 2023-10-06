/*
 * Reto #33
 * CICLO SEXAGENARIO CHINO
 * Fecha publicación enunciado: 15/08/22
 * Fecha publicación resolución: 22/08/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un función, que dado un año, indique el elemento y animal correspondiente
 * en el ciclo sexagenario del zodíaco chino.
 * - Información: https://www.travelchinaguide.com/intro/astrology/60year-cycle.htm
 * - El ciclo sexagenario se corresponde con la combinación de los elementos madera,
 *   fuego, tierra, metal, agua y los animales rata, buey, tigre, conejo, dragón, serpiente,
 *   caballo, oveja, mono, gallo, perro, cerdo (en este orden).
 * - Cada elemento se repite dos años seguidos.
 * - El último ciclo sexagenario comenzó en 1984 (Madera Rata).
 */
function chineseZodiac(year) {
  let arrayElements = ["Wood", "Fire", "Earth", "Metal", "Water"];
  let arrayAnimals = [
    "Rat",
    "Ox",
    "Tiger",
    "Rabbit",
    "Dragon",
    "Snake",
    "Horse",
    "Sheep",
    "Monkey",
    "Rooster",
    "Dog",
    "Pig",
  ];

  let value = year - 1924;
  let animal = 0;
  let count = 0;

  for (let i = 0; i < arrayElements.length; i++) {
    for (let j = 0; j < arrayAnimals.length; j++) {
      if (count < 60 && count == value) {
        console.log(year + " " + arrayAnimals[animal], arrayElements[i]);
      }
      if (animal % 2 != 0) {
        animal++;
        count++;
        break;
      }
      animal++;
      count++;
    }
    if (i == 4 && count <= 58) {
      i = -1;
    }
    animal == 12 && (animal = 0);
  }
}

chineseZodiac(1946);
