function dibujarCuadrado(tamano: number): string {
    // Validar el tamaño del cuadrado
    if (tamano < 2) {
        console.log("El tamaño debe ser al menos 2 para dibujar un cuadrado.");
        return "";
    }

    // Dibujar la parte superior del cuadrado
    let cuadrado = "";
    for (let i = 0; i < tamano; i++) {
        cuadrado += "*";
    }
    cuadrado += "\n";

    // Dibujar el cuerpo del cuadrado
    for (let i = 0; i < tamano - 2; i++) {
        cuadrado += "*";
        for (let j = 0; j < tamano - 2; j++) {
            cuadrado += " ";
        }
        cuadrado += "*\n";
    }

    // Dibujar la parte inferior del cuadrado
    for (let i = 0; i < tamano; i++) {
        cuadrado += "*";
    }
    cuadrado += "\n";

    return cuadrado;
}

// Tamaño del cuadrado (por ejemplo, 5x5)
const tamanoCuadrado = 5;

// Dibujar el cuadrado y mostrarlo en la consola
const cuadradoDibujado = dibujarCuadrado(tamanoCuadrado);
console.log(cuadradoDibujado);