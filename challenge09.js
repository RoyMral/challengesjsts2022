/*
 * Reto #9
 * CÓDIGO MORSE
 * Fecha publicación enunciado: 02/03/22
 * Fecha publicación resolución: 07/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que sea capaz de transformar texto natural a código morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse.
 */

function conversionTexto(texto) {
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

function textoAMorse(texto, objMorse) {
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

function textoNormal(texto, objMorse) {
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
