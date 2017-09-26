"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var mock_heroes_1 = require("./mock-heroes");
var of_1 = require("rxjs/observable/of");
require("rxjs/add/operator/delay");
var data_model_1 = require("./data-model");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
//导入了 Angular 的Injectable函数，并作为@Injectable()装饰器使用这个函数。
//当 TypeScript 看到@Injectable()装饰器时，就会记下本服务的元数据。 如果 Angular 需要往这个服务中注入其它依赖，就会使用这些元数据。
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.heroesUrl = 'api/heroes'; // URL to web api
        this.delayMs = 500;
    }
    //HeroService可以从任何地方获取Hero数据 —— Web服务、本地存储或模拟数据源。 从组件中移除数据访问逻辑意味着你可以随时更改这些实现方式，而不影响需要这些英雄数据的组件。
    //使用承诺，异步调用
    //继续使用模拟数据。我们通过返回一个 立即解决的承诺 的方式，模拟了一个超快、零延迟的超级服务器。
    HeroService.prototype.getHeroes = function () {
        return Promise.resolve(mock_heroes_1.HEROES);
    }; //stub
    // 利用toPromise操作符把Observable直接转换成Promise对象，回到已经熟悉的地盘。
    // 在 promise 的then()回调中，我们调用 HTTP 的Reponse对象的json方法，以提取出其中的数据。
    // 这个由json方法返回的对象只有一个data属性。 这个data属性保存了英雄数组，这个数组才是调用者真正想要的。 所以我们取得这个数组，并且把它作为承诺的值进行解析。
    // getHeroes(): Promise<Hero[]> {
    //   return this.http.get(this.heroesUrl)
    //              .toPromise()
    //              .then(response => response.json().data as Hero[])
    //              .catch(this.handleError);
    // }
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    HeroService.prototype.getHeroesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getHeroes()); }, 2000);
        });
    };
    //根据id从getHeroes()中过滤英雄列表。
    HeroService.prototype.getHero = function (id) {
        return this.getHeroes()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    // Fake server get; assume nothing can go wrong
    HeroService.prototype.getnewHeroes = function () {
        return of_1.of(data_model_1.newheroes).delay(this.delayMs); // simulate latency with delay
    };
    // Fake server update; assume nothing can go wrong
    HeroService.prototype.updatenewHero = function (hero) {
        var oldHero = data_model_1.newheroes.find(function (h) { return h.id === hero.id; });
        var newHero1 = Object.assign(oldHero, hero); // Demo: mutate cached hero
        return of_1.of(newHero1).delay(this.delayMs); // simulate latency with delay
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map