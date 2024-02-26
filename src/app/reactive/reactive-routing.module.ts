import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from './basic-page/basic-page.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';
import { SwitchesPageComponent } from './switches-page/switches-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'basic', component: BasicPageComponent},
      {path: 'dynamic', component: DynamicPageComponent},
      {path: 'switches', component: SwitchesPageComponent},
      {path: '**', redirectTo: 'basic'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
