import React, { useEffect, useState } from 'react';
import Card from './Card';
import PokeInfo from './PokeInfo';
import axios from 'axios';

export default function Main() {
  
  const [pokeData, setPokeData] = useState([]); //start with empty array
  const [loading, setLoading] = useState(true); //loading message
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

  const pokemonFunction = async() => {
    setLoading(true);
    const res = await axios.get(url);
    // console.log(res.data.results)
    getPokemon(res.data.results)
    setLoading(false);
  }
  
  const getPokemon = async(res) => {
    res.map(async(item) => {
      // console.log(item.url)
      const result =  await axios.get(item.url)
      console.log(result.data);
      setPokeData(state=>{
        state=[...state, result.data]
        return state
      })
    })
  }

  useEffect(() => {
    pokemonFunction();

  }, [url]) // research this part a bit more
  //if [] empty = only render once page loads
  //otherwise: when url UPDATES --> this useEffect runs = RENDER AGAIN

  return (
    <div className="Main_js_container">
      <div className="left-content">
        <Card pokemon={pokeData} loading={loading}/>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

        <div className="btn-div">
          <button>Previous</button>
          <button>Next</button>
        </div>

      </div>

      <div className="right-content">
        <PokeInfo />

      </div>
    </div>
  )
}
