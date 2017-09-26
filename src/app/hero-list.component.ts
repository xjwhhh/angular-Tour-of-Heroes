import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

import {newHero} from './data-model';
import {HeroService} from './hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {
  heroes: Observable<newHero[]>;
  isLoading = false;
  selectedHero: newHero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.isLoading = true;
    this.heroes = this.heroService.getnewHeroes()
    // Todo: error handling
      .finally(() => this.isLoading = false);
    this.selectedHero = undefined;
  }

  select(hero: newHero) {
    this.selectedHero = hero;
  }
}
