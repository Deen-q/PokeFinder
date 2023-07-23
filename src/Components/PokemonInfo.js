import React from 'react'

export default function PokemonInfo({ selectedPokemon }) {
  if (!selectedPokemon) { // if falsy
    return <div><h2>No Pokemon selected</h2></div>;
  } //reminder: code not executed if this return is fulfilled!
  //Thus, bypasses the issue when selectedPokemon = null

  const capitalisedName = selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1) // This had to be BELOW the conditional check...


  return (
    <div>
      <h2>Selected Pokemon Info</h2>
      <p>{capitalisedName}</p>

      <img 
      className="OfficialArtwork"
      src={selectedPokemon.sprites.other['official-artwork'].front_default} 
      alt={`Official Artwork for ${selectedPokemon}`}
      />
      
      <h3>HP:{selectedPokemon.stats[0].base_stat}</h3>
      <h3>Attack:{selectedPokemon.stats[1].base_stat}</h3>
      <h3>Defense:{selectedPokemon.stats[2].base_stat}</h3>
      <h3>Sp. Attack:{selectedPokemon.stats[3].base_stat}</h3>
      <h3>Sp. Defense:{selectedPokemon.stats[4].base_stat}</h3>
      <h3>Speed:{selectedPokemon.stats[5].base_stat}</h3>
      </div>
      );
    }

