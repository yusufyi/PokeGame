export interface PokemonList {
  name: string;
  url: string;
}

export interface Pokemon {
  name: string;
  id: string;
}

export interface MyPokemons {
  pokemons: Pokemon[]; // Fix syntax error by enclosing array elements in square brackets
  attack: number;
  defense: number;
}

// default value for MyPokemons
