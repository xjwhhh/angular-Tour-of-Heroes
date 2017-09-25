//导入符号Component
import {Component} from '@angular/core';
import {Hero} from './hero'

import {OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';

import {HeroService} from './hero.service';

import 'rxjs/add/operator/switchMap';
//@Component装饰器为组件提供了Angular元数据。 CSS选择器的名字hero-detail会匹配元素的标签名，用于在父组件的模板中标记出当前组件的位置。

//添加一个ngIf内置指令，把ngIf的值设置为组件的selectedHero属性。
//当没有选中英雄时，ngIf指令会从 DOM 中移除表示英雄详情的这段 HTML 。 没有了表示英雄详情的元素，也就不用担心绑定问题。
//当用户选取了一个英雄，selectedHero变成了“已定义的”值，于是ngIf把英雄详情加回 DOM 中，并计算它所嵌套的各种绑定

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  // //通过它的输入属性hero接收一个英雄对象，然后把这个属性绑定到自己的模板中
  // @Input() hero:Hero;


  //新的HeroDetailComponent应该从ActivatedRoute服务的可观察对象params中取得id参数， 并通过HeroService服务获取具有这个指定id的英雄数据。
  hero: Hero;

  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private location: Location) {
  }

//注意switchMap运算符如何将可观察的路由参数中的 id 映射到一个新的Observable， 即HeroService.getHero()方法的结果。
//如果用户在 getHero 请求执行的过程中再次导航这个组件，switchMap 再次调用HeroService.getHero()之前， 会取消之前的请求。
//英雄的id是数字，而路由参数的值总是字符串。 所以我们需要通过 JavaScript 的 (+) 操作符把路由参数的值转成数字。
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

// 一个goBack()方法，它使用之前注入的Location服务， 利用浏览器的历史堆栈，导航到上一步。
  goBack(): void {
    this.location.back();
  }
}
