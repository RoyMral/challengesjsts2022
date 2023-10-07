interface Pokemon {

  tipo: string;
}

function pokemonDamage(atacante: string, defensor: string, attack: number, defense: number): void {
  const efectividad = {
    super: 2,
    neutral: 1,
    noefectivo: 0.5,
  };

  const pokemon: Record<string, Pokemon> = {
    Water: { tipo: "Water" },
    Fire: { tipo: "Fire" },
    Plant: { tipo: "Plant" },
    Electric: { tipo: "Electric" }
  };


  if (pokemon[atacante] && pokemon[defensor]) {
    let damage = 50 * (attack / defense) * efectividad.noefectivo;

    console.log("El daño es de: ", damage);
  } else {
    console.error("El pókemon no existe");
  }
}

pokemonDamage("Water", "Fire", 50, 30);