"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); // <-- NgModel lives here
//每个组件都必须在一个（且只有一个）Angular模块中声明。
var app_component_1 = require("./app.component");
var hero_detail_component_1 = require("./hero-detail.component");
var heroes_component_1 = require("./heroes.component");
var hero_service_1 = require("./hero.service");
var dashboard_component_1 = require("./dashboard.component");
var hero_form_component_1 = require("./hero-form.component");
var app_routing_module_1 = require("./app-routing.module");
var forms_2 = require("@angular/forms");
// import { newHeroDetailComponent } from './new-hero-detail.component';
// import { HeroListComponent } from './hero-list.component';
// import { HeroListContainerComponent } from './hero-list-container.component';
var AppModule = (function () {
  function AppModule() {
  }

  return AppModule;
}());
AppModule = __decorate([
  core_1.NgModule({
    imports: [
      platform_browser_1.BrowserModule,
      forms_1.FormsModule,
      app_routing_module_1.AppRoutingModule,
      forms_2.ReactiveFormsModule
    ],
    //通常，declarations数组包含应用中属于该模块的组件、管道和指令的列表。 组件在被其它组件引用之前必须先在一个模块中声明过。
    declarations: [
      app_component_1.AppComponent,
      hero_detail_component_1.HeroDetailComponent,
      heroes_component_1.HeroesComponent,
      dashboard_component_1.DashboardComponent,
      hero_form_component_1.HeroFormComponent,
    ],
    // exports: [ // export for the DemoModule
    //   AppComponent,
    //   // newHeroDetailComponent,
    //   // HeroListComponent
    // ],
    providers: [
      hero_service_1.HeroService
    ],
    bootstrap: [app_component_1.AppComponent]
  })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
