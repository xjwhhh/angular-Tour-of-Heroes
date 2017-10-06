import {Component} from '@angular/core';
import {Router} from '@angular/router';
//如果我们把路径/heroes粘贴到浏览器的地址栏，路由器会匹配到'Heroes'路由，并显示HeroesComponent组件。 
//我们必须告诉路由器它位置，所以我们把<router-outlet>标签添加到模板的底部。 RouterOutlet是由RouterModule提供的指令之一。 
//当我们在应用中导航时，路由器就把激活的组件显示在<router-outlet>里面。

//锚标签中的[routerLink]绑定。 我们把RouterLink指令（ROUTER_DIRECTIVES中的另一个指令）绑定到一个字符串。 它将告诉路由器，当用户点击这个链接时，应该导航到哪里。
//由于这个链接不是动态的，我们只要用一次性绑定的方式绑定到路由的路径 (path) 就行了。 回来看路由配置表，我们清楚的看到，这个路径 —— '/heroes'就是指向HeroesComponent的那个路由的路径。

//Angular路由器提供了routerLinkActive指令，我们可以用它来为匹配了活动路由的 HTML 导航元素自动添加一个 CSS 类。
@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    <a routerLink="/heroform" routerLinkActive="active">HeroForm</a>
    <a routerLink="/herolist" routerLinkActive="active">HeroList</a>
  </nav>
  <router-outlet></router-outlet>
`,
//首先把moduleId: module.id添加到AppComponent组件的@Component元数据中以启用相对于模块的文件URL。 然后添加styleUrls属性，使其指向这个CSS文件
  styles: [`
  h1 {
  font-size: 1.2em;
  color: #999;
  margin-bottom: 0;
}
h2 {
  font-size: 2em;
  margin-top: 0;
  padding-top: 0;
}
nav a {
  padding: 5px 10px;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
  background-color: #eee;
  border-radius: 4px;
}
nav a:visited, a:link {
  color: #607D8B;
}
nav a:hover {
  color: #039be5;
  background-color: #CFD8DC;
}
nav a.active {
  color: #039be5;
}


  `]

  //   styleUrls: ['./app.component.css'],  失败

})

// @Component({
//   selector: 'my-app',
//   template: 
//   `<h1>{{title}}</h1>`
// })
export class AppComponent {
  title = 'Tour of Heroes';
}
