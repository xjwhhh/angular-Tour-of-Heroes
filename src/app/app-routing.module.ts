import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import { HeroFormComponent } from './hero-form.component';


//将路由抽出到一个变量中。如果你将来要导出这个模块，这种 "路由模块" 的模式也会更加明确。
//添加RouterModule.forRoot(routes)到imports。
//把RouterModule添加到路由模块的exports中，以便关联模块（比如AppModule）中的组件可以访问路由模块中的声明，比如RouterLink 和 RouterOutlet。
//无declarations！声明是关联模块的任务。
//如果有守卫服务，把它们添加到本模块的providers中（本例子中没有守卫服务）。
const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroform', component: HeroFormComponent}
];

//使用了forRoot()方法，因为我们是在应用根部提供配置好的路由器。 
//forRoot()方法提供了路由需要的路由服务提供商和指令，并基于当前浏览器 URL 初始化导航。

//路由定义包括以下部分：
//Path: 路由器会用它来匹配浏览器地址栏中的地址，如heroes。
//Component: 导航到此路由时，路由器需要创建的组件（HeroesComponent）。
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
