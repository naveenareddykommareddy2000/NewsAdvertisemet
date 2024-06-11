import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';

const routes: Routes = [
  {path:'component1',component:Component1Component},
  {path:'component2',component:Component2Component},
  {path:'component3',component:Component3Component},
  {path:'component4',component:Component4Component},
  {path:'',redirectTo:'/component1',pathMatch:'full'},
  {path:'**',redirectTo:'/component1'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
