import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail.component';

// 通常，declaration数组包含应用中属于该模块的组件，管道，和指令的列表，组件在被其他组件引用之前必须现在一个模块中声明过。
@NgModule({
  declarations: [
    AppComponent,
    // 每一个组件都必须在一个（且只有一个）Angular模块中声明，所以在app，module.ts中导入这个HeroDetailComponent组件
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
