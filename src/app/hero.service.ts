import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';


//导入了 Angular 的Injectable函数，并作为@Injectable()装饰器使用这个函数。
//当 TypeScript 看到@Injectable()装饰器时，就会记下本服务的元数据。 如果 Angular 需要往这个服务中注入其它依赖，就会使用这些元数据。
@Injectable()
export class HeroService {
  //HeroService可以从任何地方获取Hero数据 —— Web服务、本地存储或模拟数据源。 从组件中移除数据访问逻辑意味着你可以随时更改这些实现方式，而不影响需要这些英雄数据的组件。
  //使用承诺，异步调用
  //继续使用模拟数据。我们通过返回一个 立即解决的承诺 的方式，模拟了一个超快、零延迟的超级服务器。
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }//stub

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

//根据id从getHeroes()中过滤英雄列表。
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
