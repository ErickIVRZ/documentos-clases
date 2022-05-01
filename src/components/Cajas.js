import React from 'react';

const Cajas = ({titulo,act1,act2,act3,color}) => {
  return (
    <div style={{backgroundColor:color}}>
      <h1>{titulo}</h1>
      <h2>{act1}</h2>
      <h2>{act2}</h2>
      <h2>{act3}</h2>
      
    </div>
  );
};

export default Cajas;