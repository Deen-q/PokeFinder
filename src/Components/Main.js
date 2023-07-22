import React, { useEffect, useState } from 'react';
import Card from './Card';
import PokemonInfo from './PokemonInfo';
import axios from 'axios';

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=10");
  const [nextPageState, setNextPageState] = useState();
  const [prevPageState, setPrevPageState] = useState();
  
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  function handleCardClick(pokemon) { 
    console.log("Selected Pokemon:", pokemon);
    setSelectedPokemon(pokemon)
  }

  useEffect(() => {
    let cancel // undefined, handled using the CancelToken
    const fetchData = async () => {
      try { // needed for error handling, below
        setLoading(true);

        // response -> overall data from initial API call
        const response = await axios.get(currentUrl, {
          cancelToken: new axios.CancelToken(c => cancel = c)
        });
       
        const results = response.data.results;
        const nextPage = response.data.next
        const prevPage = response.data.previous

        const entirePokemonArrayData = await Promise.all(results.map(async (p) => { 
          const pokemonRes = await axios.get(p.url); // pokemonRes = response data for INDIVIDUAL Pokemon API call

          return pokemonRes.data;
        })); // return from entirePokemonArray

        setLoading(false);
        setPokemon(entirePokemonArrayData); // 'pokemon' now = to pokemonData
        //'pokemon' MUST BE USED FOR INDIVIDUAL POKEMON OBJECTS, BECAUSE THEY ARE PROCESSED ONE BY ONE USING .map

        setPrevPageState(prevPage)
        setNextPageState(nextPage)
        
      } catch (error) {
        // Everything written in this error block is what code will be executed in the event there is an error.Good backup solution.
        console.error(error, "Uh-oh, useEffect Error");
      }
    };

    fetchData();
    return () => cancel() //prevents old data from loading on top of newer data
  }, [currentUrl]); // end of useEffect


  if (loading) return "Loading...";

  return (
    <div className="Main_js_container">
      <div className="left-content">
      {/*Iteration: make 1 card per Pokemon*/}
        {pokemon.map((p, index) => (
          <Card key={index} pokemon={p} 
          handleCardClick={handleCardClick}
          />
        ))} 
        
        <div className="btn-div">
        {/* "Conditional Rendering" */}
          {prevPageState && ( // prevPageState has a truthy value only when previous page URL is available. It does not on page 1. 
            <button onClick={()=> { setCurrentUrl(prevPageState)
          }} >Previous
          </button> )}

          <button
          onClick={()=> {
            setCurrentUrl(nextPageState)
          }} >Next</button>
        </div>{/*end of btn-div*/}
        
      </div>{/*End of left-container div*/}

      <div className="right-content">
        <PokemonInfo selectedPokemon={selectedPokemon}/>
      </div>

    </div>
  );
}
