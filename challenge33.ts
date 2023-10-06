function chineseZodiac(year: number): void {
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

chineseZodiac(1939);