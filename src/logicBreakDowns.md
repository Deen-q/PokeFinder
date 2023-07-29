### Purpose of file: reduce clutter from comments

## entirePokemonArrayData breakdown
const entirePokemonArrayData = await Promise.all(results.map(async (p) => { 
   // 'async(p)=>' p for parameter; p = each element URL in 'results' array. Everything after => is executed for every .map iteration
   //map iterates over each URL + creates new array with corresponding promises
          
   // pokemonRes = response data for INDIVIDUAL Pokemon API call
    const pokemonRes = await axios.get(p.url); //p.url selects the url, instead of name (the only 2 available, 'url' or 'name')

          return pokemonRes.data;
        })); 
   // return from entirePokemonArray


# .map for the Card Component in jsx
.map creates a card per pokemon in the array 

-> execute the arrow function 

-> returns Card component with pokemon data, p for ea iteration

--> p is a VARIABLE that holds value of the current pokemon data being processed by each iteration of .map function

---> each card receives a different pokemon object as the pokemon prop