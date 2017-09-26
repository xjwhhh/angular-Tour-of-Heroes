import {Component, Input, OnChanges} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

import {Address, newHero, states} from './data-model';
import {HeroService} from './hero.service';

@Component({
  selector: 'new-hero-detail',
  templateUrl: './new-hero-detail.component.html'
})
export class newHeroDetailComponent implements OnChanges {
  @Input() hero: newHero;

  heroForm: FormGroup;
  nameChangeLog: string[] = [];
  // 住址中有一个所在州属性，用户将会从<select>框中选择一个州，我们会用<option>元素渲染各个州。我们从data-model.ts中导入states（州列表）。
  states = states;

  constructor(private fb: FormBuilder,
              private heroService: HeroService) {

    this.createForm();
    this.logNameChange();
  }

// 用FormBuilder来定义heroForm
  createForm() {
    // FormBuilder.group是一个用来创建FormGroup的工厂方法，它接受一个对象，对象的键和值分别是FormControl的名字和它的定义。 在这个例子中，name控件的初始值是空字符串。
    this.heroForm = this.fb.group({
      name: '',
      // 要想使用FormArray，我们要这么做：
// 在数组中定义条目（FormControl或FormGroup）。
// 把这个数组初始化微一组从数据模型中的数据创建的条目。
// 根据用户的需求添加或移除这些条目。
      secretLairs: this.fb.array([]),
      power: '',
      sidekick: ''
    });
  }

// HeroListComponent组件把英雄的名字显示给用户。 当用户点击一个英雄时，列表组件把所选的英雄通过输入属性hero传给HeroDetailComponent。
// 这种方式下，每当用户选择一个新英雄时，HeroDetailComponent中的hero值就会发生变化。 我们可以在ngOnChanges钩子中调用setValue，就像例子中所演示的那样， 每当输入属性hero发生变化时，Angular就会调用它。
// reset方法有一个可选的state值，让我们能在重置状态的同时顺便设置控件的值。 在内部实现上，reset会把该参数传给了setValue
  ngOnChanges() {
    this.heroForm.reset({
      name: this.hero.name
    });
    this.setAddresses(this.hero.addresses);
  }

// 使用FormGroup.get方法来获取到FormArray的引用。 把这个表达式包装进一个名叫secretLairs的便捷属性中来让它更清晰，并供复用。
  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  };

// 下面的setAddresses方法把secretLairs数组替换为一个新的FormArray，使用一组表示英雄地址的FormGroup来进行初始化。
// 注意，我们使用FormGroup.setControl方法，而不是setValue方法来设置前一个FormArray。 我们所要替换的是控件，而不是控件的值。
// 还要注意，secretLairs数组中包含的是**FormGroup，而不是Address。 //
  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.heroForm.setControl('secretLairs', addressFormArray);
  }

// 获取secretLairs数组，并把新的表示地址的FormGroup添加到其中
  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }

// 当用户提交表单时，HeroDetailComponent会把英雄实例的数据模型传给所注入进来的HeroService的一个方法来进行保存。
  onSubmit() {
    this.hero = this.prepareSaveHero();
    this.heroService.updatenewHero(this.hero).subscribe(/* error handling */);
    this.ngOnChanges();
  }

// 原始的hero中有一些保存之前的值，用户的修改仍然是在表单模型中。 所以我们要根据原始英雄（根据hero.id找到它）的值组合出一个新的hero对象，并用prepareSaveHero助手来深层复制变化后的模型值。
// 地址的深层复制
// 我们已经把formModel.secretLairs赋值给了saveHero.addresses（参见注释掉的部分）， saveHero.addresses数组中的地址和formModel.secretLairs中的会是同一个对象。 用户随后对小屋所在街道的修改将会改变saveHero中的街道地址。
// 但prepareSaveHero方法会制作表单模型中的secretLairs对象的复本，因此实际上并没有修改原有对象。

  prepareSaveHero(): newHero {
    const formModel = this.heroForm.value;

    // deep copy of form model lairs
    const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
      (address: Address) => Object.assign({}, address)
    );

    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    const saveHero: newHero = {
      id: this.hero.id,
      name: formModel.name as string,
      // addresses: formModel.secretLairs // <-- bad!
      addresses: secretLairsDeepCopy
    };
    return saveHero;
  }

// 用户可以撤销修改，并通过点击Revert按钮来把表单恢复到原始状态。
// 丢弃很容易。只要重新执行ngOnChanges方法就可以拆而，它会重新从原始的、未修改过的hero数据模型来构建出表单模型
  revert() {
    this.ngOnChanges();
  }

// 监听姓名这个FormControl中值的变化
// 当用户修改英雄的名字或秘密小屋时，Angular并不会调用ngOnChanges。 幸运的是，我们可以通过订阅表单控件的属性之一来了解这些变化，此属性会发出变更通知。
// 有一些属性，比如valueChanges，可以返回一个RxJS的Observable对象。
// logNameChange方法会把一条改名记录追加到nameChangeLog数组中。 用*ngFor绑定在组件模板的底部显示这个数组
  logNameChange() {
    const nameControl = this.heroForm.get('name');
    nameControl.valueChanges.forEach(
      (value: string) => this.nameChangeLog.push(value)
    );
  }
}

