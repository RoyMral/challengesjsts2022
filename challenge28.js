/*
 * Reto #28
 * MÁQUINA EXPENDEDORA
 * Fecha publicación enunciado: 11/07/22
 * Fecha publicación resolución: 18/07/22
 * Dificultad: MEDIA
 *
 * Enunciado: Simula el funcionamiento de una máquina expendedora creando una operación
 * que reciba dinero (array de monedas) y un número que indique la selección del producto.
 * - El programa retornará el nombre del producto y un array con el dinero de vuelta (con el menor
 *   número de monedas).
 * - Si el dinero es insuficiente o el número de producto no existe, deberá indicarse con un mensaje
 *   y retornar todas las monedas.
 * - Si no hay dinero de vuelta, el array se retornará vacío.
 * - Para que resulte más simple, trabajaremos en céntimos con monedas de 5, 10, 50, 100 y 200.
 * - Debemos controlar que las monedas enviadas estén dentro de las soportadas.
 */
function Expendedora(tipo, monedas) {
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

  const procesar = productos[tipo - 1];

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
