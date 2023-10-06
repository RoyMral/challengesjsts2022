function ticTacToe(matriz: string[][]) {
  let arrayPositionsX: string[] = [];
  let arrayPositionsO: string[] = [];

  let arrayPositionWinners = [
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],
    ["00", "10", "20"],
    ["01", "11", "21"],
    ["02", "12", "22"],
    ["00", "11", "22"],
    ["02", "11", "20"],
  ];

  matriz.forEach(function (element, index) {
    
    for (let i = 0; i < 3; i++) {
      if (element[i] === "X") {
        arrayPositionsX.push(index.toString() + i);
      }
    }
  });

  matriz.forEach(function (element, index) {
    for (let i = 0; i < 3; i++) {
      if (element[i] === "O") {
        arrayPositionsO.push(index.toString() + i);
      }
    }
  });

  let result = "";

  arrayPositionWinners.forEach((element) => {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      if (arrayPositionsX.includes(element[i])) {
        count++;
      }
      if (count == 3) {
        result = "X";
      }
    }
  });

  arrayPositionWinners.forEach((element) => {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      if (arrayPositionsO.includes(element[i])) {
        count++;
      }
      if (count == 3) {
        result = "O";
      }
    }
  });

  return result;
}

console.log(
  ticTacToe([
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "X"],
  ])
);
/*
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],

*/