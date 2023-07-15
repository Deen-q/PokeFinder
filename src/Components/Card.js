import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Card({ pokemonUrl }) {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(pokemonUrl);
        setLoading(false);
        setPokemonData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [pokemonUrl]);

  if (loading) return "Loading...";

  return (
    <div className="Card_js">
      <h2>{pokemonData?.name}</h2>
      <img src={pokemonData?.sprites?.front_default} alt="pokemon" />
      {/* Display other desired information from pokemonData */}
    </div>
  );
}
