# Plans

## Making the Cards clickable --> onClick() => show 'Stats' in Right Container ✅ (complete)
- On card click, display that Pokemons stats in PokemonInfo
- Need to pass something to PokemonInfo? The individual pokemon perhaps (pokemon var)?
- Once PokemonInfo has the data, display information on the page?

## Search Bar ✅ (complete)
- data from input field is concatenated at the end of currentUrl
- search button takes the CONTENT of the search field and fetches based on it

## Team creation with move select + held item
- When pokemon is selected, add button appear below stats
- screen moves down (via useRef) on button click to show current team
- Team has pixel theme, like in the original party menu
- On click, on the team, option to customise moves and held item
- perhaps team view on left, move and item select on right
- important not to immediately/forcefully pull the user to party menu when adding pokemons - must be on button press