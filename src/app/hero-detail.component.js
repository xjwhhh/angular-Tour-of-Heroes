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
//导入符号Component
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var hero_service_1 = require("./hero.service");
require("rxjs/add/operator/switchMap");
//@Component装饰器为组件提供了Angular元数据。 CSS选择器的名字hero-detail会匹配元素的标签名，用于在父组件的模板中标记出当前组件的位置。
//添加一个ngIf内置指令，把ngIf的值设置为组件的selectedHero属性。
//当没有选中英雄时，ngIf指令会从 DOM 中移除表示英雄详情的这段 HTML 。 没有了表示英雄详情的元素，也就不用担心绑定问题。
//当用户选取了一个英雄，selectedHero变成了“已定义的”值，于是ngIf把英雄详情加回 DOM 中，并计算它所嵌套的各种绑定
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    //注意switchMap运算符如何将可观察的路由参数中的 id 映射到一个新的Observable， 即HeroService.getHero()方法的结果。
    //如果用户在 getHero 请求执行的过程中再次导航这个组件，switchMap 再次调用HeroService.getHero()之前， 会取消之前的请求。
    //英雄的id是数字，而路由参数的值总是字符串。 所以我们需要通过 JavaScript 的 (+) 操作符把路由参数的值转成数字。
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.heroService.getHero(+params.get('id')); })
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    // 一个goBack()方法，它使用之前注入的Location服务， 利用浏览器的历史堆栈，导航到上一步。
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return HeroDetailComponent;
}());
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'hero-detail',
        templateUrl: './hero-detail.component.html',
        styleUrls: ['./hero-detail.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.ActivatedRoute,
        common_1.Location])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map