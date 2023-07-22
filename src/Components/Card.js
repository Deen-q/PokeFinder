import React from 'react';

export default function Card({ pokemon, handleCardClick }) {
  const capitalisedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

  const cardIsClicked = () => { //write func here so it can be used in return
    handleCardClick(pokemon)
    
  }

  return (
    <div className="Card_js" onClick={() => cardIsClicked()}>
      <h2>{capitalisedName}</h2>
      <img src={pokemon.sprites.front_default} alt="pokemon" />
    </div>
  );
}
