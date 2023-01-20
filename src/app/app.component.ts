import { Component } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SuperHero.UI';
  heros: SuperHero[] = [];
  heroToEdit?: SuperHero;
  constructor(private superHeroService: SuperHeroService) {}
  ngOnInit(): void {
    this.superHeroService
      .getHeros()
      .subscribe((result: SuperHero[]) => (this.heros = result));
  }
  initNewHero() {
    this.heroToEdit = new SuperHero();
  }
  editHero(hero: SuperHero) {
    this.heroToEdit = hero;
  }
  updateHeroList(heros: SuperHero[]) {
    this.heros = heros;
  }
}
