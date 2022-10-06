import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResponse } from '../interfaces/pokemon-response.interface';

const API_BASE_URL = 'https://pokeapi.co/api/v2';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList(limit: number): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(`${API_BASE_URL}/pokemon?limit=${limit}`);
  }

  // TODO
  public getPokemon(id: string) {
    return this.http.get(`${API_BASE_URL}/pokemon/${id}`);
  }
}
