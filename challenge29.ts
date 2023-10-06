function ordenarArreglo(arreglo: number[], orden: string): number[] {
    let aux = 0;

    if (orden == "Asc") {
        for (let i = 0; i < arreglo.length; i++) {
            for (let j = i + 1; j < arreglo.length; j++) {
                if (arreglo[i] > arreglo[j]) {
                    aux = arreglo[i];
                    arreglo[i] = arreglo[j];
                    arreglo[j] = aux;
                }
            }
        }
        return arreglo;
    }

    if (orden == "Desc") {
        for (let i = 0; i < arreglo.length; i++) {
            for (let j = i + 1; j < arreglo.length; j++) {
                if (arreglo[i] < arreglo[j]) {
                    aux = arreglo[i];
                    arreglo[i] = arreglo[j];
                    arreglo[j] = aux;
                }
            }
        }
        return arreglo;
    }

    return arreglo;
}

console.log(ordenarArreglo([10, 4, 6, 8, 9], "Desc"));