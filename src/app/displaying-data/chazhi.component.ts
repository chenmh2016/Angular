import {Component, OnInit} from '@angular/core';
import {Person} from './person';

@Component({
  selector: 'my-data',
  template: `<h1>{{title}}</h1><h2>My Favoutite hero: {{person.name}}</h2>
  <p>Heroes:</p><ul><li *ngFor="let person of persones">{{person.name}}</li></ul>
  <p *ngIf="persones.length > 3">there are many person!!</p>`
// ngIf 并不是显示和隐藏这条消息，他是在从dom中添加和一处这个段落内容，这会提高性能，特别是在一些大的项目脏哦能有条件的包含或者排除一大堆待着很多数据绑定的html时候
})
export class ChazhiComponent {
  title = '我的差值显示';
  // myHero = 'Jay zhou';
  // persones = ['laoda', 'xuxiaomei', 'lixian', 'zhaoqiong'];

  persones = [
    new Person(1, 'laoda'),
    new Person(2, 'XUXIAO'),
    new Person(3, 'laosan'),
    new Person(4, 'laosi')
  ];
  person = this.persones[0];
}
