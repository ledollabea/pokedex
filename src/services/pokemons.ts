import { api } from ".";
import type { IPokemonsResponse } from "./types";


const pokemons = async (page:number, limit=20): Promise<IPokemonsResponse> => {
  const response = await api.get('/pokemon', {
    params: {
      limit,
      offset: page * 100,
    }
  });
  
  return response.data;
}

export default pokemons