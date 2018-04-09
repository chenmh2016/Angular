import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'ant-style',
  templateUrl: './ant.component.html'
})
export class AntComponent {
  // 在hero属性前面加上@input装饰器，表明他是一个输入属性
  constructor() {}
}
