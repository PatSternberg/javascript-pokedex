We're going to use the publicly available Pokémon API to create a Pokédex app, where we can store a list of Pokémon we have caught, in our quest to be the very best, like no one ever was.

    Create a file, api.js which exports a function fetchPokemon. This function should:
        Take the name of a Pokémon as an argument
        Use fetch to make a HTTP request to https://pokeapi.co/api/v2/pokemon/<pokemonname>
        Once the fetch has completed, then convert the response to JSON
        Once the response is converted to JSON, then log out the data.

(Don't know what a Pokédex is?)

// in node

const fetchPokemon = require('./api.js')
fetchPokemon('pikachu')

// This should log:
// {
//   abilities: [
//     { ability: [Object], is_hidden: false, slot: 1 },
//     { ability: [Object], is_hidden: true, slot: 3 }
//   ],
//   base_experience: 112,
//   forms: [
//     {
//       name: 'pikachu',
//       url: 'https://pokeapi.co/api/v2/pokemon-form/25/'
//     }
//   ],
//   height: 4,
//   held_items: [
//     { item: [Object], version_details: [Array] },
//     { item: [Object], version_details: [Array] }
//   ],
//   id: 25,
//   (etc...)
// }

Challenge - Finishing the Pokédex

Currently the API is returning a huge amount of data, most of which we don't care about. Let's keep only the info we want.
1. Update fetchPokemon

Update fetchPokemon so that:

    It returns a Promise
    Instead of console.loging the Pokémon data, we instead use it to create and return a new object, containing the following fields:
        name, the name of the Pokémon
        id, the id number of the Pokémon
        height
        weight
        (Bonus) types, what types the Pokémon is. This should be an array, such as ['electric'] or ['fire', flying']

// in node

const fetchPokemon = require('./api')
fetchPokemon('charizard')
  .then((pokemon) => console.log(pokemon))

// This should log:
// {
//   name: 'charizard',
//   id: 6,
//   height: 17,
//   weight: 905,
//   types: ['fire', 'flying']
// }

Hint:

2. Testing fetchPokemon

Create a test file for our fetchPokemon method.

    You may want to refer to the Testing Asynchronous Code pill.
    Make sure your code passes the test that you write.

Suggested solution

3. Creating the Pokédex

Test-drive a Pokedex class, that has two methods, catch and all, with the following behaviour:

// in the node REPL

const pokedex  = new Pokedex();
pokedex.catch('pikachu'); // Adds pikachu to the pokedex
// then, after some time has passed...
pokedex.catch('jigglypuff'); // Adds jigglypuff to the pokedex
// then, after some time has passed...
pokedex.all(); // returns an array of the pokemon in the pokedex

Summary

Phew! That was a lot! Let's recap.

By now, you should know:

    What an API is.
    How we can interact with APIs, using the terminal, browser, and JavaScript.
    That some operations take time to complete, and are asynchronous.
    Some asynchronous operations, like fetch, return something called a Promise
    Promises have a .then method, which allows us to say what we want to do once the operation has completed, by passing a callback.
    Because asynchronous operations take time to complete, we need to write our tests slightly differently when using them.

If you're fuzzy on any of these points, reread the material in this section, or send a question to your cohort slack channel or coach.