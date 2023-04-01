import './assets/css/global.css';
import './assets/css/pokedex.css';

import './assets/js/poke-api.js';
const pokeModel = require('./assets/js/pokemon-model.js');

function convertTypeToLi(pokemonType) {
  return pokemonType.map(
    (typeSlot) => `<li class="type">${typeSlot.type.name}</li>`
  );
}

function pokemonConvertToLi(pokemon) {
  return `
    <li class="pokemon">
      <span class="number">#${pokemon.order}</span>
      <span class="name">${pokemon.name}</span>

      <div class="detail">
       <ol class="types">
         ${convertTypeToLi(pokemon.types).join('')}
       </ol>
       <img src="${pokemon.sprites.other.dream_world.front_default}"
         alt="${pokemon.name}"
       />
      </div>
    </li>
  `;
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.default.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(pokemonConvertToLi).join('');
});
