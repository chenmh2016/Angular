import {Injectable} from '@angular/core';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
  // 添加getHeroes的桩方法
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  } // stub
}
// 当ts看到@injectable（）装饰器时候，就会记下本服务的元数据，如果angular需要往这个服务中注入其他依赖，就会使用这些元数据