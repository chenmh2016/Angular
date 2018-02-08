import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';



@Injectable()
export class HeroService {
  // 添加getHeroes的桩方法
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  private heroesUrl = 'data/heroes';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
 // 通过http请求获取数据heroes
  // return this.http.get(this.heroesUrl).toPromise().then(response => response.json().data as Hero[])
  //   .catch(this.handleError);
  // 通过http请求获取数据hero
  // getHero(id: number): Promise<Hero> {
  //   const url = `${this.heroesUrl}/${id}`;
  //   return this.http.get(url)
  //     .toPromise()
  //     .then(response => response.json().data as Hero)
  //     .catch(this.handleError);
  // }
  private handleError(error: any): Promise<any> {
    console.error('an arror occurred', error);
    return Promise.reject(error.message || error);
  }
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
    // 通过这种方式获取某一个英雄详情，然后更改他，返回按钮页头的英雄名字也会随之更改，因为我们使用模拟出来的英雄列表，修改的是一份全局共享的英雄列表
  }
    update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), {headers: this.headers}).toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }
  // 更新英雄操作，通过英雄id告诉服务器应该更新那个英雄，put的body是该英雄的json字符串，通过调用JSON.stringify得到的，并且在请求头中标记处的body内容类型是application/json
  creat(name: string): Promise<Hero> {
    return this.http.post(this.heroesUrl, JSON.stringify({name: name}),{headers:this.headers})
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }
  delete(id: number):Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
// 当ts看到@injectable（）装饰器时候，就会记下本服务的元数据，如果angular需要往这个服务中注入其他依赖，就会使用这些元数据
