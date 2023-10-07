function betweenZelda(gameOne: string, gameTwo: string): void {
  const zeldaGames = [
    { nombre: "THE_LEGEND_OF_ZELDA", date: "21/02/1986" },
    { nombre: "THE_ADVENTURE_OF_LINK", date: "14/01/1987" },
    { nombre: "A_LINK_TO_THE_PAST", date: "21/11/1991" },
    { nombre: "LINKS_AWAKENING", date: "06/06/1993" },
    { nombre: "OCARINA_OF_TIME", date: "21/11/1998" },
    { nombre: "MAJORAS_MASK", date: "27/04/2000" },
    { nombre: "ORACLE_OF_SEASONS, ORACLE_OF_AGES", date: "27/02/2001" },
    { nombre: "FOUR_SWORDS", date: "03/12/2002" },
    { nombre: "THE_WIND_WAKER", date: "13/12/2002" },
    { nombre: "FOUR_SWORDS_ADVENTURES", date: "18/03/2004" },
    { nombre: "THE_MINISH_CUP", date: "04/11/2004" },
    { nombre: "TWILIGHT_PRINCES", date: "19/11/2006" },
    { nombre: "PHANTHOM_HOURGLASS", date: "23/06/2007" },
    { nombre: "SPIRIT_TRACKS", date: "07/12/2009" },
    { nombre: "SKYWARD_SWORD", date: "18/11/2011" },
    { nombre: "A_LINK_BETWEEN_WORLDS", date: "23/11/2013" },
    { nombre: "TRI_FORCE_HEROES", date: "11/10/2015" },
    { nombre: "BREATH_OF_THE_WILD", date: "03/03/2017" },
    { nombre: "TEARS_OF_THE_KINGDOM", date: "12/05/2023" },
  ];

  let firstDate = "";
  let secondDate = "";

  zeldaGames.forEach(function (game) {
    if (game.nombre == gameOne) {
      firstDate = game.date;
    }

    if (game.nombre == gameTwo) {
      secondDate = game.date;
    }
  });
  let newFirstDate: Date = new Date(formatDate(firstDate));
  let newSecondDate: Date = new Date(formatDate(secondDate));

  let milliseconds = Math.abs(newFirstDate.getTime() - newSecondDate.getTime());
  let diferDays = milliseconds / 1000 / 60 / 60 / 24;
  let diferYears = diferDays / 365;

  console.log(diferDays, "días");
  console.log(parseInt(diferYears.toString()), "años");
}

function formatDate(date: string) {
  let arrayDate = date.split("/");
  let day = arrayDate[0];
  let month = arrayDate[1];
  let year = arrayDate[2];

  return `${month}/${day}/${year}`;
}

betweenZelda("THE_LEGEND_OF_ZELDA", "TEARS_OF_THE_KINGDOM");
