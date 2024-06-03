import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.http.get(`${this.baseUrl}/character`);
  }

  getCharacterById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/character/${id}`);
  }
}
