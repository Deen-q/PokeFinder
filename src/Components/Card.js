import React from 'react';

export default function Card({ pokemon }) {
  return (
    <div className='Card_js'>
      {/* <img src={pokemon.sprites.front_default} alt="pokemon"></img> */}
      <h2>{pokemon}</h2>
    </div>
  );
}
