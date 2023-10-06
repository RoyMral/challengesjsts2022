function isWin(arrayActions: string[], strPista: string): boolean{
  const action = {
    run: "_",
    jump: "|",
  };

  let converPista = [];
  let newPista = [];

  converPista = arrayActions.map(function (element) {
    if (element == "run") {
      return action.run;
    }

    if (element == "jump") {
      return action.jump;
    }
  });

  for (let i = 0; i < strPista.length; i++) {
    if (converPista[i] == strPista[i]) {
      newPista.push(strPista[i]);
    } else if (converPista[i] == action.run && strPista[i] == action.jump) {
      newPista.push("/");
    } else if (converPista[i] == action.jump && strPista[i] == action.run) {
      newPista.push("X");
    }
  }

  console.log("Pista: " + newPista.join(""));

  if (newPista.join("") == strPista) {
    return true;
  }

  return false;
}

console.log(isWin(["run", "jump", "run", "jump", "run"], "_|_|_"));