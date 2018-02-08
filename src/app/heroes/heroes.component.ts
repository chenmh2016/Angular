import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Router} from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  // providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['./detail', this.selectedHero.id]);
  }
  // 通过两行代码代替用new创建HeroService实例：添加一个构造函数，并定义一个私有属性
  // 构造函数自己什么也不做，他在参数中定义了一个私有的heroService属性，并把它标记为注入HeroService的靶点，当创建AppComponent实例时，angular知道需要先提供一个Hero的实例。
  // 添加组件的provices元数据：上面[HeroService]
  constructor(private router: Router, private heroService: HeroService) {}
  getHeroes(): void {
    //  这种方式立即返回一个模拟的英雄列表，他的getHeroes()函数签名是同步的
    // 但是最终，英雄的数据会从远端服务器获取，当使用远端服务器的时候，用户不会等待服务器的相应。也就是说，你没法在等待期间阻塞浏览器界面。为了协调视图和相应，我们可以使用承诺，他是一种异步技术，他会改变getHeroes()方法的签名。
    // 承诺就是在有了结果时候，他承诺会回调我们，我们请求一个异步服务去做点什么，并且给他一个车回调函数，他会去做，一旦完成，他就会调用我们的回调函数，并通过参数把工作结果或者错误信息传给我们。
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) {return; }
    this.heroService.creat(name).then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
  }
  delete(hero: Hero): void {
    this.heroService.delete(hero.id).then(() => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) { this.selectedHero = null; }
    });
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
