import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicPageComponent } from './basic-page/basic-page.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';
import { SwitchesPageComponent } from './switches-page/switches-page.component';


@NgModule({
  declarations: [
    BasicPageComponent,
    DynamicPageComponent,
    SwitchesPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
