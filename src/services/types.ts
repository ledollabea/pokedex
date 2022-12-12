export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
}

export interface IOnePokemonResponse {
  abilities: IAbilities[],
  base_experience: number,
  forms: object[],
  game_indices: object[],
  height: number,
  held_items: object[],
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  moves: object[],
  name: string,
  order: number,
  past_types: string[]
  species: object,
  sprites: ISprites,
  stats: object[],
  types: object[],
  weight: number
}

export interface ISprites {
  back_default: string,
  front_default: string,
  back_shiny?: string,
  front_shiny?: string,
  back_female: string,
  front_female: string,
  back_shiny_female?: string,
  front_shiny_female?: string
}

export interface IAbilities {
  ability: IPokemon,
  is_hidden: boolean,
  slot: number
}
