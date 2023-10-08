function trickOrTreat(request: string, person: any) {
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