function hanldesText(text: string) {
  let regArroba = new RegExp(/@[a-zA-Z0-9]*/g);
  let regHashtag = new RegExp(/#[a-zA-Z0-9]*/g);
  let regWeb = new RegExp(/https:\/\/[a-zA-Z0-9./]*/g);

  let foundArroba = text.match(regArroba);
  let foundHashtag = text.match(regHashtag);
  let foundWeb = text.match(regWeb);

  console.log(foundArroba);
  console.log(foundHashtag);
  console.log(foundWeb);
}

hanldesText(
  "En esta actividad de @mouredev, resolvemos #retos de #programacion desde https://retosdeprogramacion.com/semanales2022, que @braismoure aloja en www.github.com"
);