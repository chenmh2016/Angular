import { Component } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'app-root',
  template: '<h1>{{title}}</h1><div>' +
  '<ul class="heroes"><li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero==selectedHero"><span class="badge">{{hero.id}}</span>{{hero.name}}</li>' +
  '</ul>' +
  '</div>' +
  '<hero-detail [hero]="selectedHero"></hero-detail>',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) {}
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
