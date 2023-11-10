import React, { useEffect, useState } from "react";
import Card from "./Card";
import PokemonInfo from "./PokemonInfo";
import axios from "axios";
import NavBar from "./NavBar";

export default function Main() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [nextPageState, setNextPageState] = useState();
  const [prevPageState, setPrevPageState] = useState();

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const [searchedPokemonName, setSearchedPokemonName] = useState("");
  const [singleCallPokemon, setSingleCallPokemon] = useState();

  function handleCardClick(pokemon) {
    // pokemon argument represents the clicked hard. Updates 'selectedPokemon' accordingly!
    console.log("Selected Pokemon:", pokemon);
    setSelectedPokemon(pokemon);
  }

  useEffect(() => {
    let cancel; // undefined, handled using the CancelToken
    const fetchData = async () => {
      try {
        // needed for error handling, below
        setLoading(true);

        // response -> overall data from initial API call
        const response = await axios.get(`${currentUrl}?limit=10`, {
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });

        const results = response.data.results;
        const nextPage = response.data.next;
        const prevPage = response.data.previous;

        let pokemonRes;
        const entirePokemonArrayData = await Promise.all(
          results.map(async (p) => {
            pokemonRes = await axios.get(p.url); // pokemonRes = response data for INDIVIDUAL Pokemon API call. ENDS on last Pokemon entry.
            return pokemonRes.data;
          }) // return from entirePokemonArray
        );

        setLoading(false);
        setPokemon(entirePokemonArrayData); // 'pokemon' now = to pokemonData
        //'pokemon' MUST BE USED FOR INDIVIDUAL POKEMON OBJECTS, BECAUSE THEY ARE PROCESSED ONE BY ONE USING .map

        setSingleCallPokemon(pokemonRes);

        setPrevPageState(prevPage);
        setNextPageState(nextPage);
      } catch (error) {
        // Everything written in this error block is what code will be executed in the event there is an error.Good backup solution.
        console.error(error, "Uh-oh, useEffect Error");
      }
    };

    fetchData();
    return () => cancel(); //prevents old data from loading on top of newer data
  }, [currentUrl]); // end of useEffect

  function handleSearchInputChange(e) {
    setSearchedPokemonName(e.target.value.toLowerCase());
  };

  async function handleSearchButtonClick() {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchedPokemonName}` // works via number: API queries based on name or ID (no.)
      );

      const searchedPokemon = response.data;
      setSelectedPokemon(searchedPokemon);
      setLoading(false);
    } catch (error) {
      console.error(error, "Uh-oh, Search Error");
      setSelectedPokemon(null);
      setLoading(false);
    }
  };

  if (loading) return <h2 className="LoadingAlert">Loading...</h2>


  return (
    <>
      <NavBar />

      <div className="SearchBox">
          <input
            placeholder="Search by name or number"
            type="text"
            onChange={handleSearchInputChange}
          />
          <button className="SearchButton" onClick={handleSearchButtonClick}>
            Search
          </button>
        </div>

      <div className="Main_js_container">
        
        <div className="left_content">
          <div className="Card_Container">
            {/*Iteration: make 1 card per Pokemon*/}
            {pokemon.map((p, index) => (
              <Card key={index} pokemon={p} handleCardClick={handleCardClick} />
            ))}
          </div>
          <div className="btn_div">
            {/* "Conditional Rendering" */}
            {prevPageState && (
              <button
                onClick={() => {
                  setCurrentUrl(prevPageState);
                }}
              >
                Previous
              </button>
            )}
            <button
              onClick={() => {
                setCurrentUrl(nextPageState);
              }}
            >
              Next
            </button>
          </div>{" "}
          {/*end of btn-div*/}
        </div>{" "}
        {/*End of left-content div*/}
        <div className="right_content">
          <PokemonInfo selectedPokemon={selectedPokemon} />
        </div>
      </div>
    </>
  );
}
