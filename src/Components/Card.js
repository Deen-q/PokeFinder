import React from 'react'

export default function Card({pokemon}) {
  // console.log(pokemon)
  return (
    <div className='Card_js'>
        <h2>1</h2>
        {/* <img src={"./images/ShrekRedEyes.jpg"} alt=""/> */}
        <h2 key={pokemon}>{pokemon}</h2> {/*Not pokemon.name because pokemon is an array*/}
        
    </div>
  )
}
