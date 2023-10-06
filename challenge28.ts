interface Producto {
    nombre: string;
    costo: number;
}

function Expendedora(tipo: number, monedas: number[]): void {
    const productos = [
        {
            1: {
                nombre: "Coca-Cola",
                costo: 100,
            },
        },
        {
            2: {
                nombre: "Agua",
                costo: 50,
            },
        },
        {
            3: {
                nombre: "Cerveza",
                costo: 155,
            },
        },
        {
            4: {
                nombre: "Pizza",
                costo: 200,
            },
        },
        {
            5: {
                nombre: "Donut",
                costo: 75,
            },
        },
    ];
    const coins = [5, 10, 50, 100, 200];

    const isCoin = monedas.map(function (moneda) {
        return coins.includes(moneda);
    });

    const procesar: any = productos[tipo - 1];

    if (procesar && !isCoin.includes(false)) {
        console.log("Producto elegido: ", procesar[tipo].nombre);
        console.log("Precio del producto: ", procesar[tipo].costo);
        let dineroCliente = monedas.reduce(function (acc, val) {
            return acc + val;
        });

        if (dineroCliente < procesar[tipo].costo) {
            console.log("No tienes suficientes monedas");
            console.log("Retornando: ", dineroCliente);
        } else {
            console.log("Dinero de vuelta: ", dineroCliente - procesar[tipo].costo);
        }
    } else {
        console.log("No se encuentra el tipo de producto seleccionado");
    }
}

Expendedora(2, [5, 5, 10, 10, 10, 5]);