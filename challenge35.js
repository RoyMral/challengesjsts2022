/*
 * Reto #35
 * BATALLA POKÉMON
 * Fecha publicación enunciado: 29/08/22
 * Fecha publicación resolución: 06/09/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que calcule el daño de un ataque durante una batalla Pokémon.
 * - La fórmula será la siguiente: daño = 50 * (ataque / defensa) * efectividad
 * - Efectividad: x2 (súper efectivo), x1 (neutral), x0.5 (no es muy efectivo)
 * - Sólo hay 4 tipos de Pokémon: Agua, Fuego, Planta y Eléctrico (buscar su efectividad)
 * - El programa recibe los siguientes parámetros:
 *  - Tipo del Pokémon atacante.
 *  - Tipo del Pokémon defensor.
 *  - Ataque: Entre 1 y 100.
 *  - Defensa: Entre 1 y 100.
 */
function pokemon(atacante, defensor, attack, defense) {
  const efectividad = {
    super: 2,
    neutral: 1,
    noefectivo: 0.5,
  };

  const pokemon = {
    Water: "Water",
    Fire: "Fire",
    Plant: "Plant",
    Electric: "Electric",
  };

  if (pokemon[atacante] && pokemon[defensor]) {
    let damage = 50 * (attack / defense) * efectividad.noefectivo;

    console.log("El daño es de: ", damage);
  } else {
    console.error("El pókemon no existe");
  }
}

pokemon("Water", "Fire", 50, 30);
