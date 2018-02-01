import {Component, Input} from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'hero-detail',
  template: '<div *ngIf="hero"><h2>{{hero.name}}details</h2>' +
  '<div><label for="">id: </label>{{hero.id}}</div>' +
  '<div><label for="">name:</label><input type="text" [(ngModel)]="hero.name" placeholder="name"></div></div>',
})
export class HeroDetailComponent {
  // 在hero属性前面加上@input装饰器，表明他是一个输入属性
  @Input() hero: Hero;
}
