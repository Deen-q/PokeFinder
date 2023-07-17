import React from 'react';

export default function Card({ pokemon }) {
  const capitalisedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
  
  return (
    <div className="Card_js">
      <h2>{capitalisedName}</h2> {/*before pokemon.name didnt work because then, pokemon = array, I think*/}
      <img src={pokemon.sprites.front_default} alt="pokemon" />
      {/* Display other desired information from pokemon */}
    </div>
  );
}
