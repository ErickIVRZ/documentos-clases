import React, { useEffect, useState } from 'react';
import getPokemon from '../services/getPokemon';

const Pokemon = ({name,url}) => {

  const [pokemonImg,setPokemonImg]=useState('')

useEffect(()=>{
  getPokemon(url)
  .then(res=>{
    console.log(res.data)
    setPokemonImg(res.data.sprites.front_default)
  })
  .catch(err=>{
    console.log(err)
  })

},[url])


  return (
    <div>
      <img src={pokemonImg} alt="" />
      <h1>{name}</h1>
    </div>
  );
};

export default Pokemon;