import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';


import {AppComponent} from './app.component';
import {HeroDetailComponent} from './heroes/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroService} from './heroes/hero.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DisplayingDataModule} from './displaying-data/displaying-data.module';
import {ChazhiComponent} from './displaying-data/chazhi.component';


// 通常，declaration数组包含应用中属于该模块的组件，管道，和指令的列表，组件在被其他组件引用之前必须现在一个模块中声明过。
@NgModule({ // 声明本模块中的试图类，有三种：指令、组件、管道。
  declarations: [
    AppComponent,
    // 每一个组件都必须在一个（且只有一个）Angular模块中声明，所以在app，module.ts中导入这个HeroDetailComponent组件
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    ChazhiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DisplayingDataModule
  ],
  providers: [HeroService], // 服务的创建者，并加入到全局服务列表中，可用于应用的任何部分。
  bootstrap: [AppComponent] // 指定应用的主视图，成为根组件，他是所有其他视图的宿主，只有根模块才能设置bootstrap属性。
  // exprot: export语句只是用于演示如何导出的，根模块不需要导出任何东西，因为其他组件不需要导入根模块。
})
export class AppModule { }
