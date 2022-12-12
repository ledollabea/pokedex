import { useInfiniteQuery } from "react-query"
import pokemons from "../../services/pokemons"
import PokemonCard from "../PokemonCard";
import {  PokemonList } from "./styles";
const Main = () => {
  const { data, fetchNextPage, isLoading } = useInfiniteQuery(['pokemons'],  
    ({pageParam = 0}) => pokemons(pageParam),
    { getNextPageParam: (lastPage, pages) => pages.length});
  
  const divScroll = document.querySelector<HTMLDivElement>(".divScroll")
  let observer = new IntersectionObserver(([entry]) => {
    const ratio = entry.intersectionRatio;
    if (ratio > 0) {
      fetchNextPage()
    }
  });
  if (!isLoading) {
    observer.observe(divScroll!)
  }

  return ( 
    <div>
      <h1>Pokedex 2.0</h1>
      <PokemonList>
      {
        data && data.pages.map((page) => page.results.map((pokemon) => 
          <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))
      }
        </PokemonList>
      <div className="divScroll" />
    </div>
  )
}

export default Main