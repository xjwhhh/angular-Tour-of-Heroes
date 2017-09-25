import {Component, OnInit} from '@angular/core';
import {Hero} from './hero'
import {HeroService} from './hero.service';
import {Router} from '@angular/router';


//[(ngModel)]是一个Angular语法，用与把hero.name绑定到输入框中。 它的数据流是双向的：从属性到输入框，并且从输入框回到属性。

//ngFor的*前缀表示<li>及其子元素组成了一个主控模板。
//ngFor指令在AppComponent.heroes属性返回的heroes数组上迭代，并输出此模板的实例。
//引号中赋值给ngFor的那段文本表示“从heroes数组中取出每个英雄，存入一个局部的hero变量，并让它在相应的模板实例中可用”。

//当表达式(hero === selectedHero)为true时，Angular会添加一个CSS类selected。为false时则会移除selected类。

//协调主视图AppComponent与HeroDetailComponent的方式是把AppComponent的selectedHero属性绑定到HeroDetailComponent的hero属性上。
//每当selectedHero变化时，HeroDetailComponent就会显示一个新的英雄。
//在等号的左边，是方括号围绕的hero属性，这表示它是属性绑定表达式的目标。 我们要绑定到的目标属性必须是一个输入属性，否则Angular会拒绝绑定，并抛出一个错误。

//注意，英雄的名字全被显示成大写字母。那是uppercase管道的效果，借助它，我们能干预插值表达式绑定的过程。可以管道操作符 ( | ) 后面看到它。
//管道擅长做下列工作：格式化字符串、金额、日期和其它显示数据。 Angular 自带了一些管道，我们也可以写自己的管道。

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']

  // //注册一个HeroService提供商，来告诉注入器如何创建HeroService
  // //providers数组告诉 Angular，当它创建新的AppComponent组件时，也要创建一个HeroService的新实例。 AppComponent会使用那个服务来获取英雄列表，在它组件树中的每一个子组件也同样如此。
  // providers:[HeroService]
})
export class HeroesComponent implements OnInit {
  //英雄的数据从实现类中分离了出来，因为最终，英雄的名字会来自一个数据服务。
  heroes: Hero[];
  selectedHero: Hero;


//你可以用两行代码代替用new时的一行：
//添加一个构造函数，并定义一个私有属性。
//添加组件的providers元数据。

//构造函数自己什么也不用做，它在参数中定义了一个私有的heroService属性，并把它标记为注入HeroService的靶点。
//现在，当创建AppComponent实例时，Angular 知道需要先提供一个HeroService的实例。

  constructor(private router: Router,
              private heroService: HeroService) {
  }

//变成基于承诺的，并在承诺的事情被解决时再行动。 一旦承诺的事情被成功解决（Resolve），我们就会显示英雄数据。
//把回调函数作为参数传给承诺对象的then方法,在回调函数中，我们把服务返回的英雄数组赋值给组件的heroes属性。
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

//带有初始化逻辑的ngOnInit方法，Angular会在适当的时候调用它。 在这个例子中，我们通过调用getHeroes()来完成初始化。
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

//View Details按钮绑定的方法
//将一个包含两个元素的链接参数数组 — 路径和路由参数 — 传递到路由的navigate（）， 与之前在DashboardComponent中使用[routerLink]绑定一样。
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
