"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_heroes_1 = require("./mock-heroes");
var of_1 = require("rxjs/observable/of");
require("rxjs/add/operator/delay");
var data_model_1 = require("./data-model");
//导入了 Angular 的Injectable函数，并作为@Injectable()装饰器使用这个函数。
//当 TypeScript 看到@Injectable()装饰器时，就会记下本服务的元数据。 如果 Angular 需要往这个服务中注入其它依赖，就会使用这些元数据。
var HeroService = (function () {
  function HeroService() {
    this.delayMs = 500;
  }

  //HeroService可以从任何地方获取Hero数据 —— Web服务、本地存储或模拟数据源。 从组件中移除数据访问逻辑意味着你可以随时更改这些实现方式，而不影响需要这些英雄数据的组件。
  //使用承诺，异步调用
  //继续使用模拟数据。我们通过返回一个 立即解决的承诺 的方式，模拟了一个超快、零延迟的超级服务器。
  HeroService.prototype.getHeroes = function () {
    return Promise.resolve(mock_heroes_1.HEROES);
  }; //stub
  HeroService.prototype.getHeroesSlowly = function () {
    var _this = this;
    return new Promise(function (resolve) {
      // Simulate server latency with 2 second delay
      setTimeout(function () {
        return resolve(_this.getHeroes());
      }, 2000);
    });
  };
  //根据id从getHeroes()中过滤英雄列表。
  HeroService.prototype.getHero = function (id) {
    return this.getHeroes()
      .then(function (heroes) {
        return heroes.find(function (hero) {
          return hero.id === id;
        });
      });
  };
  // Fake server get; assume nothing can go wrong
  HeroService.prototype.getnewHeroes = function () {
    return of_1.of(data_model_1.newheroes).delay(this.delayMs); // simulate latency with delay
  };
  // Fake server update; assume nothing can go wrong
  HeroService.prototype.updatenewHero = function (hero) {
    var oldHero = data_model_1.newheroes.find(function (h) {
      return h.id === hero.id;
    });
    var newHero1 = Object.assign(oldHero, hero); // Demo: mutate cached hero
    return of_1.of(newHero1).delay(this.delayMs); // simulate latency with delay
  };
  return HeroService;
}());
HeroService = __decorate([
  core_1.Injectable()
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map
