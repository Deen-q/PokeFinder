import React from 'react'
import './PokemonInfo.css'

export default function PokemonInfo({ selectedPokemon }) {
  if (!selectedPokemon) { // if falsy
    return <div><h2>No Pokemon selected</h2></div>;
  } //reminder: code not executed if this return is fulfilled!
  //Thus, bypasses the issue when selectedPokemon = null

  const capitalisedName = selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1) 
  // ABOVE: this had to be BELOW the conditional check...


  return (
    <div>
      <p>Selected Pokemon Info:</p>
      <h3>{capitalisedName}</h3>

      <img 
      className="OfficialArtwork"
      src={selectedPokemon.sprites.other['official-artwork'].front_default} 
      alt={`Official Artwork for ${selectedPokemon}`}
      />
      
      <table className="statsTable">
        <thead>
          <tr>
            <th></th>
            <th>HP</th>
            <th>Attack</th>
            <th>Defense</th>
            <th>Sp. Attack</th>
            <th>Sp. Defense</th>
            <th>Speed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Base Stat</td>
            <td>{selectedPokemon.stats[0].base_stat}</td>
            <td>{selectedPokemon.stats[1].base_stat}</td>
            <td>{selectedPokemon.stats[2].base_stat}</td>
            <td>{selectedPokemon.stats[3].base_stat}</td>
            <td>{selectedPokemon.stats[4].base_stat}</td>
            <td>{selectedPokemon.stats[5].base_stat}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}