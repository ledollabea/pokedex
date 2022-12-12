import axios from 'axios';
import { useQuery } from 'react-query'
import pokemon from '../../services/pokemon'
import { IPokemon } from '../../services/types'
import { PokemonDiv, PokemonImg } from './styles';

const PokemonCard = ({ name, url }: IPokemon) => {
  const {data} = useQuery([name], async () => pokemon(url))
  
  return (
    <>
      <PokemonDiv>
        <PokemonImg src={data?.sprites.front_default} />
        <h3> {name} </h3>
      </PokemonDiv>
    </>
  )
}

export default PokemonCard