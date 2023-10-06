function conversionTexto(texto: string): void{
  const objMorse = {
    A: "._",
    B: "—···",
    C: "—·—·",
    D: "—··",
    E: "·",
    F: "··—·",
    G: "——·",
    CH: "— — — —",
    H: "····",
    I: "··",
    J: "·———",
    K: "—·—",
    L: "·—··",
    M: "——",
    N: "—·",
    Ñ: "— — · — —",
    O: "———",
    P: "·——·",
    Q: "——·—",
    R: "·—·",
    S: "···",
    T: "—",
    U: "··—",
    V: "···—",
    W: "·——",
    X: "—··—",
    Y: "—·——",
    Z: "——··",
    0: "—————",
    1: "·————",
    2: "··———",
    3: "···——",
    4: "····—",
    5: "·····",
    6: "—····",
    7: "——···",
    8: "———··",
    9: "————·",
    ".": "·—·—·—",
    ",": "——··——",
    "?": "··——··",
    '"': "·—··—·",
    "/": "—··—·",
  };
  let regExp = new RegExp(/[a-zA-Z]/, "g");

  if (texto.search(regExp) != -1) {
    textoAMorse(texto, objMorse);
  } else {
    textoNormal(texto, objMorse);
  }
}

function textoAMorse(texto: string, objMorse: any) {
  let convertidoAMorse = "";
  let arregloTexto = texto.split(" ");
  let arregloPalabra = [];
  arregloTexto.forEach((palabra, index) => {
    arregloPalabra = palabra.split("");
    for (let i = 0; i < arregloPalabra.length; i++) {
      for (const key in objMorse) {
        if (arregloPalabra[i].toUpperCase() == key) {
          arregloPalabra[i] = objMorse[key];
        }
      }
    }

    arregloTexto[index] = arregloPalabra.join(" ");
  });

  convertidoAMorse = arregloTexto.join("  ");
  console.log(
    "🚀 ~ file: morse.js ~ line 69 ~ codigoMorse ~ convertidoAMorse",
    convertidoAMorse
  );
}

function textoNormal(texto: string, objMorse: any) {
  let convertidoNormal = "";
  let arregloTexto = texto.split("  ");
  let arregloPalabra = [];
  arregloTexto.forEach((palabra, index) => {
    arregloPalabra = palabra.split(" ");
    for (let i = 0; i < arregloPalabra.length; i++) {
      for (const key in objMorse) {
        if (arregloPalabra[i] == objMorse[key]) {
          arregloPalabra[i] = key;
        }
      }
    }

    arregloTexto[index] = arregloPalabra.join(" ");
  });

  convertidoNormal = arregloTexto.join("  ");
  console.log(
    "🚀 ~ file: morse.js ~ line 102 ~ textoNormal ~ convertidoNormal",
    convertidoNormal
  );
}

conversionTexto("HOLA mundo , /");
conversionTexto("···· ——— ·—·· ._  —— ··— —· —·· ———  ——··——  —··—·");