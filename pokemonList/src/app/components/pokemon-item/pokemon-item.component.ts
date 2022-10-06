import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon-response.interface';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {
  @Input() pokemonInput: Pokemon | undefined;
  i: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getPokemonPhotoUrl(url: string | undefined): string {
    if(url) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.getPokemonId(url)}.png`;
    } else {
      return '';
    }
  }

  getPokemonId(url: string | undefined): string {
    if(url) {
      let splitArray = url.split("/");
      return splitArray[6];
    } else {
      return '';
    }
  }


}
