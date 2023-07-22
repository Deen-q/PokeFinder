import React from 'react'

export default function PokemonInfo({ selectedPokemon }) {
  if (!selectedPokemon) {
    return <div>No Pokemon selected</div>;
  }

  const capitalisedName = selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1) // This had to be BELOW the conditional check...

  return (
    <div>
      <h1>Selected Pokemon Info</h1>
      <p>{capitalisedName}</p>
      {/* Add other information as needed */}
      </div>
      );
    }

