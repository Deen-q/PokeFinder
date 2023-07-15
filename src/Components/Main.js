import React, { useEffect, useState } from 'react';
import Card from './Card';
import PokeInfo from './PokeInfo';
import axios from 'axios';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(currentPageUrl).then(res => {
      setLoading(false);
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      const pokemonNames = res.data.results.map(p => p.name);
      setPokemon(pokemonNames);
    });
  }, [currentPageUrl]);

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
