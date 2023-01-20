import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root',
})
export class SuperHeroService {
  private url = 'SuperHeroAPI'; //controller name
  constructor(private http: HttpClient) {}

  public getHeros(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);
  }
  public updateHeros(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.put<SuperHero[]>(
      `${environment.apiUrl}/${this.url}`,
      hero
    );
  }
  public deleteHeros(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.delete<SuperHero[]>(
      `${environment.apiUrl}/${this.url}/${hero.id}`
    );
  }
  public createHeros(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.post<SuperHero[]>(
      `${environment.apiUrl}/${this.url}`,
      hero
    );
  }
}
