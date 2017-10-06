"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
//如果我们把路径/heroes粘贴到浏览器的地址栏，路由器会匹配到'Heroes'路由，并显示HeroesComponent组件。 
//我们必须告诉路由器它位置，所以我们把<router-outlet>标签添加到模板的底部。 RouterOutlet是由RouterModule提供的指令之一。 
//当我们在应用中导航时，路由器就把激活的组件显示在<router-outlet>里面。
//锚标签中的[routerLink]绑定。 我们把RouterLink指令（ROUTER_DIRECTIVES中的另一个指令）绑定到一个字符串。 它将告诉路由器，当用户点击这个链接时，应该导航到哪里。
//由于这个链接不是动态的，我们只要用一次性绑定的方式绑定到路由的路径 (path) 就行了。 回来看路由配置表，我们清楚的看到，这个路径 —— '/heroes'就是指向HeroesComponent的那个路由的路径。
//Angular路由器提供了routerLinkActive指令，我们可以用它来为匹配了活动路由的 HTML 导航元素自动添加一个 CSS 类。
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>{{title}}</h1>\n  <nav>\n    <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n    <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\n    <a routerLink=\"/heroform\" routerLinkActive=\"active\">HeroForm</a>\n    <a routerLink=\"/herolist\" routerLinkActive=\"active\">HeroList</a>\n  </nav>\n  <router-outlet></router-outlet>\n",
        //首先把moduleId: module.id添加到AppComponent组件的@Component元数据中以启用相对于模块的文件URL。 然后添加styleUrls属性，使其指向这个CSS文件
        styles: ["\n  h1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}\n\n\n  "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map