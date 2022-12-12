import axios from "axios";
import type { IOnePokemonResponse } from "./types";


const pokemon = async (url:string): Promise<IOnePokemonResponse> => {
  const response = await axios.get(url)
    .then(res => {
      return res.data
    })
    .catch(err => console.log(err));  
  return response
}

export default pokemon