import { Component, input } from '@angular/core';
import { PokemonInfo } from '../pokemonInfo';

@Component({
  selector: 'app-pokemon',
  imports: [],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css'
})
export class Pokemon {

  pokemon = input.required<PokemonInfo>();
}
