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
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(currentPageUrl);
        setLoading(false);
        setNextPageUrl(response.data.next);
        setPrevPageUrl(response.data.previous);
        setPokemon(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [currentPageUrl]);

  if (loading) return "Loading...";

  return (
    <div className="Main_js_container">
      <div className="left-content">
        {pokemon.map((p, index) => (
          <Card key={index} pokemonUrl={p.url} />
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
