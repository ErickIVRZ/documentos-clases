import React from 'react';
import Abilities from './Abilities';

const Pokemon = ({ name,image,id,abilities}) => {

const abilitieList = abilities.map((ability)=><Abilities name={ability.ability.name} key={ability.ability.name }/>)

  return (
    <div>
     <h1>{name}</h1>
     <h3>{id}</h3>
     <img src={image} alt="" />
     {abilitieList}

    </div>
  );
};

export default Pokemon;