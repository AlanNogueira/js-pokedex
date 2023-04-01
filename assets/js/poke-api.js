import {Pokemon} from './pokemon-model.js';

const pokeApi = {};

function convertPokeDetailToPokeModel(pokeDetail) {
  const pokemon = new Pokemon.;
  pokemon.
}

pokeApi.getPokemonDetails = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then((pokemon) => {
      qwfwe;
    });
};

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))
    .then((detailsRequests) => Promise.all(detailsRequests))
    .then((pokemonsDetails) => pokemonsDetails);
};

export default pokeApi;
