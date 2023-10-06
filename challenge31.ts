function thirtyBisisest(year: number) {
  let count = 1;

  while (count <= 30) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      console.log(year);
      count++;
    }
    year++;
  }
}

thirtyBisisest(1999);