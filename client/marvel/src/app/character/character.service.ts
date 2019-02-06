import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiRootUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
  ) { }

  getCharacters(): Observable<any> {
    return this.http.get<any>(`${this.apiRootUrl}/characters`)
    .pipe(
      tap(characters => console.log('characters fetched', characters))
    );
  }

  getCharacter(characterId): Observable<any> {
    return this.http.get<any>(`${this.apiRootUrl}/characters/${characterId}`)
    .pipe(
      tap(character => console.log('character fetched', character))
    );
  }
}
