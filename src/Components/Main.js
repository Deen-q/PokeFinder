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
        const res = await axios.get(currentPageUrl);
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        const pokemonNames = res.data.results.map(p => p.name);
        setPokemon(pokemonNames);
      } catch (error) {
        // Handle error here
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
          <Card key={index} pokemon={p} />
        ))} {/*map over array and create Card component for each Pokemon's name. The key ensures a unique identifier*/}
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