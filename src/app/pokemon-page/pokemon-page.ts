import { Component, inject } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon';
import { PokemonInfo } from '../pokemonInfo';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-page',
  imports: [Pokemon],
  templateUrl: './pokemon-page.html',
  styleUrl: './pokemon-page.css'
})
export class PokemonPage {

  pokemonList: PokemonInfo[] = [];

  pokemonService: PokemonService = inject(PokemonService);

  // Add filtering here

  constructor() {
    this.pokemonService
      .getAllPokemon()
      .then( (pokemonList: PokemonInfo[]) => {
        this.pokemonList = pokemonList;
      })
  }
}
