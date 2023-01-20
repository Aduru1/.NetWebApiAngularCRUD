import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from '../../models/super-hero';
import { SuperHeroService } from '../../services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css'],
})
export class EditHeroComponent implements OnInit {
  @Input() hero?: SuperHero;
  @Output() herosUpdated = new EventEmitter<SuperHero[]>();
  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit(): void {}
  updateHero(hero: SuperHero) {
    this.superHeroService
      .updateHeros(hero)
      .subscribe((heros: SuperHero[]) => this.herosUpdated.emit(heros));
  }
  createHero(hero: SuperHero) {
    this.superHeroService
      .createHeros(hero)
      .subscribe((heros: SuperHero[]) => this.herosUpdated.emit(heros));
  }

  deleteHero(hero: SuperHero) {
    this.superHeroService
      .deleteHeros(hero)
      .subscribe((heros: SuperHero[]) => this.herosUpdated.emit(heros));
  }
}
