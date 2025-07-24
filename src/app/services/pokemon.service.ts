import { Injectable } from '@angular/core';
import { PokemonInfo } from '../pokemonInfo';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  url = 'http://localhost:3000/pokemon';

  async getAllPokemon(): Promise<PokemonInfo[]> {

    const data = await fetch( this.url );
    return ( await data.json() ) ?? [];
  }

  async getPokemonById( id: number ): Promise<PokemonInfo | undefined> {

    const data = await fetch(`${this.url}?id=${id}`);
    const pokemonJson = await data.json();
    return pokemonJson[0] ?? [];
  }
}
