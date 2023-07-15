import React, { useEffect, useState } from 'react';
import Card from './Card';
import PokeInfo from './PokeInfo';
import axios from 'axios';

export default function Main() {
  
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true); //loading message

  
  
  useEffect(() =>{
    setLoading(true)
    axios.get(currentPageUrl).then(res => {
      setLoading(false) // set to true to test it OR comment out
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name)) //res.data, where data is the Object
    })
  }, [currentPageUrl]) // IF url changes, rerun the code inside useEffect --> re-get the pokemon on every page

  if (loading) return "Loading..."


  return (
    <div className="Main_js_container">
      <div className="left-content">
        <Card pokemon={pokemon}/>

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

////// OLD
// const getPokemon = async(res) => {
  //   res.map(async(item) => {
  //     // console.log(item.url)
  //     const result =  await axios.get(item.url)
  //     console.log(result.data);
  //     setPokeData(state=>{
  //       state=[...state, result.data]
  //       return state
  //     })
  //   })
  // }

  // useEffect(() => {
  //   pokemonFunction();

  // }, [url]) // research this part a bit more
  // //if [] empty = only render once page loads
  // //otherwise: when url UPDATES --> this useEffect runs = RENDER AGAIN

  // const pokemonFunction = async() => {
    //   setLoading(true);
    //   const res = await axios.get(url);
    //   // console.log(res.data.results)
    //   getPokemon(res.data.results)
    //   setLoading(false);
    // }