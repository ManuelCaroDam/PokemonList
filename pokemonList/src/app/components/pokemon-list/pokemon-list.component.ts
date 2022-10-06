import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon-response.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  listadoPokemon: Pokemon[] | undefined;
  pokemonNumberSelected = '50';

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
   
  }


  getPokemons(pokemonLimit: number) {
    this.pokemonService.getPokemonList(pokemonLimit).subscribe( resultado => {
      this.listadoPokemon = resultado.results;
      console.log(resultado);
    });
  }

  getPokemonList() {
    this.pokemonService.getPokemonList(parseInt(this.pokemonNumberSelected)).subscribe( resultado => {
      this.listadoPokemon = resultado.results;
      console.log(resultado);
    });
  }


}
