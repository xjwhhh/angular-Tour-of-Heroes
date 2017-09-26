import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import {newHero, newheroes} from './data-model';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


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

  private heroesUrl = 'api/heroes';  // URL to web api

constructor(private http: Http) { }

// 利用toPromise操作符把Observable直接转换成Promise对象，回到已经熟悉的地盘。
// 在 promise 的then()回调中，我们调用 HTTP 的Reponse对象的json方法，以提取出其中的数据。
// 这个由json方法返回的对象只有一个data属性。 这个data属性保存了英雄数组，这个数组才是调用者真正想要的。 所以我们取得这个数组，并且把它作为承诺的值进行解析。
// getHeroes(): Promise<Hero[]> {
//   return this.http.get(this.heroesUrl)
//              .toPromise()
//              .then(response => response.json().data as Hero[])
//              .catch(this.handleError);
// }

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

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


  delayMs = 500;

  // Fake server get; assume nothing can go wrong
  getnewHeroes(): Observable<newHero[]> {
    return of(newheroes).delay(this.delayMs); // simulate latency with delay
  }

  // Fake server update; assume nothing can go wrong
  updatenewHero(hero: newHero): Observable<newHero> {
    const oldHero = newheroes.find(h => h.id === hero.id);
    const newHero1 = Object.assign(oldHero, hero); // Demo: mutate cached hero
    return of(newHero1).delay(this.delayMs); // simulate latency with delay
  }
}
