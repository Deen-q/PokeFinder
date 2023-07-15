import React, { useEffect, useState } from 'react';
import Card from './Card';
import PokeInfo from './PokeInfo';
import axios from 'axios';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20");
        const results = response.data.results;
        const pokemonData = await Promise.all(results.map(async (p) => {
          const pokemonRes = await axios.get(p.url);
          return pokemonRes.data;
        }));
        setLoading(false);
        setPokemon(pokemonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (loading) return "Loading...";

  return (
    <div className="Main_js_container">
      <div className="left-content">
        {pokemon.map((p, index) => (
          <Card key={index} pokemon={p} />
        ))}
        <div className="btn-div">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
      <div className="right-content">
        <PokeInfo />
      </div>
    </div>
  );
}
