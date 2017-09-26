"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard.component");
var heroes_component_1 = require("./heroes.component");
var hero_detail_component_1 = require("./hero-detail.component");
var hero_form_component_1 = require("./hero-form.component");
// import { HeroListComponent } from './hero-list.component';
// import { newHeroDetailComponent } from './new-hero-detail.component';
//将路由抽出到一个变量中。如果你将来要导出这个模块，这种 "路由模块" 的模式也会更加明确。
//添加RouterModule.forRoot(routes)到imports。
//把RouterModule添加到路由模块的exports中，以便关联模块（比如AppModule）中的组件可以访问路由模块中的声明，比如RouterLink 和 RouterOutlet。
//无declarations！声明是关联模块的任务。
//如果有守卫服务，把它们添加到本模块的providers中（本例子中没有守卫服务）。
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'detail/:id', component: hero_detail_component_1.HeroDetailComponent },
    { path: 'heroes', component: heroes_component_1.HeroesComponent },
    { path: 'heroform', component: hero_form_component_1.HeroFormComponent },
];
//使用了forRoot()方法，因为我们是在应用根部提供配置好的路由器。
//forRoot()方法提供了路由需要的路由服务提供商和指令，并基于当前浏览器 URL 初始化导航。
//路由定义包括以下部分：
//Path: 路由器会用它来匹配浏览器地址栏中的地址，如heroes。
//Component: 导航到此路由时，路由器需要创建的组件（HeroesComponent）。
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map