import React from "react";

export default function Card({ pokemon, handleCardClick }) {
  const capitalisedName =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  function cardIsClicked() {
    //write func here so it can be used in return
    handleCardClick(pokemon); // calls a function 'borrowed' from Main.js
  } // when called --> sends 'pokemon' data to Main.js
  //'cardIsClicked' exists purely so that it can be called below. Do not get it confused with 'handleCardClick', from Main.js

  return (
    <div className="Card_js" onClick={() => cardIsClicked()}>
      <h2>{capitalisedName}</h2>
      <img src={pokemon.sprites.front_default} alt="pokemon" />
    </div>
  );
}
