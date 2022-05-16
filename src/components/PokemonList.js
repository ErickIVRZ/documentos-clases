import getAllPokemos from '../services/getAllPokemos';
import { useEffect, useState } from 'react';
import Pokemon from './Pokemon';

const PokemonList = () => {

  const [pokemonArray, setPokemonArray]=useState([])

  useEffect(()=>{
    getAllPokemos()
    .then(res=>{
      console.log(res.data.results)
      setPokemonArray(res.data.results)
    })
    .catch(err=>console.log(err))
  },[])

const list=pokemonArray.map((pokemon)=><Pokemon name={pokemon.name} url={pokemon.url} key={pokemon.url}/>)


  return(
    <div>
      {list}
    </div>
  )

};

export default PokemonList;