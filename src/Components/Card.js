import React from 'react';

export default function Card({ pokemon }) {
  return (
    <div className="Card_js">
      <h2>{pokemon.name}</h2> {/*before pokemon.name didnt work because then, pokemon = array, I think*/}
      <img src={pokemon.sprites.front_default} alt="pokemon" />
      {/* Display other desired information from pokemon */}
    </div>
  );
}
